import { google } from 'googleapis';
import type { OAuth2Client } from 'google-auth-library';
import type { UploadResult } from './youtube-uploader.js';

function buildMimeEmail(
  to: string,
  subject: string,
  htmlBody: string,
): string {
  const lines = [
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    '',
    htmlBody,
  ];
  return lines.join('\r\n');
}

export async function sendNotification(
  auth: OAuth2Client,
  result: UploadResult,
  notificationEmail: string,
): Promise<void> {
  const gmail = google.gmail({ version: 'v1', auth });

  const subject = `New Video Uploaded to YouTube: ${result.title}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #16a34a;">Video Upload Complete</h2>
      <p>A new video has been uploaded to the Desert Greenscapes YouTube channel.</p>
      <table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Title</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${result.title}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">YouTube URL</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
            <a href="${result.url}" style="color: #2563eb;">${result.url}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Embed Code</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
            <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 12px;">
              &lt;iframe src="https://www.youtube.com/embed/${result.videoId}" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
            </code>
          </td>
        </tr>
      </table>
      <p style="color: #6b7280; font-size: 14px;">
        This is an automated notification from the Desert Greenscapes Drive-to-YouTube uploader.
      </p>
    </div>
  `;

  const raw = Buffer.from(
    buildMimeEmail(notificationEmail, subject, htmlBody),
  ).toString('base64url');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw },
  });

  console.log(`  Notification email sent to ${notificationEmail}`);
}
