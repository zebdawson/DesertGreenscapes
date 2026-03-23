import { google } from 'googleapis';
import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
import { SCOPES } from './config.js';

const ENV_PATH = path.resolve(import.meta.dirname, '../.env');

export function createOAuth2Client() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret) {
    throw new Error(
      'Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in .env file.\n' +
        'See .env.example for required variables.',
    );
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    'http://localhost:3456/oauth2callback',
  );

  if (refreshToken) {
    oauth2Client.setCredentials({ refresh_token: refreshToken });
  }

  return oauth2Client;
}

async function runAuthFlow(): Promise<void> {
  console.log('=== Desert Greenscapes - Google OAuth2 Setup ===\n');

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.error(
      'Error: Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file first.\n' +
        'Get these from: https://console.cloud.google.com/apis/credentials\n',
    );
    process.exit(1);
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:3456/oauth2callback',
  );

  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });

  console.log('Open this URL in your browser to authorize:\n');
  console.log(authorizeUrl);
  console.log('\nWaiting for authorization...\n');

  const code = await new Promise<string>((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      const queryParams = new url.URL(req.url!, 'http://localhost:3456')
        .searchParams;
      const authCode = queryParams.get('code');

      if (authCode) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
          '<h1>Authorization successful!</h1><p>You can close this window.</p>',
        );
        server.close();
        resolve(authCode);
      } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end('<h1>Authorization failed</h1><p>No code received.</p>');
        server.close();
        reject(new Error('No authorization code received'));
      }
    });

    server.listen(3456, () => {
      console.log('Listening on http://localhost:3456 for OAuth callback...');
    });
  });

  const { tokens } = await oauth2Client.getToken(code);

  if (!tokens.refresh_token) {
    console.error(
      'Error: No refresh token received. Try revoking access at\n' +
        'https://myaccount.google.com/permissions and running this again.',
    );
    process.exit(1);
  }

  // Append or update refresh token in .env file
  let envContent = '';
  if (fs.existsSync(ENV_PATH)) {
    envContent = fs.readFileSync(ENV_PATH, 'utf-8');
  }

  if (envContent.includes('GOOGLE_REFRESH_TOKEN=')) {
    envContent = envContent.replace(
      /GOOGLE_REFRESH_TOKEN=.*/,
      `GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`,
    );
  } else {
    envContent += `\nGOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`;
  }

  fs.writeFileSync(ENV_PATH, envContent);

  console.log('\nRefresh token saved to .env file.');
  console.log('Setup complete! You can now run: npm start');
}

// Run auth flow when this file is executed directly
const isDirectRun =
  process.argv[1] &&
  (process.argv[1].endsWith('auth.ts') || process.argv[1].endsWith('auth.js'));

if (isDirectRun) {
  const dotenv = await import('dotenv');
  dotenv.config({ path: ENV_PATH });
  runAuthFlow().catch((err) => {
    console.error('Auth failed:', err);
    process.exit(1);
  });
}

export { runAuthFlow };
