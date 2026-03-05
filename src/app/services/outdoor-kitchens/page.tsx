import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, UtensilsCrossed, Star, Shield, DollarSign, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Outdoor Kitchens Las Vegas | Custom BBQ Islands & Outdoor Kitchen Installation',
  description: 'Custom outdoor kitchens and BBQ islands in Las Vegas. Built-in grills, countertops, refrigerators, and full outdoor cooking setups. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Custom BBQ island design and construction',
  'Built-in grill installation (gas & charcoal)',
  'Outdoor-rated countertops (granite, concrete, tile)',
  'Built-in refrigerators and beverage centers',
  'Side burners, griddles, and smokers',
  'Stainless steel cabinetry and storage',
  'Outdoor sinks with plumbing connections',
  'Shade structures and pergola coordination',
];

const BENEFITS = [
  {
    icon: Star,
    title: 'Entertainment Hub',
    description: 'Las Vegas\'s year-round outdoor climate is perfect for entertaining. A fully equipped outdoor kitchen keeps the party outside.'
  },
  {
    icon: DollarSign,
    title: 'Increase Home Value',
    description: 'Outdoor kitchens are among the highest ROI home improvements, often returning 100-200% of the investment in home value.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Complete Cooking Setup',
    description: 'From basic grills to full commercial-grade outdoor kitchens with everything you need to cook any meal outside.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'We use outdoor-rated materials designed to withstand Las Vegas heat, UV exposure, and the elements for decades.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'How much does an outdoor kitchen cost in Las Vegas?',
    answer: 'Outdoor kitchen costs vary widely based on size and features. A basic BBQ island with a built-in grill starts around $5,000-$8,000. A fully equipped outdoor kitchen with grill, fridge, sink, bar seating, and shade structure typically ranges from $15,000-$50,000+. We provide free detailed estimates.'
  },
  {
    question: 'What materials do you use for outdoor kitchen countertops?',
    answer: 'We work with granite, concrete, porcelain tile, and outdoor-rated quartz — all chosen for durability in extreme heat and UV exposure. We recommend materials that won\'t fade, crack, or stain in Las Vegas\'s desert climate.'
  },
  {
    question: 'Do you handle gas line connections for the grill?',
    answer: 'We coordinate all gas line work with licensed plumbers. Our team handles the overall construction and installation, and we partner with trusted local plumbers to ensure safe, code-compliant gas connections.'
  },
  {
    question: 'Can you build around my existing grill?',
    answer: 'Absolutely. We can build a custom island around your existing grill or other appliances, or help you select and integrate new built-in equipment. We\'ll design the layout to fit both your existing pieces and any new additions.'
  },
  {
    question: 'Do outdoor kitchens need permits in Las Vegas?',
    answer: 'In most cases, yes — especially if gas lines or plumbing are involved. We handle the permit process as part of our full-service installation, ensuring all work is code-compliant and properly inspected.'
  },
  {
    question: 'How long does outdoor kitchen construction take?',
    answer: 'A standard BBQ island typically takes 1-2 weeks. A full outdoor kitchen with custom masonry, plumbing, and electrical can take 3-6 weeks. We\'ll provide a detailed schedule with your estimate.'
  },
  {
    question: 'What grill brands do you work with?',
    answer: 'We work with all major brands including Weber, DCS, Lynx, Blaze, Bull, and more. We can help you select the right grill for your cooking style and budget, or install the brand you\'ve already chosen.'
  },
  {
    question: 'Can the outdoor kitchen include a bar area?',
    answer: 'Yes — outdoor bar counters and seating are very popular in Las Vegas. We can design bar overhangs with seating, install bar stools, and create the perfect setup for entertaining guests.'
  },
];

export default function OutdoorKitchensPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="general"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-sage-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <UtensilsCrossed className="w-4 h-4" />
            Outdoor Living Specialists
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Outdoor Kitchens & BBQs<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Custom outdoor kitchens and BBQ islands built for Las Vegas entertaining — from basic grills to complete gourmet setups.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">300+</div>
            <div className="text-slate font-accent">Outdoor Kitchens Built</div>
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
                Las Vegas's Custom Outdoor Kitchen Builders
              </h2>
              <p className="text-slate leading-relaxed">
                Las Vegas is one of the best cities in America for outdoor living — with over 300 days of sunshine per year,
                your backyard is essentially another room in your home. A custom outdoor kitchen by Desert Greenscapes
                transforms that space into a true entertainment destination.
              </p>
              <p className="text-slate leading-relaxed">
                Since 2002, we've been building everything from simple BBQ islands to elaborate gourmet outdoor kitchens
                complete with grills, refrigerators, sinks, and bar seating. Our team manages every aspect of the build —
                design, masonry, countertops, appliance installation, and coordination with plumbers for gas and water connections.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Build an Outdoor Kitchen?
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
                    description: 'We discuss your cooking style, entertaining habits, budget, and aesthetic preferences to design your ideal outdoor kitchen.'
                  },
                  {
                    step: 2,
                    title: 'Material & Appliance Selection',
                    description: 'Choose your countertop material, cabinetry finish, grill brand, and any additional appliances. We source everything for you.'
                  },
                  {
                    step: 3,
                    title: 'Masonry & Construction',
                    description: 'Our team builds the island structure, installs plumbing and gas rough-in, lays countertops, and installs all appliances.'
                  },
                  {
                    step: 4,
                    title: 'Finishing & Walkthrough',
                    description: 'Final details, cleanup, and a complete walkthrough of your new outdoor kitchen — including grill operation and maintenance tips.'
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
                Popular Add-Ons
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Complete your outdoor kitchen with:
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                {['Pergola or shade cover', 'Landscape lighting', 'Fire pit or fireplace', 'Outdoor bar seating', 'Paver patio surrounds', 'Misting systems'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Design My Kitchen
                </Link>
              </Button>
            </div>

            <div className="bg-cloud p-6 rounded-xl">
              <h4 className="font-accent font-bold text-lg text-charcoal mb-4">
                Related Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/fire-features" className="text-forest-green hover:text-sage-green transition-colors">
                    → Fire Pits & Fireplaces
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
                <li>
                  <Link href="/services/landscape-design" className="text-forest-green hover:text-sage-green transition-colors">
                    → Complete Landscape Design
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
            Ready to Elevate Your Outdoor Entertaining?
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
