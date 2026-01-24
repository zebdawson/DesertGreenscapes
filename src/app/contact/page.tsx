import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate',
  description: `Contact ${BUSINESS_INFO.name} for a free estimate on artificial turf, pavers, waterfalls, and landscaping. Serving all of Las Vegas and Southern Nevada. Call ${BUSINESS_INFO.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green to-sage-green text-white pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" size="lg" className="mb-4">
              Free Estimates
            </Badge>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Let's Bring Your Vision to Life
            </h1>
            <p className="text-xl text-white/90">
              Get your free, no-obligation estimate today. Our experts are ready to help transform
              your outdoor space.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <Section background="cloud" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Contact Information
              </h2>
              <p className="text-slate mb-6">
                We're here to answer your questions and provide expert guidance for your
                landscaping project.
              </p>
            </div>

            {/* Phone */}
            <Card hover={false}>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate mb-1">Call Us</div>
                  <div className="font-accent font-bold text-lg text-forest-green group-hover:text-sage-green transition-colors">
                    {formatPhoneNumber(BUSINESS_INFO.phone)}
                  </div>
                  <div className="text-xs text-slate mt-1">
                    Available 7 Days a Week
                  </div>
                </div>
              </a>
            </Card>

            {/* Email */}
            <Card hover={false}>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate mb-1">Email Us</div>
                  <div className="font-accent font-semibold text-forest-green group-hover:text-sage-green transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </div>
                  <div className="text-xs text-slate mt-1">
                    We'll respond within 24 hours
                  </div>
                </div>
              </a>
            </Card>

            {/* Address */}
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate mb-1">Visit Us</div>
                  <div className="text-charcoal">
                    {BUSINESS_INFO.address.full}
                  </div>
                  <div className="text-xs text-slate mt-1">
                    By appointment only
                  </div>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate mb-2">Business Hours</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate">Mon - Fri:</span>
                      <span className="text-charcoal font-medium">{BUSINESS_INFO.hours.weekday}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate">Saturday:</span>
                      <span className="text-charcoal font-medium">{BUSINESS_INFO.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate">Sunday:</span>
                      <span className="text-charcoal font-medium">{BUSINESS_INFO.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Language Badge */}
            <div className="pt-4">
              <Badge variant="success" size="lg">
                Hablamos Español - We Speak Spanish
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="!p-8">
              <h2 className="font-headline font-bold text-3xl text-charcoal mb-2">
                Request Your Free Estimate
              </h2>
              <p className="text-slate mb-8">
                Fill out the form below and we'll contact you within 24 hours to schedule your
                free consultation.
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="white" padding="lg" noContainer>
        <Container>
          <h2 className="font-headline font-bold text-3xl text-charcoal text-center mb-8">
            Serving All of Southern Nevada
          </h2>
        </Container>
        <div className="w-full h-96 bg-cloud flex items-center justify-center">
          <div className="text-center text-slate">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-forest-green" />
            <p className="font-accent">
              Google Maps Embed Placeholder
            </p>
            <p className="text-sm mt-2">
              Las Vegas, Henderson, North Las Vegas, Boulder City, Pahrump & Mesquite
            </p>
          </div>
          {/* TODO: Add actual Google Maps embed */}
        </div>
      </Section>
    </>
  );
}
