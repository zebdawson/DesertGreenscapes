// Business Information
export const BUSINESS_INFO = {
  name: 'Desert Greenscapes',
  phone: '702-529-0377',
  email: 'info@lvturf.com',
  address: {
    street: '1977 Sycamore Trail',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89108',
    full: '1977 Sycamore Trail, Las Vegas, NV 89108'
  },
  license: '0085191',
  hours: {
    weekday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: '#',
    instagram: '#',
    yelp: '#',
    google: '#'
  },
  tagline: 'Transform Your Desert Into Paradise',
  description: "Las Vegas's Premier Landscaping & Artificial Turf Experts"
};

// Team Members
export const TEAM_MEMBERS = [
  {
    name: 'Steve Hofsaess',
    role: 'Owner & Founder',
    bio: 'With over 20 years of experience in Las Vegas landscaping, Steve founded Desert Greenscapes in 2002 and has built it into one of Southern Nevada\'s most trusted names in outdoor transformations. His commitment to quality and customer satisfaction has earned the company an impeccable reputation.',
    specialties: ['Artificial Turf', 'Project Management', 'Customer Relations', 'SNWA Rebates'],
    image: '/images/team/steve.jpg'
  },
  {
    name: 'Pedro',
    role: 'Lead Installer & Partner',
    bio: 'Pedro brings decades of hands-on experience and bilingual expertise to every project. His meticulous attention to detail and dedication to craftsmanship ensure every installation exceeds expectations. Fluent in English and Spanish, Pedro connects with our diverse Las Vegas community.',
    specialties: ['Artificial Turf Installation', 'Custom Designs', 'Spanish Translation', 'Quality Control'],
    image: '/images/team/pedro.jpg'
  },
  {
    name: 'George',
    role: 'Waterfall & Plants Specialist',
    bio: 'George is a true artisan with decades of experience in custom waterfalls, koi ponds, desert plants, and complex installations. His ability to bring creative visions to life — including some of the most stunning water features in the Las Vegas valley — makes him an irreplaceable part of the Desert Greenscapes team.',
    specialties: ['Custom Waterfalls', 'Koi Ponds', 'Desert Plants', 'Hardscape Design'],
    image: '/images/team/george.jpg'
  }
];

// Legacy export for backward compatibility
export const TEAM = TEAM_MEMBERS;

// Service Areas
export const SERVICE_AREAS = [
  'Las Vegas',
  'Henderson',
  'North Las Vegas',
  'Boulder City',
  'Pahrump',
  'Mesquite',
  'Summerlin',
  'Green Valley',
  'Enterprise',
  'Spring Valley'
];

