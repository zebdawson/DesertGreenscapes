'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function Testimonials() {
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
          What Our Customers Say
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          Don't just take our word for it - hear from our satisfied customers across Las Vegas
        </p>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-desert-gold text-desert-gold" />
            ))}
          </div>
          <span className="font-accent font-bold text-lg">5.0</span>
          <span className="text-slate">on Google Reviews</span>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-sage-green/30" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= testimonial.rating
                        ? 'fill-desert-gold text-desert-gold'
                        : 'text-cloud'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-cloud">
                <div className="font-accent font-semibold text-charcoal">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate">{testimonial.location}</div>
                <div className="text-xs text-sage-green font-medium mt-1">
                  {testimonial.service}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
