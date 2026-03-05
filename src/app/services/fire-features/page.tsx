import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Flame, Star, Shield, DollarSign, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Fire Pits & Fireplaces Las Vegas | Custom Fire Features Installation',
  description: 'Custom fire pits, fireplaces, and fire features in Las Vegas. Gas and wood-burning options, custom stone and masonry. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Custom gas and wood-burning fire pits',
  'Outdoor fireplaces with custom mantels',
  'Fire and water feature combinations',
  'Natural stone and masonry construction',
  'Gas line installation coordination',
  'Built-in seating walls around fire pits',
  'Fire bowls and modern linear fire features',
  'Safe installation to local code',
];

const BENEFITS = [
  {
    icon: Star,
    title: 'Year-Round Enjoyment',
    description: 'Las Vegas evenings can be cool — a fire feature extends your outdoor season and creates a cozy gathering spot every night of the year.'
  },
  {
    icon: DollarSign,
    title: 'Increase Home Value',
    description: 'Outdoor fire features are highly sought-after by homebuyers. A well-designed fire pit or fireplace can significantly boost your property\'s appeal.'
  },
  {
    icon: Flame,
    title: 'Stunning Focal Point',
    description: 'A custom fire feature becomes the centerpiece of your outdoor living space — drawing people together and creating unforgettable ambiance.'
  },
  {
    icon: Shield,
    title: 'Safe & Code-Compliant',
    description: 'All our fire features are designed and built to meet Las Vegas fire codes, with proper clearances and safe fuel connections.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a custom fire pit cost in Las Vegas?',
    answer: 'A basic gas fire pit starts around $2,500-$5,000. A custom masonry fire pit with built-in seating walls typically ranges from $5,000-$15,000. Full outdoor fireplaces can range from $8,000-$25,000+. We provide free detailed estimates based on your vision.'
  },
  {
    question: 'Gas or wood-burning — which is better for Las Vegas?',
    answer: 'Both are popular, but gas fire pits are most common in Las Vegas for convenience — instant on/off, no ash cleanup, and no firewood storage. Wood-burning pits provide a more authentic experience with crackling sounds and natural smoke, but require more upkeep. We install both.'
  },
  {
    question: 'Do you handle gas line installation?',
    answer: 'We coordinate gas line work with licensed plumbers to ensure safe, code-compliant connections. Our team handles the fire pit construction and installation, and we partner with trusted local plumbers for all gas connections.'
  },
  {
    question: 'Can you combine a fire feature with a water feature?',
    answer: 'Yes! Fire and water combinations are stunning and increasingly popular. We regularly create designs that incorporate fire bowls over water, fire and water columns, and fire pits adjacent to waterfalls or pools. George, our waterfall and plants specialist, excels at these dramatic combinations.'
  },
  {
    question: 'How close can a fire pit be to my home or fence?',
    answer: 'Las Vegas fire codes require minimum clearances from structures, combustible materials, and property lines. We design every fire feature to meet or exceed these requirements — your safety is always our first consideration.'
  },
  {
    question: 'Can you build seating around the fire pit?',
    answer: 'Absolutely. Built-in seating walls are a popular addition that provides durable, weather-proof seating right around the fire. We can match the materials to your existing hardscape for a cohesive look.'
  },
  {
    question: 'What kind of stone or materials do you use?',
    answer: 'We work with natural stone, manufactured stone veneer, brick, stucco, and concrete — all chosen for durability in extreme heat and desert conditions. Our team helps you select materials that complement your existing outdoor space.'
  },
  {
    question: 'Do fire features require permits in Las Vegas?',
    answer: 'Gas fire features typically require permits due to the gas connections involved. We manage the permit process as part of our service to ensure all installations are code-compliant and properly inspected.'
  },
];

export default function FireFeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="fire"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-forest-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Flame className="w-4 h-4" />
            Custom Fire Features
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Fire Pits & Fireplaces<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Custom fire features that transform your outdoor space into a year-round gathering place. Gas and wood-burning options.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">400+</div>
            <div className="text-slate font-accent">Fire Features Installed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">Custom</div>
            <div className="text-slate font-accent">Every Design Is Unique</div>
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
                Custom Fire Pit & Fireplace Builders in Las Vegas
              </h2>
              <p className="text-slate leading-relaxed">
                There's something primal and beautiful about gathering around a fire — and in Las Vegas's spectacular
                desert evenings, a custom fire feature makes your outdoor space the place to be. Whether you envision
                a sleek modern gas fire pit, a classic stone fireplace, or a dramatic fire-and-water combination,
                Desert Greenscapes brings it to life.
              </p>
              <p className="text-slate leading-relaxed">
                Since 2002, we've built hundreds of custom fire features throughout Southern Nevada. Our team — including
                George, our waterfall and plants specialist who excels at dramatic combined fire and water designs —
                brings artistry and technical expertise to every project.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Add a Fire Feature?
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
                Our Build Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Design Consultation',
                    description: 'We discuss your vision, style preferences, fuel type, size, and budget to create the perfect fire feature plan for your space.'
                  },
                  {
                    step: 2,
                    title: 'Permits & Planning',
                    description: 'We handle permit applications where required and coordinate with licensed plumbers for gas line work.'
                  },
                  {
                    step: 3,
                    title: 'Construction',
                    description: 'Our team builds the structure using your chosen materials — stone, brick, or stucco — with proper fire-rated construction throughout.'
                  },
                  {
                    step: 4,
                    title: 'Installation & Testing',
                    description: 'Install burner system, connect gas, test all functions, add finishing details, and walk you through operation and safety.'
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

            <div className="bg-gradient-to-br from-charcoal to-forest-green text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Fire Feature Options
              </h4>
              <p className="text-white/90 text-sm mb-4">
                We build all types of outdoor fire features:
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                {['Round & square fire pits', 'Outdoor fireplaces', 'Linear fire features', 'Fire and water combos', 'Fire bowls & torches', 'Built-in seating walls'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-desert-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Design My Fire Feature
                </Link>
              </Button>
            </div>

            <div className="bg-cloud p-6 rounded-xl">
              <h4 className="font-accent font-bold text-lg text-charcoal mb-4">
                Related Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/outdoor-kitchens" className="text-forest-green hover:text-sage-green transition-colors">
                    → Outdoor Kitchens & BBQs
                  </Link>
                </li>
                <li>
                  <Link href="/services/waterfalls" className="text-forest-green hover:text-sage-green transition-colors">
                    → Custom Waterfalls
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="text-forest-green hover:text-sage-green transition-colors">
                    → Landscape Lighting
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
            Light Up Your Outdoor Space
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Custom designs • Licensed & insured • 20+ years experience
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
