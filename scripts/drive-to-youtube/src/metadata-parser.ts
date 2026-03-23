import {
  CATEGORY_TEMPLATES,
  DEFAULT_TAGS,
  DEFAULT_YOUTUBE_CATEGORY_ID,
  buildDescription,
} from './config.js';

export interface VideoMetadata {
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
  category: string | null;
}

/**
 * Parses video metadata from a filename.
 *
 * Supported formats:
 *   [Category] Title -- tag1, tag2, tag3.mp4
 *   [Category] Title.mp4
 *   Title -- tag1, tag2.mp4
 *   Title.mp4
 */
export function parseFilename(
  filename: string,
  driveDescription?: string | null,
): VideoMetadata {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.[^.]+$/, '');

  let category: string | null = null;
  let title: string;
  let customTags: string[] = [];

  let remaining = nameWithoutExt;

  // Extract category from [brackets]
  const categoryMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  if (categoryMatch) {
    category = categoryMatch[1].trim();
    remaining = remaining.slice(categoryMatch[0].length);
  }

  // Split on " -- " to separate title from tags
  const dashSplit = remaining.split(/\s+--\s+/);
  title = dashSplit[0].trim();

  if (dashSplit.length > 1) {
    customTags = dashSplit[1]
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }

  // Build tags: default + category-specific + custom
  const categoryTemplate = category ? CATEGORY_TEMPLATES[category] : null;
  const categoryTags = categoryTemplate?.tags ?? [];
  const tags = [...new Set([...DEFAULT_TAGS, ...categoryTags, ...customTags])];

  const categoryId =
    categoryTemplate?.categoryId ?? DEFAULT_YOUTUBE_CATEGORY_ID;

  // Use Drive description if available, otherwise generate from template
  const description =
    driveDescription?.trim() || buildDescription(category, title);

  return {
    title,
    description,
    tags,
    categoryId,
    category,
  };
}
