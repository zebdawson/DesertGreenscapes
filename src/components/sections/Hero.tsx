'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Award, Shield, Clock, DollarSign, Languages, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, TRUST_BADGES } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const iconMap: Record<string, any> = {
  Shield,
  Award,
  Clock,
  DollarSign,
  Languages,
  CheckCircle
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 via-forest-green/70 to-charcoal/80" />
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content Card with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-dark rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <Badge variant="gold" size="lg" className="mb-4">
                  <Award className="w-4 h-4" />
                  30+ Years of Excellence
                </Badge>
                <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
                  {BUSINESS_INFO.tagline}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-cloud font-light">
                  {BUSINESS_INFO.description}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-12"
              >
                <Button variant="cta" size="lg" asChild>
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="!text-white !border-white hover:!bg-white hover:!text-forest-green"
                  >
                    <Phone className="w-5 h-5" />
                    Call {formatPhoneNumber(BUSINESS_INFO.phone)}
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/20"
              >
                {TRUST_BADGES.map((badge, index) => {
                  const Icon = iconMap[badge.icon];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-desert-gold transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-accent font-semibold text-white">
                        {badge.title}
                      </div>
                      <div className="text-xs text-cloud/80">
                        {badge.description}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/60 text-sm font-accent">Scroll to explore</span>
                <svg
                  className="w-6 h-6 text-white/60"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
