'use client';

import { useState } from 'react';
import { MapPin, Clock, DollarSign, Star, Play } from 'lucide-react';
import { type Project } from '@/lib/projects';
import PlaceholderImage from './PlaceholderImage';
import Badge from './Badge';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';

export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  className?: string;
}

export default function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  // Map service types to PlaceholderImage categories
  const serviceToCategoryMap: Record<string, string> = {
    'artificial-turf': 'turf',
    'pavers': 'pavers',
    'waterfalls': 'waterfall',
    'landscape-design': 'landscape',
    'putting-greens': 'turf',
    'lighting': 'lighting',
    'outdoor-kitchens': 'general',
    'fire-features': 'fire',
    'xeriscaping': 'landscape'
  };

  const primaryService = project.services?.[0] || 'general';
  const category = serviceToCategoryMap[primaryService] || 'general';

  return (
    <div
      onClick={onClick}
      className={cn(
        'group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
        {imageError ? (
          <PlaceholderImage
            category={category as any}
            aspectRatio="4:3"
            label={project.title}
            showOverlay={false}
          />
        ) : (
          <div className="relative w-full h-full">
            <PlaceholderImage
              category={category as any}
              aspectRatio="4:3"
              label={project.title}
              showOverlay={false}
            />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-forest-green ml-1" />
            </div>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold" size="sm">
              <Star className="w-3 h-3" />
              Featured
            </Badge>
          </div>
        )}

        {/* Video badge */}
        {project.video && (
          <div className="absolute top-4 right-4">
            <Badge variant="primary" size="sm">
              <Play className="w-3 h-3" />
              Video
            </Badge>
          </div>
        )}

        {/* Before/After badge */}
        {project.images.before && project.images.after && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="success" size="sm">
              Before/After
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-headline font-bold text-xl text-charcoal mb-2 group-hover:text-forest-green transition-colors">
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-slate mb-3">
          <MapPin className="w-4 h-4" />
          <span>
            {project.neighborhood ? `${project.neighborhood}, ` : ''}{project.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.slice(0, 3).map((service, index) => (
            <Badge key={index} variant="primary" size="sm">
              {service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>
          ))}
          {project.services.length > 3 && (
            <Badge variant="secondary" size="sm">
              +{project.services.length - 3} more
            </Badge>
          )}
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="flex flex-wrap gap-4 text-xs text-slate pt-4 border-t border-cloud">
            {project.stats.sqft && (
              <div className="flex items-center gap-1">
                <span className="font-semibold text-charcoal">{project.stats.sqft.toLocaleString()}</span>
                <span>sq ft</span>
              </div>
            )}
            {project.stats.duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{project.stats.duration}</span>
              </div>
            )}
            {project.stats.rebateAmount && (
              <div className="flex items-center gap-1 text-forest-green font-semibold">
                <DollarSign className="w-3 h-3" />
                <span>{formatCurrency(project.stats.rebateAmount)} saved</span>
              </div>
            )}
          </div>
        )}

        {/* Testimonial preview */}
        {project.testimonial && (
          <div className="mt-4 pt-4 border-t border-cloud">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3',
                    i < (project.testimonial?.rating || 5)
                      ? 'fill-desert-gold text-desert-gold'
                      : 'text-cloud'
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-slate italic line-clamp-2">
              "{project.testimonial.quote}"
            </p>
            <p className="text-xs text-charcoal font-semibold mt-1">
              - {project.testimonial.customerName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
