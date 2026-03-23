import { google, type drive_v3 } from 'googleapis';
import type { OAuth2Client } from 'google-auth-library';
import { SUPPORTED_MIME_TYPES, MAX_FILE_SIZE_BYTES } from './config.js';
import { isProcessed } from './state.js';
import type { Readable } from 'stream';

export interface DriveVideoFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  description: string | null;
}

export async function getNewVideos(
  auth: OAuth2Client,
  folderId: string,
): Promise<DriveVideoFile[]> {
  const drive = google.drive({ version: 'v3', auth });

  const mimeQuery = SUPPORTED_MIME_TYPES.map(
    (m) => `mimeType='${m}'`,
  ).join(' or ');

  const query = `'${folderId}' in parents and (${mimeQuery}) and trashed = false`;

  const files: DriveVideoFile[] = [];
  let pageToken: string | undefined;

  do {
    const res = await drive.files.list({
      q: query,
      fields: 'nextPageToken, files(id, name, mimeType, size, description)',
      orderBy: 'createdTime desc',
      pageSize: 50,
      pageToken,
    });

    for (const file of res.data.files ?? []) {
      if (!file.id || !file.name) continue;

      const size = parseInt(file.size ?? '0', 10);
      if (size > MAX_FILE_SIZE_BYTES) {
        console.warn(
          `Skipping "${file.name}" — exceeds max file size (${(size / 1024 / 1024 / 1024).toFixed(1)} GB)`,
        );
        continue;
      }

      if (isProcessed(file.id)) continue;

      files.push({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType ?? 'video/mp4',
        size,
        description: file.description ?? null,
      });
    }

    pageToken = res.data.nextPageToken ?? undefined;
  } while (pageToken);

  return files;
}

export async function getFileStream(
  auth: OAuth2Client,
  fileId: string,
): Promise<Readable> {
  const drive = google.drive({ version: 'v3', auth });

  const res = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'stream' },
  );

  return res.data as unknown as Readable;
}
