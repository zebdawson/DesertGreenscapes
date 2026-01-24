'use client';

import { motion } from 'framer-motion';
import { Star, Shield, DollarSign, Award, MessageCircle, Zap } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import Section from '@/components/ui/Section';

const iconMap: Record<string, any> = {
  Star,
  Shield,
  DollarSign,
  Award,
  MessageCircle,
  Zap
};

export default function WhyChooseUs() {
  return (
    <Section background="white" padding="xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          Why Choose Desert Greenscapes?
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          We're not just another landscaping company - we're your partners in creating
          the outdoor oasis you've always dreamed of
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((benefit, index) => {
          const Icon = iconMap[benefit.icon];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-cloud hover:border-sage-green transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-green to-sage-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sage-green/10 to-transparent rounded-bl-full -z-10" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
