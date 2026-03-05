import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Target, Star, Shield, DollarSign, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Custom Putting Greens Las Vegas | Backyard Golf Greens Installation',
  description: 'Custom backyard putting greens in Las Vegas. Professional installation, realistic roll, year-round use. Prorated lifetime warranty. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Realistic ball roll and feel',
  'Custom shapes and sizes',
  'Multiple hole configurations',
  'Chipping areas and fringe available',
  'Prorated lifetime warranty on materials',
  'UV resistant & fade-proof turf',
  'Excellent drainage system',
  'Low maintenance — no mowing or watering',
];

const BENEFITS = [
  {
    icon: Target,
    title: 'Practice Anytime',
    description: 'Improve your short game from your own backyard — available any time of day, any day of the year.'
  },
  {
    icon: DollarSign,
    title: 'Save on Golf',
    description: 'Reduce expensive range fees and club costs. Your putting green pays for itself quickly.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Premium putting green turf with prorated lifetime warranty. Stands up to Las Vegas sun and heat.'
  },
  {
    icon: Star,
    title: 'Increase Home Value',
    description: 'A custom putting green is a standout feature that impresses buyers and appraisers alike.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a backyard putting green cost in Las Vegas?',
    answer: 'Custom putting greens typically range from $4,000 to $20,000+ depending on size, shape, number of holes, and added features like chipping areas or fringe. We provide free detailed estimates with no obligation.'
  },
  {
    question: 'What size putting green can you build?',
    answer: 'We custom-build greens of any size — from a compact 100 sq ft single-hole practice green to elaborate 1,000+ sq ft multi-hole designs with chipping zones and sand traps. We work with your available space to maximize playability.'
  },
  {
    question: 'Does the putting green come with a warranty?',
    answer: 'Yes. Our putting greens use the same premium turf that comes with a prorated lifetime warranty on materials. Coverage is adjusted based on the age of the turf, ensuring you\'re always protected with a fair, transparent policy.'
  },
  {
    question: 'How realistic is the ball roll on synthetic putting greens?',
    answer: 'Very realistic. We use specialized putting green turf designed to replicate the speed and roll of professional courses. We can dial in the stimp speed to match your preference, from fast to moderate pace.'
  },
  {
    question: 'Can I add chipping areas or sand traps?',
    answer: 'Absolutely. We regularly install fringe areas for chipping practice, approach shots, and even sand bunkers. These additions make your backyard setup a true short game practice facility.'
  },
  {
    question: 'Does a putting green get hot in Las Vegas summers?',
    answer: 'Like all synthetic turf, putting greens can warm up in direct sun. We use UV-resistant materials and can recommend strategic shade structures. Most golfers play in the mornings or evenings during summer months, and the green cools quickly when shaded.'
  },
  {
    question: 'How long does putting green installation take?',
    answer: 'Most residential putting greens are installed in 2-4 days depending on size and complexity. We\'ll confirm your exact timeline with your free estimate.'
  },
  {
    question: 'Does a putting green require maintenance?',
    answer: 'Minimal. Occasional brushing to keep fibers upright, rinsing to remove dust and debris, and that\'s about it. No mowing, no watering, no fertilizing — just play.'
  },
];

export default function PuttingGreensPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="turf"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-sage-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Target className="w-4 h-4" />
            Golf Enthusiasts' Choice
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Custom Putting Greens<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Bring the golf course home. Custom-built backyard putting greens that play as good as they look.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">200+</div>
            <div className="text-slate font-accent">Putting Greens Installed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">Prorated</div>
            <div className="text-slate font-accent">Lifetime Warranty Included</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">Custom</div>
            <div className="text-slate font-accent">Any Size or Shape</div>
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
                Las Vegas's Custom Putting Green Specialists
              </h2>
              <p className="text-slate leading-relaxed">
                Imagine stepping into your backyard and onto a perfectly manicured putting green — no tee time required.
                Our custom putting greens are built with the same care and expertise we bring to every project, using
                premium synthetic turf that delivers a realistic putting experience in any Las Vegas backyard.
              </p>
              <p className="text-slate leading-relaxed">
                With over 20 years of experience in synthetic turf installation, we know exactly how to engineer a putting
                surface that looks stunning and plays true. From single-hole practice greens to multi-hole tournament-style
                layouts, we design and build to your exact specifications.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Install a Putting Green?
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
                Our Installation Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Design Consultation',
                    description: 'We discuss your layout ideas, hole count, fringe areas, and desired stimp speed. We\'ll design a green that maximizes your space.'
                  },
                  {
                    step: 2,
                    title: 'Site Preparation',
                    description: 'Excavate to proper depth, create contours and breaks, install base materials and drainage for true ball roll.'
                  },
                  {
                    step: 3,
                    title: 'Turf & Cup Installation',
                    description: 'Lay premium putting turf, install cups, cut fringe and collar areas, secure all edges.'
                  },
                  {
                    step: 4,
                    title: 'Final Tuning & Walkthrough',
                    description: 'Fine-tune the surface, add infill, brush the turf, install flags, and walk you through your new green.'
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
                Putting Green Options
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Customize your green to fit your game and your space:
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                {['1-3 hole configurations', 'Chipping & fringe areas', 'Sand bunkers', 'Custom stimp speed', 'Cup lighting available'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Design My Green
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
                  <Link href="/services/pavers" className="text-forest-green hover:text-sage-green transition-colors">
                    → Paver Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/outdoor-kitchens" className="text-forest-green hover:text-sage-green transition-colors">
                    → Outdoor Kitchens
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="text-forest-green hover:text-sage-green transition-colors">
                    → Landscape Lighting
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
            Ready to Build Your Dream Putting Green?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Prorated lifetime warranty • Custom designs • 20+ years experience
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
