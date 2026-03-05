import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Leaf, Droplets, Sun, Palette, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Landscape Design Las Vegas | Complete Xeriscape & Desert Landscaping',
  description: 'Professional landscape design in Las Vegas. Water-wise desert landscaping, xeriscape specialists, full-service from concept to completion. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Custom design plans tailored to your vision',
  'Desert & xeriscape specialists',
  'Water-wise, low-maintenance solutions',
  'Native and drought-tolerant plant selection',
  'Hardscape integration (pavers, rock, boulders)',
  'Irrigation system design and installation',
  'Outdoor lighting design',
  'Full project management from start to finish',
];

const BENEFITS = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Every landscape is uniquely designed for your property, lifestyle, and aesthetic preferences.'
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Xeriscape and desert-appropriate designs dramatically reduce water usage and monthly bills.'
  },
  {
    icon: Sun,
    title: 'Climate Adapted',
    description: 'Plants and materials specifically chosen to thrive in Las Vegas heat and low-humidity conditions.'
  },
  {
    icon: Leaf,
    title: 'Low Maintenance',
    description: 'Smart plant selection and design means less upkeep and more enjoyment of your outdoor space.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'What does a complete landscape design include?',
    answer: 'Our full-service design includes an on-site consultation, custom design plan, plant selection, hardscape layout, irrigation planning, lighting suggestions, and complete installation from grading to final walkthrough.'
  },
  {
    question: 'How much does landscape design in Las Vegas cost?',
    answer: 'Project costs vary widely based on scope, size, and materials. A basic front yard refresh may start around $3,000 while a full backyard transformation can range from $15,000-$50,000+. We provide free detailed estimates so you know exactly what to expect.'
  },
  {
    question: 'What is xeriscaping?',
    answer: 'Xeriscape is a landscaping philosophy that uses drought-tolerant plants, efficient irrigation, and strategic design to minimize water use. It\'s ideal for Las Vegas\'s desert climate and can reduce outdoor water consumption by up to 75%.'
  },
  {
    question: 'Can you incorporate artificial turf into the design?',
    answer: 'Absolutely. Many of our most popular landscape designs combine turf areas, desert plants, pavers, and water features for a cohesive, low-maintenance outdoor space. We coordinate all elements for a seamless look.'
  },
  {
    question: 'Do you use native desert plants?',
    answer: 'Yes. George, our waterfall and plants specialist, has decades of experience with desert flora. We select plants that thrive in Southern Nevada\'s climate — including agave, desert willow, palo verde, and ocotillo — creating beautiful, sustainable landscapes.'
  },
  {
    question: 'How long does a landscape project take?',
    answer: 'Timeline depends on scope. A front yard makeover might take 3-5 days, while a full backyard transformation could take 2-4 weeks. We\'ll provide a detailed schedule with your estimate.'
  },
  {
    question: 'Are you licensed and insured for landscaping work?',
    answer: 'Yes. Desert Greenscapes holds Nevada Contractors License #0085191 and is fully bonded and insured. We\'ve been serving Las Vegas since 2002.'
  },
];

export default function LandscapeDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="landscape"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-sage-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            <Leaf className="w-4 h-4" />
            Full-Service Landscaping
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Landscape Design<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            From concept to completion — beautiful, sustainable desert landscapes designed for Las Vegas living.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">20+</div>
            <div className="text-slate font-accent">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">2,500+</div>
            <div className="text-slate font-accent">Landscapes Transformed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">Free</div>
            <div className="text-slate font-accent">Design Consultation</div>
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
                Las Vegas Landscape Design Experts
              </h2>
              <p className="text-slate leading-relaxed">
                Transforming outdoor spaces in Las Vegas requires more than just good taste — it requires deep knowledge
                of the desert climate, water-smart strategies, and materials that stand up to extreme heat. Since 2002,
                Desert Greenscapes has been creating stunning, sustainable landscapes that Las Vegas homeowners love.
              </p>
              <p className="text-slate leading-relaxed">
                Our team — including George, our waterfall and plants specialist with decades of desert flora experience —
                brings artistry and horticultural expertise to every design. Whether you want a lush resort-style backyard
                or a clean, modern xeriscape, we bring your vision to life.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Professional Landscape Design?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 rounded-lg bg-forest-green/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-forest-green" />
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
                Our Design Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Free Consultation',
                    description: 'We meet at your property to understand your vision, needs, budget, and lifestyle. No pressure, just ideas.'
                  },
                  {
                    step: 2,
                    title: 'Custom Design Plan',
                    description: 'Our team creates a tailored landscape plan with plant selections, hardscape layout, and material recommendations.'
                  },
                  {
                    step: 3,
                    title: 'Site Preparation',
                    description: 'We prepare the site — clearing, grading, base work — setting the foundation for a lasting transformation.'
                  },
                  {
                    step: 4,
                    title: 'Installation & Walkthrough',
                    description: 'Full installation of all elements, then a detailed walkthrough so you know how to enjoy and care for your new landscape.'
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-green text-white flex items-center justify-center font-headline font-bold text-xl">
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

            <div className="bg-gradient-to-br from-forest-green to-sage-green text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Design Philosophy
              </h4>
              <p className="text-white/90 text-sm mb-4">
                We design landscapes that work with the Las Vegas desert — not against it.
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                  Climate-appropriate plants
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                  Water-efficient irrigation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                  Durable hardscape materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                  Year-round beauty
                </li>
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Start Your Design
                </Link>
              </Button>
            </div>

            <div className="bg-cloud p-6 rounded-xl">
              <h4 className="font-accent font-bold text-lg text-charcoal mb-4">
                Related Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/artificial-turf" className="text-forest-green hover:text-sage-green transition-colors">
                    → Artificial Turf Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/xeriscaping" className="text-forest-green hover:text-sage-green transition-colors">
                    → Desert Plants & Xeriscaping
                  </Link>
                </li>
                <li>
                  <Link href="/services/pavers" className="text-forest-green hover:text-sage-green transition-colors">
                    → Paver Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="text-forest-green hover:text-sage-green transition-colors">
                    → Landscape Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/waterfalls" className="text-forest-green hover:text-sage-green transition-colors">
                    → Custom Waterfalls
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
            Ready to Create Your Dream Landscape?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free consultation • Custom designs • 20+ years experience • Licensed & insured
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
