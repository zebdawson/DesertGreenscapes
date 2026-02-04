'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { cn } from '@/lib/utils';
import Badge from './Badge';

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
  services?: string[];
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  description,
  services,
  className
}: BeforeAfterSliderProps) {
  return (
    <div className={cn('group', className)}>
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <ReactCompareSlider
          itemOne={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={beforeImage}
                alt={`${title || 'Project'} - Before`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" size="lg">
                  {beforeLabel}
                </Badge>
              </div>
            </div>
          }
          itemTwo={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={afterImage}
                alt={`${title || 'Project'} - After`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="success" size="lg">
                  {afterLabel}
                </Badge>
              </div>
            </div>
          }
          position={50}
          className="h-96 lg:h-[500px]"
          style={{
            borderRadius: '0.75rem'
          }}
        />

        {/* Drag instruction overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
            ← Drag to compare →
          </div>
        </div>
      </div>

      {/* Project Details */}
      {(title || description || services) && (
        <div className="mt-6">
          {title && (
            <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-slate mb-4">
              {description}
            </p>
          )}
          {services && services.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {services.map((service, index) => (
                <Badge key={index} variant="primary" size="sm">
                  {service}
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
