'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sprout, LayoutGrid, Waves, Trees } from 'lucide-react';
import { PRIMARY_SERVICES } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Card, { CardContent, CardFooter, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const iconMap: Record<string, any> = {
  Sprout,
  LayoutGrid,
  Waves,
  Trees
};

export default function ServicesGrid() {
  return (
    <Section background="cloud" padding="xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          Our Premium Services
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          Transform your outdoor space with our expert landscaping solutions,
          perfectly designed for the Las Vegas climate
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {PRIMARY_SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden rounded-t-xl -m-6 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-sage-green opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-white opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-headline font-bold text-2xl text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardContent>
                  <p className="text-slate mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-green flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="!mt-auto">
                  <Button variant="outline" fullWidth asChild>
                    <Link href={service.slug} className="group-hover:!bg-forest-green group-hover:!text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Button variant="primary" size="lg" asChild>
          <Link href="/services">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}
