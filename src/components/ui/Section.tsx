import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'cloud' | 'dark' | 'gradient' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noContainer?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background = 'white',
      padding = 'lg',
      containerSize = 'xl',
      noContainer = false,
      children,
      ...props
    },
    ref
  ) => {
    const backgrounds = {
      white: 'bg-white',
      cloud: 'bg-cloud',
      dark: 'bg-charcoal text-white',
      gradient: 'bg-gradient-to-br from-forest-green to-sage-green text-white',
      none: ''
    };

    const paddings = {
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16',
      lg: 'py-16 sm:py-24',
      xl: 'py-20 sm:py-32',
      none: ''
    };

    const content = noContainer ? (
      children
    ) : (
      <Container size={containerSize}>{children}</Container>
    );

    return (
      <section
        ref={ref}
        className={cn(backgrounds[background], paddings[padding], className)}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