// Primary Services
export const PRIMARY_SERVICES = [
  {
    id: 'artificial-turf',
    title: 'Artificial Turf Installation',
    shortDescription: 'Premium synthetic grass for residential and commercial properties',
    description: 'Transform your outdoor space with our premium artificial turf solutions. Perfect for Las Vegas climate, our turf stays green year-round while saving water and maintenance costs.',
    icon: 'Sprout',
    image: '/images/services/artificial-turf.jpg',
    slug: '/services/artificial-turf',
    features: [
      'Prorated Lifetime Warranty',
      'SNWA Rebate Eligible ($7/sq ft)',
      'Pet-Friendly Options',
      'Drainage System Included',
      'UV Resistant',
      'Looks & Feels Natural'
    ],
    benefits: [
      'Zero water required',
      'No mowing or maintenance',
      'Always green and lush',
      'Perfect for pets and kids',
      'Increases property value',
      'Eco-friendly solution'
    ]
  },
  {
    id: 'pavers',
    title: 'Paver Installation',
    shortDescription: 'Custom patios, driveways, walkways, and retaining walls',
    description: 'Create stunning outdoor living spaces with our expert paver installation. From elegant patios to durable driveways, we bring your vision to life.',
    icon: 'LayoutGrid',
    image: '/images/services/pavers.jpg',
    slug: '/services/pavers',
    features: [
      'Custom Designs',
      'Premium Materials',
      'Expert Installation',
      'Proper Base Preparation',
      'Variety of Styles & Colors',
      'Long-Lasting Durability'
    ],
    benefits: [
      'Increases home value',
      'Low maintenance',
      'Weather resistant',
      'Versatile designs',
      'Easy repairs',
      'Timeless appeal'
    ]
  },
  {
    id: 'waterfalls',
    title: 'Custom Waterfalls & Water Features',
    shortDescription: '20+ years creating stunning water features and pondless waterfalls',
    description: 'Add the soothing sound of water to your outdoor oasis. Our custom waterfalls and water features are expertly designed and built to last in the desert climate.',
    icon: 'Waves',
    image: '/images/services/waterfalls.jpg',
    slug: '/services/waterfalls',
    features: [
      '20+ Years Experience',
      'Custom Designs',
      'Natural Stone',
      'LED Lighting Options',
      'Pondless Systems Available',
      'Energy Efficient Pumps'
    ],
    benefits: [
      'Creates peaceful ambiance',
      'Unique focal point',
      'Increases property value',
      'Masks neighborhood noise',
      'Attracts wildlife',
      'Year-round enjoyment'
    ]
  },
  {
    id: 'landscape-design',
    title: 'Complete Landscape Design',
    shortDescription: 'Full-service desert landscaping and xeriscape specialists',
    description: 'From concept to completion, we design and install beautiful, sustainable landscapes perfectly suited for the Las Vegas climate.',
    icon: 'Trees',
    image: '/images/services/landscape-design.jpg',
    slug: '/services/landscape-design',
    features: [
      'Custom Design Plans',
      'Desert & Xeriscape Specialists',
      'Water-Wise Solutions',
      'Native Plant Expertise',
      'Hardscape Integration',
      'Lighting Design'
    ],
    benefits: [
      'Professional design',
      'Water conservation',
      'Low maintenance',
      'Climate appropriate',
      'Cohesive outdoor space',
      'Expert installation'
    ]
  }
];

// Secondary Services
export const SECONDARY_SERVICES = [
  {
    id: 'putting-greens',
    title: 'Putting Greens',
    description: 'Custom backyard putting greens for golf enthusiasts',
    icon: 'Target',
    slug: '/services/putting-greens'
  },
  {
    id: 'landscape-lighting',
    title: 'Landscape Lighting',
    description: 'Security, exterior, and accent lighting solutions',
    icon: 'Lightbulb',
    slug: '/services/landscape-lighting'
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens & BBQs',
    description: 'Complete outdoor kitchen and BBQ island installations',
    icon: 'UtensilsCrossed',
    slug: '/services/outdoor-kitchens'
  },
  {
    id: 'fire-features',
    title: 'Fire Pits & Fireplaces',
    description: 'Custom fire features for year-round outdoor enjoyment',
    icon: 'Flame',
    slug: '/services/fire-features'
  },
  {
    id: 'xeriscaping',
    title: 'Desert Plants & Xeriscaping',
    description: 'Water-wise desert landscaping with native plants',
    icon: 'Palmtree',
    slug: '/services/xeriscaping'
  },
  {
    id: 'commercial-turf',
    title: 'Commercial Artificial Turf',
    description: 'Large-scale commercial turf installations',
    icon: 'Building2',
    slug: '/services/commercial-turf'
  }
];

// All Services Combined
export const ALL_SERVICES = [...PRIMARY_SERVICES, ...SECONDARY_SERVICES];

// Trust Badges
export const TRUST_BADGES = [
  {
    icon: 'Shield',
    title: 'Licensed & Insured',
    description: 'NV License #0085191'
  },
  {
    icon: 'Award',
    title: '20+ Years',
    description: 'Serving Las Vegas Since 2002'
  },
  {
    icon: 'CheckCircle',
    title: 'Prorated Lifetime Warranty',
    description: 'On artificial turf'
  },
  {
    icon: 'DollarSign',
    title: 'SNWA Authorized',
    description: '$7/sq ft rebate experts'
  },
  {
    icon: 'Languages',
    title: 'Bilingual Team',
    description: 'English & Spanish'
  },
  {
    icon: 'Clock',
    title: 'Fast Installation',
    description: 'Next-day available'
  }
];

