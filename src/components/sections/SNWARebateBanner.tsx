'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function SNWARebateBanner() {
  return (
    <section className="relative bg-gradient-to-r from-water-blue via-forest-green to-sage-green overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container>
        <div className="relative py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              >
                <Sparkles className="w-6 h-6 text-desert-gold" />
                <span className="text-desert-gold font-accent font-bold uppercase tracking-wide text-sm">
                  Limited Time Offer
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
              >
                Save{' '}
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block text-desert-gold"
                >
                  $7 Per Square Foot
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/90 mb-2"
              >
                SNWA Water Smart Landscapes Rebate Program
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 max-w-2xl mx-auto lg:mx-0"
              >
                Replace your water-hungry grass with beautiful artificial turf and get a generous
                rebate. <span className="font-semibold">We handle all the paperwork!</span>
              </motion.p>
            </div>

            {/* Right Content - Stats & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                {/* Example Calculation */}
                <div className="text-center mb-6">
                  <div className="text-white/70 text-sm mb-2">Example: 1,000 sq ft</div>
                  <div className="flex items-center justify-center gap-2">
                    <DollarSign className="w-8 h-8 text-desert-gold" />
                    <span className="font-headline font-bold text-5xl text-white">7,000</span>
                  </div>
                  <div className="text-white/80 text-sm mt-1">in rebates!</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-white/90 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-desert-gold/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-desert-gold" />
                    </div>
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-desert-gold/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-desert-gold" />
                    </div>
                    <span>We handle all paperwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-desert-gold/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-desert-gold" />
                    </div>
                    <span>Expert installation included</span>
                  </li>
                </ul>

                <Button variant="cta" size="lg" fullWidth asChild>
                  <Link href="/snwa-rebate">
                    Learn More About Rebates
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
