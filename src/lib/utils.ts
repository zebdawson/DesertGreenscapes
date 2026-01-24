import { type ClassValue, clsx } from 'clsx';

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}

// Format phone number for tel: link
export function formatPhoneLink(phone: string): string {
  return phone.replace(/\D/g, '');
}

// Smooth scroll to element
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Generate schema.org local business JSON-LD
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Desert Greenscapes',
    image: 'https://lvturf.com/logo.png', // Update with actual domain
    '@id': 'https://lvturf.com',
    url: 'https://lvturf.com',
    telephone: '702-529-0377',
    email: 'info@lvturf.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1977 Sycamore Trail',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89108',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699, // Approximate - update with exact coordinates
      longitude: -115.1398
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://facebook.com/desertgreenscapes', // Update with actual URLs
      'https://instagram.com/desertgreenscapes'
    ],
    priceRange: '$$',
    areaServed: [
      'Las Vegas',
      'Henderson',
      'North Las Vegas',
      'Boulder City',
      'Pahrump',
      'Mesquite'
    ]
  };
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number (US format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\.]+$/;
  const cleaned = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && cleaned.length === 10;
}

// Calculate square footage rebate
export function calculateSNWARebate(squareFeet: number): number {
  return squareFeet * 7; // $7 per square foot
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}
