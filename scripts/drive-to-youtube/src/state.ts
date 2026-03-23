import * as fs from 'fs';
import * as path from 'path';

const STATE_DIR = path.resolve(import.meta.dirname, '../state');
const STATE_FILE = path.join(STATE_DIR, 'processed-videos.json');

export interface ProcessedVideo {
  driveFileId: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  title: string;
  uploadedAt: string;
}

interface StateData {
  processedFiles: ProcessedVideo[];
}

function readState(): StateData {
  if (!fs.existsSync(STATE_FILE)) {
    return { processedFiles: [] };
  }
  const raw = fs.readFileSync(STATE_FILE, 'utf-8');
  return JSON.parse(raw) as StateData;
}

function writeState(state: StateData): void {
  if (!fs.existsSync(STATE_DIR)) {
    fs.mkdirSync(STATE_DIR, { recursive: true });
  }
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

export function isProcessed(driveFileId: string): boolean {
  const state = readState();
  return state.processedFiles.some((f) => f.driveFileId === driveFileId);
}

export function markProcessed(video: ProcessedVideo): void {
  const state = readState();
  state.processedFiles.push(video);
  writeState(state);
}

export function getProcessedVideos(): ProcessedVideo[] {
  return readState().processedFiles;
}
