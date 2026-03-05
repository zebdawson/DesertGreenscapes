'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GripVertical } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const BEFORE_AFTER_PROJECTS = [
  {
    id: 1,
    title: 'Las Vegas Backyard Transformation',
    description: 'Cracked dirt and weeds replaced with lush artificial turf and desert rock landscaping',
    services: ['Artificial Turf', 'Desert Rock', 'Landscape Design'],
    beforeImage: '/images/projects/project-01-before.jpg',
    afterImage: '/images/projects/project-01-after.jpg',
    isReal: true,
    category: 'landscape'
  },
  {
    id: 2,
    title: 'Las Vegas Backyard Oasis',
    description: 'Barren hillside transformed into a natural rock waterfall, custom fire pit, and paver patio',
    services: ['Waterfall', 'Fire Feature', 'Pavers', 'Desert Plants'],
    beforeImage: '/images/projects/project-02-before.jpg',
    afterImage: '/images/projects/project-02-after.jpg',
    isReal: true,
    category: 'waterfall'
  },
  {
    id: 3,
    title: 'North Las Vegas Front Yard',
    description: 'SNWA rebate project - $4,200 saved',
    services: ['Artificial Turf', 'Xeriscaping'],
    beforeImage: 'placeholder',
    afterImage: 'placeholder',
    isReal: false,
    category: 'turf'
  }
];

const AFTER_GRADIENTS: Record<string, string> = {
  turf: 'from-sage-green to-forest-green',
  waterfall: 'from-water-blue to-forest-green',
  landscape: 'from-sage-green to-desert-gold',
};

interface Project {
  id: number;
  title: string;
  description: string;
  services: string[];
  beforeImage: string;
  afterImage: string;
  isReal: boolean;
  category: string;
}

function SliderImage({
  project,
  which,
}: {
  project: Project;
  which: 'before' | 'after';
}) {
  if (project.isReal) {
    return (
      <Image
        src={which === 'before' ? project.beforeImage : project.afterImage}
        alt={`${which === 'before' ? 'Before' : 'After'} — ${project.title}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        draggable={false}
      />
    );
  }
  const gradient =
    which === 'after'
      ? AFTER_GRADIENTS[project.category] ?? 'from-sage-green to-forest-green'
      : 'from-slate to-charcoal';
  return <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />;
}

function BeforeAfterSlider({ project }: { project: Project }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6 select-none cursor-col-resize touch-none"
      onMouseDown={(e) => { isDragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (isDragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* After image — always full width behind */}
      <div className="absolute inset-0">
        <SliderImage project={project} which="after" />
      </div>

      {/* Before image — clipped to left portion */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <SliderImage project={project} which="before" />
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <GripVertical className="w-5 h-5 text-forest-green" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <Badge variant="secondary" size="lg">Before</Badge>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <Badge variant="success" size="lg">After</Badge>
      </div>

      {/* Placeholder notice */}
      {!project.isReal && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
            Photos coming soon
          </div>
        </div>
      )}
    </div>
  );
}

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
            <BeforeAfterSlider project={project} />

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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">1,000+</div>
            <div className="text-slate font-accent">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">20+</div>
            <div className="text-slate font-accent">Years Serving Las Vegas</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">$2M+</div>
            <div className="text-slate font-accent">SNWA Rebates Secured</div>
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
