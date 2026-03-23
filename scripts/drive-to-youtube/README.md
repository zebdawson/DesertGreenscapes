# Drive to YouTube Uploader

Automatically uploads videos from a Google Drive folder to the Desert Greenscapes YouTube channel and sends email notifications.

## Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g., "Desert Greenscapes Automation")
3. Enable these APIs:
   - Google Drive API
   - YouTube Data API v3
   - Gmail API

### 2. Create OAuth2 Credentials

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Application type: **Desktop app**
4. Download the credentials

### 3. Configure Environment

```bash
cp .env.example .env
```

Fill in your `.env` file:
- `GOOGLE_CLIENT_ID` — from the OAuth2 credentials
- `GOOGLE_CLIENT_SECRET` — from the OAuth2 credentials
- `DRIVE_FOLDER_ID` — the ID from your Google Drive folder URL
- `NOTIFICATION_EMAIL` — where to send upload notifications

### 4. Install Dependencies

```bash
npm install
```

### 5. Authorize

Run the one-time auth flow to get a refresh token:

```bash
npm run auth
```

This opens a browser window. Sign in with the Google account that owns the YouTube channel, grant permissions, and the refresh token is saved to `.env` automatically.

### 6. Run

Upload any new videos from Drive:

```bash
npm start
```

### 7. Schedule (Optional)

Run automatically every 6 hours via cron:

```bash
crontab -e
```

Add this line (adjust the path):

```
0 */6 * * * cd /path/to/DesertGreenscapes/scripts/drive-to-youtube && npx tsx src/index.ts >> /var/log/drive-to-youtube.log 2>&1
```

## Filename Convention

Name your video files in Google Drive using this format to control YouTube metadata:

```
[Category] Video Title -- tag1, tag2, tag3.mp4
```

### Examples

| Filename | YouTube Title | Category |
|----------|--------------|----------|
| `[Turf] Henderson Backyard Transformation -- artificial turf, installation.mp4` | Henderson Backyard Transformation | Turf |
| `[Waterfall] Custom Rock Waterfall Build.mp4` | Custom Rock Waterfall Build | Waterfall |
| `[Pavers] Travertine Patio -- pavers, patio.mp4` | Travertine Patio | Pavers |
| `Backyard Project March 2026.mp4` | Backyard Project March 2026 | default |

### Available Categories

Turf, Waterfall, Pavers, Landscape, Lighting, Putting Green, Kitchen, Fire, Xeriscaping, Commercial

Each category adds relevant tags and a tailored description. All videos automatically include Desert Greenscapes business info, phone number, and website link in the description.

### Using Drive Description

If you set a description on the file in Google Drive (right-click → File information → Description), that text will be used as the YouTube description instead of the auto-generated template.

## How It Works

1. Lists all video files in the configured Drive folder
2. Skips any already uploaded (tracked in `state/processed-videos.json`)
3. Parses filename to determine title, tags, and description
4. Streams video from Drive directly to YouTube (no local disk usage)
5. Records the upload in state to prevent duplicates
6. Sends an email notification with the YouTube link and embed code

## Notes

- Videos are uploaded as **public** by default
- YouTube API quota allows ~6 uploads per day
- Supported formats: MP4, QuickTime, AVI, WebM, MKV, MPEG
- Max file size: 5 GB
