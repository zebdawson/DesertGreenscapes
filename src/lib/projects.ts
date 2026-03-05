export type ServiceType =
  | 'artificial-turf'
  | 'pavers'
  | 'waterfalls'
  | 'landscape-design'
  | 'putting-greens'
  | 'lighting'
  | 'outdoor-kitchens'
  | 'fire-features'
  | 'xeriscaping';

export interface Project {
  id: string;
  title: string;
  location: string;
  neighborhood?: string;
  date: string;
  services: ServiceType[];
  description: string;
  images: {
    thumbnail: string;
    gallery: string[];
    before?: string;
    after?: string;
  };
  video?: string;
  testimonial?: {
    quote: string;
    customerName: string;
    rating?: number;
  };
  stats?: {
    sqft?: number;
    duration?: string;
    rebateAmount?: number;
  };
  featured: boolean;
}

// Placeholder projects - replace with real data
export const projects: Project[] = [
  {
    id: 'henderson-complete-backyard',
    title: 'Backyard Artificial Turf & Desert Landscape',
    location: 'Las Vegas, NV',
    neighborhood: 'Henderson',
    date: '2024-01',
    services: ['artificial-turf', 'landscape-design'],
    description: 'Cracked dirt and overgrown weeds transformed into a lush artificial turf lawn with clean desert rock borders and mature plantings. This Las Vegas backyard went from neglected to neighborhood showpiece — and qualifies for up to $7/sq ft in SNWA rebates.',
    images: {
      thumbnail: '/images/projects/project-01-after.jpg',
      gallery: [
        '/images/projects/project-01-after.jpg',
        '/images/projects/project-01-before.jpg',
      ],
      before: '/images/projects/project-01-before.jpg',
      after: '/images/projects/project-01-after.jpg',
    },
    testimonial: {
      quote: 'Desert Greenscapes completely transformed our backyard! The artificial turf looks incredibly natural and the kids love it. Steve and his team were professional and finished fast.',
      customerName: 'Jennifer M.',
      rating: 5
    },
    stats: {
      sqft: 800,
      duration: '2 days',
      rebateAmount: 5600,
    },
    featured: true,
  },
  {
    id: 'summerlin-pool-waterfall',
    title: 'Luxury Pool Surround with Custom Waterfall',
    location: 'Las Vegas, NV',
    neighborhood: 'Summerlin',
    date: '2023-12',
    services: ['artificial-turf', 'waterfalls', 'pavers'],
    description: 'Premium poolside renovation featuring pet-friendly artificial turf, custom rock waterfall with LED lighting, and travertine paver decking. The waterfall creates a stunning focal point and soothing ambiance.',
    images: {
      thumbnail: '/images/projects/placeholder-waterfall-1.jpg',
      gallery: [
        '/images/projects/placeholder-waterfall-1.jpg',
        '/images/projects/placeholder-waterfall-2.jpg',
        '/images/projects/placeholder-turf-2.jpg',
      ],
      before: '/images/projects/placeholder-before.jpg',
      after: '/images/projects/placeholder-waterfall-1.jpg',
    },
    stats: {
      sqft: 800,
      duration: '6 days',
    },
    featured: true,
  },
  {
    id: 'north-vegas-front-yard',
    title: 'Water-Saving Front Yard Makeover',
    location: 'North Las Vegas, NV',
    date: '2024-02',
    services: ['artificial-turf', 'xeriscaping'],
    description: 'SNWA rebate project converting 600 sq ft of water-hungry grass to beautiful artificial turf with desert plant accents. Client saved $4,200 through the rebate program - we handled all paperwork.',
    images: {
      thumbnail: '/images/projects/placeholder-turf-1.jpg',
      gallery: [
        '/images/projects/placeholder-turf-1.jpg',
        '/images/projects/placeholder-turf-2.jpg',
      ],
      before: '/images/projects/placeholder-before.jpg',
      after: '/images/projects/placeholder-turf-1.jpg',
    },
    testimonial: {
      quote: 'The SNWA rebate process was so easy - they handled everything! Our water bill has dropped significantly since installing the artificial turf. Great investment.',
      customerName: 'Robert K.',
      rating: 5
    },
    stats: {
      sqft: 600,
      duration: '2 days',
      rebateAmount: 4200,
    },
    featured: false,
  },
  {
    id: 'henderson-paver-patio',
    title: 'Elegant Paver Patio with Fire Pit',
    location: 'Henderson, NV',
    date: '2023-11',
    services: ['pavers', 'fire-features', 'lighting'],
    description: 'Custom paver patio featuring intricate patterns, built-in fire pit, and ambient landscape lighting. Perfect for year-round outdoor entertaining in the Las Vegas climate.',
    images: {
      thumbnail: '/images/projects/placeholder-pavers-1.jpg',
      gallery: [
        '/images/projects/placeholder-pavers-1.jpg',
        '/images/projects/placeholder-pavers-2.jpg',
        '/images/projects/placeholder-lighting-1.jpg',
      ],
    },
    stats: {
      sqft: 400,
      duration: '5 days',
    },
    featured: false,
  },
  {
    id: 'green-valley-putting-green',
    title: 'Backyard Putting Green Paradise',
    location: 'Henderson, NV',
    neighborhood: 'Green Valley',
    date: '2024-01',
    services: ['putting-greens', 'artificial-turf'],
    description: 'Custom 600 sq ft putting green with professional-grade synthetic grass, multiple break points, and surrounding artificial turf. A golfer\'s dream backyard.',
    images: {
      thumbnail: '/images/projects/placeholder-turf-2.jpg',
      gallery: [
        '/images/projects/placeholder-turf-2.jpg',
        '/images/projects/placeholder-landscape-2.jpg',
      ],
    },
    stats: {
      sqft: 600,
      duration: '3 days',
    },
    featured: false,
  },
  {
    id: 'boulder-city-outdoor-kitchen',
    title: 'Complete Outdoor Kitchen & Entertainment Area',
    location: 'Boulder City, NV',
    date: '2023-10',
    services: ['outdoor-kitchens', 'pavers', 'lighting'],
    description: 'Full outdoor kitchen with BBQ island, bar seating, custom paver flooring, and professional-grade landscape lighting. Built to withstand desert conditions.',
    images: {
      thumbnail: '/images/projects/placeholder-pavers-2.jpg',
      gallery: [
        '/images/projects/placeholder-pavers-2.jpg',
        '/images/projects/placeholder-lighting-2.jpg',
      ],
    },
    stats: {
      duration: '7 days',
    },
    featured: false,
  },
  {
    id: 'anthem-complete-landscape',
    title: 'Modern Desert Landscape Design',
    location: 'Henderson, NV',
    neighborhood: 'Anthem',
    date: '2023-09',
    services: ['landscape-design', 'xeriscaping', 'lighting', 'pavers'],
    description: 'Contemporary desert landscape featuring native plants, decorative rock, custom pathways, and strategic lighting. Water-efficient and low-maintenance design.',
    images: {
      thumbnail: '/images/projects/placeholder-landscape-2.jpg',
      gallery: [
        '/images/projects/placeholder-landscape-2.jpg',
        '/images/projects/placeholder-lighting-2.jpg',
      ],
    },
    stats: {
      duration: '5 days',
    },
    featured: false,
  },
  {
    id: 'las-vegas-commercial-turf',
    title: 'Commercial Property Turf Installation',
    location: 'Las Vegas, NV',
    date: '2024-03',
    services: ['artificial-turf'],
    description: 'Large-scale commercial artificial turf installation for office complex common areas. Durable, professional-grade turf built for high traffic.',
    images: {
      thumbnail: '/images/projects/placeholder-turf-1.jpg',
      gallery: [
        '/images/projects/placeholder-turf-1.jpg',
      ],
    },
    stats: {
      sqft: 3000,
      duration: '5 days',
    },
    featured: false,
  },
];

// Gallery filter categories
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'artificial-turf', label: 'Artificial Turf', count: projects.filter(p => p.services.includes('artificial-turf')).length },
  { id: 'pavers', label: 'Pavers & Hardscape', count: projects.filter(p => p.services.includes('pavers')).length },
  { id: 'waterfalls', label: 'Waterfalls', count: projects.filter(p => p.services.includes('waterfalls')).length },
  { id: 'landscape-design', label: 'Complete Landscapes', count: projects.filter(p => p.services.includes('landscape-design')).length },
  { id: 'lighting', label: 'Lighting', count: projects.filter(p => p.services.includes('lighting')).length },
];

// Get projects by service type
export function getProjectsByService(service: ServiceType | 'all'): Project[] {
  if (service === 'all') return projects;
  return projects.filter(project => project.services.includes(service));
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

// Get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// Get recent projects
export function getRecentProjects(limit: number = 6): Project[] {
  return [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
