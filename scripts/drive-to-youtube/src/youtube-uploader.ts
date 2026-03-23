import { google } from 'googleapis';
import type { OAuth2Client } from 'google-auth-library';
import type { Readable } from 'stream';
import { DEFAULT_PRIVACY_STATUS, RETRY_ATTEMPTS, RETRY_BASE_DELAY_MS } from './config.js';
import type { VideoMetadata } from './metadata-parser.js';

export interface UploadResult {
  videoId: string;
  url: string;
  title: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function uploadVideo(
  auth: OAuth2Client,
  fileStream: Readable,
  metadata: VideoMetadata,
  mimeType: string,
): Promise<UploadResult> {
  const youtube = google.youtube({ version: 'v3', auth });

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    try {
      const res = await youtube.videos.insert({
        part: ['snippet', 'status'],
        requestBody: {
          snippet: {
            title: metadata.title,
            description: metadata.description,
            tags: metadata.tags,
            categoryId: metadata.categoryId,
            defaultLanguage: 'en',
          },
          status: {
            privacyStatus: DEFAULT_PRIVACY_STATUS,
            selfDeclaredMadeForKids: false,
          },
        },
        media: {
          mimeType,
          body: fileStream,
        },
      });

      const videoId = res.data.id;
      if (!videoId) {
        throw new Error('YouTube API returned success but no video ID');
      }

      return {
        videoId,
        url: `https://youtu.be/${videoId}`,
        title: metadata.title,
      };
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err));

      // Don't retry on quota exceeded or auth errors
      const status = (err as { code?: number }).code;
      if (status === 403 || status === 401) {
        throw lastError;
      }

      if (attempt < RETRY_ATTEMPTS) {
        const delay = RETRY_BASE_DELAY_MS * Math.pow(3, attempt - 1);
        console.warn(
          `Upload attempt ${attempt} failed: ${lastError.message}. Retrying in ${delay / 1000}s...`,
        );
        await sleep(delay);
      }
    }
  }

  throw lastError ?? new Error('Upload failed after all retries');
}
