import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Award } from 'lucide-react';
import { BUSINESS_INFO, PRIMARY_SERVICES, SECONDARY_SERVICES, SERVICE_AREAS } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-charcoal to-forest-green text-white">
      {/* Main Footer Content */}
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-desert-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-headline font-bold text-2xl">DG</span>
                </div>
                <div>
                  <div className="font-headline font-bold text-xl">Desert Greenscapes</div>
                  <div className="text-xs text-cloud">Since 1994</div>
                </div>
              </div>
              <p className="text-cloud mb-4 text-sm leading-relaxed">
                Transforming Las Vegas outdoor spaces for over 30 years with premium artificial turf,
                custom pavers, and stunning water features.
              </p>
              <Badge variant="gold" size="sm" icon={<Award className="w-3 h-3" />}>
                NV License #{BUSINESS_INFO.license}
              </Badge>
              <div className="mt-4">
                <Badge variant="success" size="sm">
                  Se Habla Español
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-headline font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-cloud hover:text-desert-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-cloud hover:text-desert-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-cloud hover:text-desert-gold transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/snwa-rebate" className="text-cloud hover:text-desert-gold transition-colors font-semibold">
                    SNWA Rebate Info
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-cloud hover:text-desert-gold transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cloud hover:text-desert-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-headline font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[...PRIMARY_SERVICES.slice(0, 4), ...SECONDARY_SERVICES.slice(0, 2)].map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.slug}
                      className="text-cloud hover:text-desert-gold transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-headline font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-start gap-3 text-cloud hover:text-desert-gold transition-colors group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm text-cloud/70">Call Us</div>
                      <div className="font-accent font-semibold">
                        {formatPhoneNumber(BUSINESS_INFO.phone)}
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-3 text-cloud hover:text-desert-gold transition-colors group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm text-cloud/70">Email</div>
                      <div className="text-sm break-all">{BUSINESS_INFO.email}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-cloud">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-cloud/70">Address</div>
                      <div className="text-sm">{BUSINESS_INFO.address.full}</div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-accent font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href={BUSINESS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-desert-gold flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={BUSINESS_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-desert-gold flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="font-headline font-bold text-lg mb-4 text-center">
              Proudly Serving All of Southern Nevada
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.map((area) => (
                <Badge key={area} variant="secondary" size="sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cloud">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Desert Greenscapes. All rights reserved.</p>
              <p className="text-xs mt-1">
                Licensed, Bonded & Insured | Nevada Contractors License #{BUSINESS_INFO.license}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-desert-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-desert-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