// Why Choose Us Benefits
export const WHY_CHOOSE_US = [
  {
    icon: 'Star',
    title: 'Premium Quality Materials',
    description: 'We use only the highest quality materials that stand up to harsh Las Vegas conditions.'
  },
  {
    icon: 'Shield',
    title: 'Prorated Lifetime Warranty',
    description: 'Our artificial turf comes with a prorated lifetime warranty for your peace of mind.'
  },
  {
    icon: 'DollarSign',
    title: 'SNWA Rebate Experts',
    description: 'We assist with the paperwork for your $7 per square foot rebate.'
  },
  {
    icon: 'Award',
    title: '20+ Years Experience',
    description: 'Over two decades of transforming Las Vegas outdoor spaces since 2002.'
  },
  {
    icon: 'MessageCircle',
    title: 'Bilingual Team',
    description: 'Hablamos Español - We proudly serve our Spanish-speaking community.'
  },
  {
    icon: 'Zap',
    title: 'Next-Day Installation',
    description: 'Fast, professional installation often available within 24 hours.'
  }
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Request',
    description: 'Call us or fill out our online form for a free estimate',
    icon: 'Phone'
  },
  {
    step: 2,
    title: 'Design',
    description: 'We create a custom plan tailored to your vision and budget',
    icon: 'PenTool'
  },
  {
    step: 3,
    title: 'Relax',
    description: 'Our expert team handles everything from permits to cleanup',
    icon: 'CheckCircle'
  }
];

// Navigation Menu
export const NAVIGATION = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Services',
    href: '/services',
    megaMenu: true,
    items: [
      {
        category: 'Primary Services',
        services: PRIMARY_SERVICES.map(s => ({
          title: s.title,
          href: s.slug,
          description: s.shortDescription,
          icon: s.icon
        }))
      },
      {
        category: 'Additional Services',
        services: SECONDARY_SERVICES.map(s => ({
          title: s.title,
          href: s.slug,
          description: s.description,
          icon: s.icon
        }))
      }
    ]
  },
  {
    title: 'Gallery',
    href: '/gallery'
  },
  {
    title: 'SNWA Rebate',
    href: '/snwa-rebate',
    highlight: true
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Reviews',
    href: '/reviews'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

// Sample Testimonials (to be replaced with real Google reviews)
export const TESTIMONIALS = [
  {
    name: 'Jennifer M.',
    location: 'Henderson, NV',
    rating: 5,
    text: 'Desert Greenscapes completely transformed our backyard! The artificial turf looks incredibly natural and the kids love it. Steve and his team were professional and finished in just two days.',
    image: '/images/testimonials/jennifer.jpg',
    service: 'Artificial Turf'
  },
  {
    name: 'Carlos R.',
    location: 'Las Vegas, NV',
    rating: 5,
    text: 'Excelente trabajo! The waterfall they built is absolutely stunning. George was great to work with and made sure everything was perfect. Highly recommend!',
    image: '/images/testimonials/carlos.jpg',
    service: 'Custom Waterfall'
  },
  {
    name: 'Michael & Sarah T.',
    location: 'Summerlin, NV',
    rating: 5,
    text: 'We hired Desert Greenscapes for a complete backyard renovation including pavers, turf, and lighting. The results exceeded our expectations. Worth every penny!',
    image: '/images/testimonials/michael-sarah.jpg',
    service: 'Complete Landscape'
  },
  {
    name: 'Robert K.',
    location: 'North Las Vegas, NV',
    rating: 5,
    text: 'The SNWA rebate process was so easy - they assisted us with all the paperwork! Our water bill has dropped significantly since installing the artificial turf. Great investment.',
    image: '/images/testimonials/robert.jpg',
    service: 'Artificial Turf'
  }
];

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'How much does artificial turf installation cost?',
    answer: 'The cost varies based on the size of your project, turf quality, and site preparation needed. Most residential projects range from $8-15 per square foot installed. Remember, SNWA offers a $7/sq ft rebate which we can help you obtain!'
  },
  {
    question: 'How long does artificial turf last?',
    answer: 'Our premium artificial turf is designed to last 15-20 years with proper care. It comes with a prorated lifetime warranty — similar to how tire warranties work, coverage is adjusted based on the age of the turf.'
  },
  {
    question: 'What does the prorated lifetime warranty mean?',
    answer: 'Our warranty is prorated based on the age of your turf — similar to how tire warranties work. For example, if your turf is 8 years old, you pay 20% of the replacement cost and we cover the rest. This ensures you\'re always protected with a fair, transparent policy.'
  },
  {
    question: 'Is artificial turf safe for pets?',
    answer: 'Absolutely! We offer pet-friendly turf options with antimicrobial backing and excellent drainage. It\'s durable, easy to clean, and perfect for dogs of all sizes.'
  },
  {
    question: 'What is the SNWA rebate program?',
    answer: 'The Southern Nevada Water Authority offers a $7 per square foot rebate for replacing grass with artificial turf or desert landscaping. We assist with the paperwork to help ensure you receive your maximum rebate.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential artificial turf projects are completed in 1-3 days depending on size and complexity. Paver and waterfall projects vary based on scope. We offer next-day installation in many cases!'
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes! We offer flexible financing options to make your dream outdoor space affordable. Contact us for details.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed (Nevada Contractors License #0085191), bonded, and insured for your protection.'
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Absolutely! All estimates are completely free with no obligation. We\'ll visit your property, discuss your vision, and provide a detailed quote.'
  }
];

