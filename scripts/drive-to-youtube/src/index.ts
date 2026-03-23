import * as path from 'path';
import { config as loadEnv } from 'dotenv';

// Load .env from the script directory
loadEnv({ path: path.resolve(import.meta.dirname, '../.env') });

import { createOAuth2Client } from './auth.js';
import { getNewVideos, getFileStream } from './drive-watcher.js';
import { parseFilename } from './metadata-parser.js';
import { uploadVideo } from './youtube-uploader.js';
import { markProcessed } from './state.js';
import { sendNotification } from './notifier.js';

async function main(): Promise<void> {
  console.log('=== Desert Greenscapes: Drive → YouTube Uploader ===');
  console.log(`Started at ${new Date().toISOString()}\n`);

  const folderId = process.env.DRIVE_FOLDER_ID;
  const notificationEmail =
    process.env.NOTIFICATION_EMAIL ?? 'info@lvturf.com';

  if (!folderId) {
    console.error('Error: DRIVE_FOLDER_ID is not set in .env');
    process.exit(1);
  }

  const auth = createOAuth2Client();

  // 1. Find new videos in Drive
  console.log('Checking Google Drive for new videos...');
  const newVideos = await getNewVideos(auth, folderId);

  if (newVideos.length === 0) {
    console.log('No new videos found. Done.');
    return;
  }

  console.log(`Found ${newVideos.length} new video(s) to upload.\n`);

  let successCount = 0;
  let failCount = 0;

  // 2. Process each video
  for (const video of newVideos) {
    console.log(`Processing: ${video.name} (${formatSize(video.size)})`);

    try {
      // Parse metadata from filename
      const metadata = parseFilename(video.name, video.description);
      console.log(`  Title: ${metadata.title}`);
      console.log(`  Category: ${metadata.category ?? 'default'}`);
      console.log(`  Tags: ${metadata.tags.join(', ')}`);

      // Stream from Drive directly to YouTube
      console.log('  Downloading from Drive and uploading to YouTube...');
      const fileStream = await getFileStream(auth, video.id);
      const result = await uploadVideo(
        auth,
        fileStream,
        metadata,
        video.mimeType,
      );

      console.log(`  Uploaded! ${result.url}`);

      // Record in state
      markProcessed({
        driveFileId: video.id,
        youtubeVideoId: result.videoId,
        youtubeUrl: result.url,
        title: result.title,
        uploadedAt: new Date().toISOString(),
      });

      // Send email notification
      try {
        await sendNotification(auth, result, notificationEmail);
      } catch (emailErr) {
        console.warn(
          `  Warning: Failed to send email notification: ${emailErr instanceof Error ? emailErr.message : emailErr}`,
        );
      }

      successCount++;
    } catch (err) {
      failCount++;
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  FAILED: ${message}`);

      // Stop on quota errors
      if (message.includes('quotaExceeded') || message.includes('403')) {
        console.error(
          '\nYouTube API quota exceeded. Stopping. Try again tomorrow.',
        );
        break;
      }
    }

    console.log('');
  }

  // 3. Summary
  console.log('=== Summary ===');
  console.log(`  Uploaded: ${successCount}`);
  console.log(`  Failed:   ${failCount}`);
  console.log(`  Finished at ${new Date().toISOString()}`);
}

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
