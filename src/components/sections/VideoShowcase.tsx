'use client';

import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import VideoPlayer from '@/components/ui/VideoPlayer';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const VIDEO_PROJECTS = [
  {
    id: 1,
    title: 'Complete Backyard Transformation - Henderson',
    thumbnail: '/images/videos/featured-thumb.jpg',
    videoUrl: '/videos/featured-project.mp4',
    duration: '2:30',
    category: 'landscape'
  },
  {
    id: 2,
    title: 'Artificial Turf Installation',
    thumbnail: '/images/videos/turf-install-thumb.jpg',
    videoUrl: '/videos/turf-install.mp4',
    duration: '1:15',
    category: 'turf'
  },
  {
    id: 3,
    title: 'Custom Waterfall Build',
    thumbnail: '/images/videos/waterfall-thumb.jpg',
    videoUrl: '/videos/waterfall-build.mp4',
    duration: '1:45',
    category: 'waterfall'
  },
  {
    id: 4,
    title: 'Paver Patio Project',
    thumbnail: '/images/videos/paver-thumb.jpg',
    videoUrl: '/videos/paver-project.mp4',
    duration: '1:00',
    category: 'pavers'
  }
];

export default function VideoShowcase() {
  return (
    <Section background="white" padding="xl">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          See the Transformation
        </Badge>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          Watch Our Work in Action
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          From start to finish, see how we transform Las Vegas outdoor spaces into desert paradises
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Large Video */}
        <div className="lg:col-span-2">
          <div className="relative">
            <PlaceholderImage
              category="landscape"
              aspectRatio="16:9"
              label="Featured Project Video"
              className="w-full"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                <Play className="w-10 h-10 text-forest-green ml-1" />
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4">
              <Badge variant="primary">2:30</Badge>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
              {VIDEO_PROJECTS[0].title}
            </h3>
            <p className="text-slate">
              Watch the complete transformation of this Henderson backyard from bare desert to lush paradise
            </p>
          </div>
        </div>

        {/* Smaller Video Cards */}
        <div className="space-y-6">
          {VIDEO_PROJECTS.slice(1).map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative">
                <PlaceholderImage
                  category={video.category as any}
                  aspectRatio="16:9"
                  showOverlay={false}
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-forest-green ml-0.5" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2">
                  <Badge variant="primary" size="sm">{video.duration}</Badge>
                </div>
              </div>
              <h4 className="font-accent font-semibold text-charcoal mt-2 group-hover:text-forest-green transition-colors">
                {video.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button variant="primary" size="lg" asChild>
          <Link href="/gallery?filter=videos">
            View All Project Videos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