// Gallery Categories
export const GALLERY_CATEGORIES = [
  'All',
  'Artificial Turf',
  'Pavers',
  'Waterfalls',
  'Putting Greens',
  'Outdoor Kitchens',
  'Fire Features',
  'Landscape Lighting',
  'Complete Landscapes'
];

// Sample Portfolio Projects (placeholder data)
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Modern Backyard Oasis',
    category: 'Complete Landscapes',
    location: 'Summerlin, NV',
    images: {
      before: '/images/portfolio/project1-before.jpg',
      after: '/images/portfolio/project1-after.jpg'
    },
    description: 'Complete backyard transformation with artificial turf, custom pavers, and waterfall feature',
    services: ['Artificial Turf', 'Pavers', 'Waterfalls']
  },
  {
    id: 2,
    title: 'Pet-Friendly Turf Installation',
    category: 'Artificial Turf',
    location: 'Henderson, NV',
    images: {
      before: '/images/portfolio/project2-before.jpg',
      after: '/images/portfolio/project2-after.jpg'
    },
    description: 'Premium pet-friendly turf with drainage system for active dogs',
    services: ['Artificial Turf']
  },
  {
    id: 3,
    title: 'Elegant Paver Patio',
    category: 'Pavers',
    location: 'Las Vegas, NV',
    images: {
      before: '/images/portfolio/project3-before.jpg',
      after: '/images/portfolio/project3-after.jpg'
    },
    description: 'Custom travertine paver patio with built-in seating',
    services: ['Pavers']
  }
];

// SEO Keywords
export const SEO_KEYWORDS = {
  primary: [
    'artificial turf Las Vegas',
    'Las Vegas landscaping',
    'pavers Las Vegas',
    'waterfalls Las Vegas',
    'SNWA rebate'
  ],
  secondary: [
    'synthetic grass installation',
    'landscape design Las Vegas',
    'putting green installation',
    'outdoor kitchen Las Vegas',
    'xeriscape Las Vegas'
  ]
};