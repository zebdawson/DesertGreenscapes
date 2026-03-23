export const SCOPES = [
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/gmail.send',
];

export const SUPPORTED_MIME_TYPES = [
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/webm',
  'video/x-matroska',
  'video/mpeg',
];

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024 * 1024; // 5 GB

export const RETRY_ATTEMPTS = 3;
export const RETRY_BASE_DELAY_MS = 5000;

export const DEFAULT_YOUTUBE_CATEGORY_ID = '22'; // People & Blogs
export const DEFAULT_PRIVACY_STATUS = 'public';

export const DEFAULT_TAGS = [
  'Desert Greenscapes',
  'Las Vegas landscaping',
  'Las Vegas',
  'landscaping',
  'outdoor living',
  'Nevada',
];

interface CategoryTemplate {
  categoryId: string;
  tags: string[];
  descriptionLine: string;
}

export const CATEGORY_TEMPLATES: Record<string, CategoryTemplate> = {
  Turf: {
    categoryId: '22',
    tags: ['artificial turf', 'turf installation', 'synthetic grass'],
    descriptionLine:
      'Watch our team transform this outdoor space with premium artificial turf.',
  },
  Waterfall: {
    categoryId: '22',
    tags: ['waterfall', 'water feature', 'custom waterfall'],
    descriptionLine:
      'See how we built this stunning custom rock waterfall from start to finish.',
  },
  Pavers: {
    categoryId: '22',
    tags: ['pavers', 'patio', 'hardscape', 'travertine'],
    descriptionLine:
      'Watch our expert crew install beautiful pavers to create the perfect outdoor space.',
  },
  Landscape: {
    categoryId: '22',
    tags: ['landscape design', 'backyard', 'front yard'],
    descriptionLine:
      'A complete landscape transformation by the Desert Greenscapes team.',
  },
  Lighting: {
    categoryId: '22',
    tags: ['landscape lighting', 'outdoor lighting', 'LED lighting'],
    descriptionLine:
      'See how professional landscape lighting transforms this property after dark.',
  },
  'Putting Green': {
    categoryId: '22',
    tags: ['putting green', 'golf', 'backyard golf'],
    descriptionLine:
      'Watch us build a professional-grade backyard putting green.',
  },
  Kitchen: {
    categoryId: '22',
    tags: ['outdoor kitchen', 'BBQ', 'outdoor cooking'],
    descriptionLine:
      'Building the ultimate outdoor kitchen for Las Vegas living.',
  },
  Fire: {
    categoryId: '22',
    tags: ['fire pit', 'fire feature', 'fireplace'],
    descriptionLine:
      'Creating a beautiful fire feature to complete this outdoor living space.',
  },
  Xeriscaping: {
    categoryId: '22',
    tags: ['xeriscaping', 'desert landscaping', 'water conservation'],
    descriptionLine:
      'A water-smart xeriscaping transformation perfect for the Las Vegas climate.',
  },
  Commercial: {
    categoryId: '22',
    tags: ['commercial turf', 'commercial landscaping', 'business'],
    descriptionLine:
      'Professional commercial turf installation by Desert Greenscapes.',
  },
};

export function buildDescription(
  category: string | null,
  title: string,
): string {
  const template = category
    ? CATEGORY_TEMPLATES[category]
    : null;
  const descriptionLine =
    template?.descriptionLine ??
    'Another quality project by Desert Greenscapes in Las Vegas.';

  const categoryLabel = category ?? 'Landscaping';

  return [
    `Desert Greenscapes - ${categoryLabel} | ${title}`,
    '',
    descriptionLine,
    '',
    'Get a FREE estimate: (702) 529-0377',
    'Visit us: https://www.desertgreenscapes.com',
    'SNWA Rebate: Up to $7/sq ft - We handle the paperwork!',
    '',
    'Licensed & Insured | NV License #0085191',
    'Serving Las Vegas, Henderson, Summerlin, and all of Southern Nevada since 2002.',
  ].join('\n');
}
