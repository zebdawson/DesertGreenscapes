'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

// Placeholder data - will use real images when available
const BEFORE_AFTER_PROJECTS = [
  {
    id: 1,
    title: 'Henderson Backyard Renovation',
    description: 'From bare dirt to desert paradise in 3 days',
    services: ['Artificial Turf', 'Pavers', 'Lighting'],
    beforeImage: 'placeholder-before-1',
    afterImage: 'placeholder-after-1',
    category: 'landscape'
  },
  {
    id: 2,
    title: 'Summerlin Pool Surround',
    description: 'Complete poolside transformation with custom waterfall',
    services: ['Turf', 'Custom Waterfall', 'Pavers'],
    beforeImage: 'placeholder-before-2',
    afterImage: 'placeholder-after-2',
    category: 'waterfall'
  },
  {
    id: 3,
    title: 'North Las Vegas Front Yard',
    description: 'SNWA rebate project - $4,200 saved',
    services: ['Artificial Turf', 'Xeriscaping'],
    beforeImage: 'placeholder-before-3',
    afterImage: 'placeholder-after-3',
    category: 'turf'
  }
];

export default function BeforeAfterShowcase() {
  return (
    <Section background="cloud" padding="xl">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="success" size="lg" className="mb-4">
          The Desert Greenscapes Difference
        </Badge>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          See the Transformation
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          Drag the slider to reveal the stunning transformations we've created for Las Vegas homeowners
        </p>
      </div>

      {/* Before/After Sliders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {BEFORE_AFTER_PROJECTS.map((project) => (
          <div key={project.id}>
            {/* Placeholder BeforeAfter using PlaceholderImages */}
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <PlaceholderImage
                    category={project.category as any}
                    aspectRatio="4:3"
                    showOverlay={false}
                    className="rounded-none"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" size="lg">
                      Before
                    </Badge>
                  </div>
                  {/* Grayscale overlay to simulate "before" look */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-color" />
                </div>
                <div className="relative">
                  <PlaceholderImage
                    category={project.category as any}
                    aspectRatio="4:3"
                    showOverlay={false}
                    className="rounded-none"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="success" size="lg">
                      After
                    </Badge>
                  </div>
                </div>
              </div>
              {/* Drag instruction overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                  Interactive slider coming soon
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
                {project.title}
              </h3>
              <p className="text-slate mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <Badge key={index} variant="primary" size="sm">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              2,500+
            </div>
            <div className="text-slate font-accent">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              30+
            </div>
            <div className="text-slate font-accent">
              Years in Las Vegas
            </div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              $2M+
            </div>
            <div className="text-slate font-accent">
              SNWA Rebates Secured
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button variant="primary" size="lg" asChild>
          <Link href="/gallery">
            View Full Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
