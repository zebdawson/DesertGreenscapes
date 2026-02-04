import { Image as ImageIcon, Sprout, LayoutGrid, Waves, Lightbulb, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PlaceholderImageProps {
  category?: 'turf' | 'pavers' | 'waterfall' | 'landscape' | 'lighting' | 'fire' | 'general';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4' | 'video';
  showOverlay?: boolean;
  label?: string;
  className?: string;
}

const categoryConfig = {
  turf: {
    icon: Sprout,
    gradient: 'from-sage-green to-forest-green',
    label: 'Artificial Turf Project'
  },
  pavers: {
    icon: LayoutGrid,
    gradient: 'from-slate to-charcoal',
    label: 'Paver Project'
  },
  waterfall: {
    icon: Waves,
    gradient: 'from-water-blue to-forest-green',
    label: 'Water Feature Project'
  },
  landscape: {
    icon: Sprout,
    gradient: 'from-sage-green to-desert-gold',
    label: 'Landscape Project'
  },
  lighting: {
    icon: Lightbulb,
    gradient: 'from-desert-gold to-sunset-orange',
    label: 'Lighting Project'
  },
  fire: {
    icon: Flame,
    gradient: 'from-sunset-orange to-charcoal',
    label: 'Fire Feature Project'
  },
  general: {
    icon: ImageIcon,
    gradient: 'from-cloud to-slate',
    label: 'Project Photo'
  }
};

const aspectRatioConfig = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  'video': 'aspect-video'
};

export default function PlaceholderImage({
  category = 'general',
  aspectRatio = '16:9',
  showOverlay = true,
  label,
  className
}: PlaceholderImageProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;
  const displayLabel = label || config.label;

  return (
    <div className={cn(
      'relative bg-gradient-to-br overflow-hidden rounded-lg',
      config.gradient,
      aspectRatioConfig[aspectRatio],
      className
    )}>
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-16 h-16 lg:w-24 lg:h-24 text-white/30" />
      </div>

      {/* Overlay Message */}
      {showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center px-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
              <p className="font-accent font-semibold text-charcoal mb-1">
                {displayLabel}
              </p>
              <p className="text-xs text-slate">
                Photo coming soon
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desert Greenscapes Logo Watermark */}
      <div className="absolute bottom-4 right-4">
        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-headline font-bold text-sm">DG</span>
        </div>
      </div>
    </div>
  );
}
