import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Lightbulb, Shield, Star, Lock, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Landscape Lighting Las Vegas | Outdoor & Security Lighting Installation',
  description: 'Professional landscape lighting in Las Vegas. Accent, security, pathway, and architectural lighting. LED upgrades, low voltage systems. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'LED energy-efficient fixtures',
  'Low-voltage landscape lighting',
  'Pathway and walkway lighting',
  'Accent and uplighting for trees and features',
  'Security and perimeter lighting',
  'Architectural and facade lighting',
  'Timer and smart controls available',
  'Professional wiring and installation',
];

const BENEFITS = [
  {
    icon: Star,
    title: 'Stunning Curb Appeal',
    description: 'Showcase your landscape after dark. Uplighting trees, accenting features, and path lighting transforms any yard into a showstopper at night.'
  },
  {
    icon: Lock,
    title: 'Enhanced Security',
    description: 'Well-lit exteriors deter intruders and improve safety for your family, guests, and deliveries.'
  },
  {
    icon: Lightbulb,
    title: 'Energy Efficient',
    description: 'Modern LED landscape lighting uses a fraction of the energy of older systems while providing superior brightness and longevity.'
  },
  {
    icon: Shield,
    title: 'Professional Installation',
    description: 'Properly installed low-voltage systems by our licensed team ensure safety, reliability, and a clean finished look.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'What types of landscape lighting do you install?',
    answer: 'We install all types of outdoor lighting including pathway lights, uplights for trees and palms, downlights, spotlights, wall sconces, step lights, security floodlights, and architectural accent lighting. LED and low-voltage systems are our specialty.'
  },
  {
    question: 'How much does landscape lighting cost in Las Vegas?',
    answer: 'Basic pathway lighting systems start around $1,500-$3,000. More comprehensive accent and security lighting for a full property typically ranges from $3,000-$8,000+. We provide free detailed estimates based on your specific needs.'
  },
  {
    question: 'Do you offer smart lighting controls?',
    answer: 'Yes. We can integrate your landscape lighting with timers, dusk-to-dawn sensors, and smart home systems so your lights come on automatically and you can control them from your phone.'
  },
  {
    question: 'Are LED landscape lights worth it?',
    answer: 'Absolutely. LED fixtures use 75% less energy than halogen or incandescent bulbs, last 5-10x longer, and produce less heat. They pay for themselves quickly through energy savings and reduced replacement costs.'
  },
  {
    question: 'Will landscape lighting increase my electric bill significantly?',
    answer: 'Modern LED low-voltage systems use very little electricity. A full landscape lighting system typically adds only $5-$20/month to your electric bill, while providing a dramatic transformation every evening.'
  },
  {
    question: 'Can you upgrade my existing landscape lighting to LED?',
    answer: 'Yes. We frequently upgrade older halogen and incandescent landscape lighting to modern LED systems. We can often reuse existing wiring and transformers, keeping costs down.'
  },
  {
    question: 'How long does landscape lighting installation take?',
    answer: 'Most residential landscape lighting installations are completed in one day. Larger or more complex projects may take two days. We\'ll confirm your timeline with your free estimate.'
  },
  {
    question: 'Do you handle all the wiring and electrical work?',
    answer: 'Yes. Our team handles all low-voltage wiring, transformer installation, and connections. For line-voltage (120V) security lighting that requires an electrician, we coordinate with licensed electrical contractors.'
  },
];

export default function LandscapeLightingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="lighting"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-forest-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Lightbulb className="w-4 h-4" />
            Transform Your Nights
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Landscape Lighting<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Beautiful, energy-efficient outdoor lighting that showcases your landscape and enhances security — every night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="#quote-form">
                Get Free Estimate
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="!text-white !border-white hover:!bg-white hover:!text-forest-green">
                <Phone className="w-5 h-5" />
                Call (702) 529-0377
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section background="white" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">500+</div>
            <div className="text-slate font-accent">Lighting Projects Installed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">LED</div>
            <div className="text-slate font-accent">Energy-Efficient Systems</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">20+</div>
            <div className="text-slate font-accent">Years of Experience</div>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="cloud" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-headline font-bold text-3xl text-charcoal mb-4">
                Professional Outdoor Lighting for Las Vegas Homes
              </h2>
              <p className="text-slate leading-relaxed">
                In Las Vegas, outdoor living doesn't stop when the sun goes down. A professionally designed landscape
                lighting system transforms your property at night — highlighting beautiful trees, illuminating
                pathways, and creating the kind of ambiance that makes your outdoor space truly special.
              </p>
              <p className="text-slate leading-relaxed">
                Our team has been designing and installing landscape lighting across Southern Nevada for over 20 years.
                We use premium LED fixtures and low-voltage systems that are energy-efficient, long-lasting, and
                built for the harsh Las Vegas climate.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Invest in Landscape Lighting?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 rounded-lg bg-desert-gold/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-desert-gold" />
                      </div>
                      <h4 className="font-accent font-bold text-lg text-charcoal mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-slate text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Our Installation Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Lighting Design Consultation',
                    description: 'We walk your property at dusk to understand how you use your space and identify key features to highlight or illuminate for safety.'
                  },
                  {
                    step: 2,
                    title: 'Custom Lighting Plan',
                    description: 'We develop a lighting layout including fixture types, placement, wiring routes, and transformer sizing for your specific property.'
                  },
                  {
                    step: 3,
                    title: 'Professional Installation',
                    description: 'Our team installs all fixtures, runs low-voltage wiring, installs the transformer, and ensures all connections are weatherproof.'
                  },
                  {
                    step: 4,
                    title: 'Nighttime Walkthrough & Adjustment',
                    description: 'We return at night to make final adjustments to angles and brightness, then walk you through your new system.'
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-desert-gold text-white flex items-center justify-center font-headline font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-accent font-bold text-lg text-charcoal mb-1">
                        {step.title}
                      </h4>
                      <p className="text-slate">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Frequently Asked Questions
              </h3>
              <FAQ items={FAQ_ITEMS} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div id="quote-form" className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-slate text-sm mb-6">
                Fill out the form and we'll contact you within 24 hours with a detailed estimate.
              </p>
              <ContactForm />
            </div>

            <div className="bg-gradient-to-br from-charcoal to-forest-green text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Lighting Solutions
              </h4>
              <p className="text-white/90 text-sm mb-4">
                We handle all types of outdoor lighting:
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                {['Pathway & step lights', 'Tree & palm uplights', 'Architectural accents', 'Security floodlights', 'Pool & water feature lights', 'Smart controls & timers'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-desert-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Get Lighting Quote
                </Link>
              </Button>
            </div>

            <div className="bg-cloud p-6 rounded-xl">
              <h4 className="font-accent font-bold text-lg text-charcoal mb-4">
                Related Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/landscape-design" className="text-forest-green hover:text-sage-green transition-colors">
                    → Complete Landscape Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/outdoor-kitchens" className="text-forest-green hover:text-sage-green transition-colors">
                    → Outdoor Kitchens
                  </Link>
                </li>
                <li>
                  <Link href="/services/fire-features" className="text-forest-green hover:text-sage-green transition-colors">
                    → Fire Pits & Fireplaces
                  </Link>
                </li>
                <li>
                  <Link href="/services/pavers" className="text-forest-green hover:text-sage-green transition-colors">
                    → Paver Installation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Illuminate Your Outdoor Space Tonight
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • LED energy-efficient systems • Professional installation • 20+ years experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="!text-white !border-white hover:!bg-white hover:!text-forest-green">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
