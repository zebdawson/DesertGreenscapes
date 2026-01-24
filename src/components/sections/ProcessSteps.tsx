'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const iconMap: Record<string, any> = {
  Phone,
  PenTool,
  CheckCircle
};

export default function ProcessSteps() {
  return (
    <Section background="gradient" padding="xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white mb-4">
          Our Simple 3-Step Process
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          From initial consultation to final installation, we make transforming your outdoor space
          effortless
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting Lines (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
            <div className="relative h-full">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
              />
            </div>
          </div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-6">
                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        delay: index * 0.2 + 0.3
                      }}
                      className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl"
                    >
                      <Icon className="w-10 h-10 text-forest-green" />
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-desert-gold flex items-center justify-center shadow-lg">
                        <span className="font-headline font-bold text-xl text-white">
                          {step.step}
                        </span>
                      </div>
                    </motion.div>

                    {/* Pulse Animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="absolute inset-0 rounded-full bg-white -z-10"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-headline font-bold text-2xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop Only) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="hidden md:block absolute top-24 -right-4 text-white/30"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
