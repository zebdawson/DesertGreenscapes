'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-forest-green to-sage-green rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-headline font-bold text-2xl">DG</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-headline font-bold text-xl lg:text-2xl text-charcoal">
                Desert Greenscapes
              </div>
              <div className="text-xs text-slate">Las Vegas Landscaping Experts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAVIGATION.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 xl:px-4 py-2 rounded-lg font-accent font-medium text-sm xl:text-base transition-all duration-200 flex items-center gap-1 ${
                    item.highlight
                      ? 'text-sunset-orange hover:bg-sunset-orange/10'
                      : isScrolled
                      ? 'text-charcoal hover:bg-sage-green/10 hover:text-forest-green'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.title}
                  {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu */}
                {item.megaMenu && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-screen max-w-4xl mt-2 -translate-x-1/4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-cloud">
                      <div className="grid grid-cols-2 gap-8">
                        {item.items?.map((category, idx) => (
                          <div key={idx}>
                            <h3 className="font-headline font-bold text-lg text-charcoal mb-4">
                              {category.category}
                            </h3>
                            <div className="space-y-3">
                              {category.services.map((service) => (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  className="block p-3 rounded-lg hover:bg-cloud transition-colors group"
                                >
                                  <div className="font-accent font-semibold text-forest-green group-hover:text-sage-green transition-colors">
                                    {service.title}
                                  </div>
                                  <div className="text-sm text-slate mt-1">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`flex items-center gap-2 font-accent font-semibold ${
                isScrolled ? 'text-forest-green' : 'text-white'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">{formatPhoneNumber(BUSINESS_INFO.phone)}</span>
            </a>
            <Button variant="cta" size="md" asChild>
              <Link href="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-cloud overflow-y-auto"
          >
            <Container>
              <nav className="py-6 space-y-2">
                {NAVIGATION.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-accent font-semibold text-lg ${
                        item.highlight
                          ? 'text-sunset-orange bg-sunset-orange/10'
                          : 'text-charcoal hover:bg-cloud'
                      }`}
                    >
                      {item.title}
                    </Link>
                    {item.megaMenu && item.items && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items.flatMap((category) =>
                          category.services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-slate hover:text-forest-green"
                            >
                              {service.title}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-6 space-y-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-forest-green text-white rounded-lg font-accent font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    {formatPhoneNumber(BUSINESS_INFO.phone)}
                  </a>
                  <Button variant="cta" size="lg" fullWidth asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Free Estimate
                    </Link>
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
