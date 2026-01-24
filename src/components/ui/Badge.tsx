import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center gap-1.5 font-accent font-semibold rounded-full';

    const variants = {
      primary: 'bg-forest-green/10 text-forest-green border border-forest-green/20',
      secondary: 'bg-sage-green/10 text-sage-green border border-sage-green/20',
      success: 'bg-green-50 text-green-700 border border-green-200',
      warning: 'bg-sunset-orange/10 text-sunset-orange border border-sunset-orange/20',
      gold: 'bg-desert-gold/10 text-desert-gold border border-desert-gold/20'
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base'
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
