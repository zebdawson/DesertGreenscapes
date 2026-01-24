import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} | Las Vegas Premier Landscaping & Artificial Turf`,
    template: `%s | ${BUSINESS_INFO.name}`
  },
  description: "Transform your Las Vegas outdoor space with premium artificial turf, custom pavers, waterfalls, and complete landscaping solutions. SNWA rebate experts. Licensed, bonded & insured. 30+ years experience.",
  keywords: [
    "artificial turf Las Vegas",
    "Las Vegas landscaping",
    "pavers Las Vegas",
    "waterfalls Las Vegas",
    "SNWA rebate",
    "synthetic grass",
    "xeriscape Las Vegas",
    "landscape design Las Vegas",
    "putting greens",
    "outdoor kitchens Las Vegas"
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lvturf.com",
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | Las Vegas Premier Landscaping & Artificial Turf`,
    description: "Transform your Las Vegas outdoor space with premium artificial turf, custom pavers, waterfalls, and complete landscaping solutions. 30+ years experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Las Vegas Landscaping`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Las Vegas Premier Landscaping`,
    description: "Transform your outdoor space with premium landscaping solutions. SNWA rebate experts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
