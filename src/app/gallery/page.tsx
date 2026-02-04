'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, Grid3x3, Play } from 'lucide-react';
import { projects, GALLERY_CATEGORIES, getProjectsByService, type ServiceType } from '@/lib/projects';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/ui/ProjectCard';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceType | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const filteredProjects = getProjectsByService(activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green to-sage-green text-white pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" size="lg" className="mb-4">
              <Grid3x3 className="w-4 h-4" />
              Our Portfolio
            </Badge>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              30 Years of Transforming Las Vegas
            </h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of stunning landscape transformations across Southern Nevada.
              From artificial turf to custom waterfalls, see the Desert Greenscapes difference.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <Section background="white" padding="md">
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md rounded-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-slate mr-2">
                <Filter className="w-4 h-4" />
                <span className="font-accent font-semibold">Filter:</span>
              </div>
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id as ServiceType | 'all')}
                  className={cn(
                    'px-4 py-2 rounded-lg font-accent font-medium text-sm transition-all duration-200',
                    activeFilter === category.id
                      ? 'bg-forest-green text-white shadow-lg'
                      : 'bg-cloud text-slate hover:bg-sage-green/10 hover:text-forest-green'
                  )}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-sm text-slate font-accent">
              <span className="font-semibold text-charcoal">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="cloud" padding="xl">
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => {
                    // TODO: Open lightbox or navigate to project detail
                    console.log('Project clicked:', project.id);
                  }}
                />
              ))}
            </div>

            {/* Load More - Placeholder for pagination */}
            {filteredProjects.length > 9 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Projects
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-cloud flex items-center justify-center mx-auto mb-4">
              <Grid3x3 className="w-10 h-10 text-slate/50" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
              No projects found
            </h3>
            <p className="text-slate mb-6">
              Try selecting a different category
            </p>
            <Button variant="primary" onClick={() => setActiveFilter('all')}>
              View All Projects
            </Button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something amazing together. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="tel:702-529-0377"
                className="!text-white !border-white hover:!bg-white hover:!text-forest-green"
              >
                Call (702) 529-0377
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
