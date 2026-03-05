import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Shield, Star, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { getProjectsByService } from '@/lib/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Artificial Turf Installation Las Vegas | Premium Synthetic Grass',
  description: 'Professional artificial turf installation in Las Vegas. SNWA rebate eligible ($7/sq ft). Prorated lifetime warranty, pet-friendly options. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Prorated lifetime warranty on materials',
  'SNWA rebate eligible ($7/sq ft)',
  'Pet-friendly options available',
  'Professional drainage system',
  'UV resistant & fade-proof',
  'Looks and feels natural',
  'No watering required',
  'Zero maintenance needed'
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Save Money',
    description: 'Eliminate water bills, mowing costs, and fertilizer expenses. Get $7/sq ft SNWA rebate.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: '15-20 year lifespan with prorated lifetime warranty. Withstands harsh Las Vegas heat and sun.'
  },
  {
    icon: CheckCircle,
    title: 'Perfect Year-Round',
    description: 'Always green, always beautiful. No brown spots, no seasonal die-off.'
  },
  {
    icon: Star,
    title: 'Pet & Kid Friendly',
    description: 'Antimicrobial backing, excellent drainage, soft and safe for play.'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How much does artificial turf cost in Las Vegas?',
    answer: 'Most residential artificial turf installations range from $8-15 per square foot, depending on the quality of turf and site preparation needed. With the SNWA rebate of $7/sq ft, your net cost can be as low as $1-8 per square foot. We provide free detailed estimates.'
  },
  {
    question: 'How long does artificial turf last?',
    answer: 'Our premium artificial turf is designed to last 15-20 years with proper care. It comes with a prorated lifetime warranty on materials — coverage is adjusted based on the age of the turf, similar to how tire warranties work.'
  },
  {
    question: 'What does the prorated lifetime warranty mean?',
    answer: 'Our warranty is prorated based on the age of your turf. For example, if your turf is 8 years old, you pay 20% of the replacement cost and we cover the rest. This ensures you\'re always protected with a fair, transparent policy.'
  },
  {
    question: 'Is artificial turf safe for dogs and pets?',
    answer: 'Absolutely! We offer pet-friendly turf options with antimicrobial backing and excellent drainage. It\'s durable enough for the most active dogs, easy to clean, and won\'t have muddy spots or holes from digging.'
  },
  {
    question: 'Does artificial turf get hot in Las Vegas?',
    answer: 'Modern artificial turf can get warm in direct summer sun, but we use heat-resistant materials and can install cooling infill options. Many clients add shade structures or trees nearby. The turf cools quickly when shaded or watered down.'
  },
  {
    question: 'What is the SNWA rebate program?',
    answer: 'The Southern Nevada Water Authority offers a $7 per square foot rebate for replacing grass with water-smart landscaping like artificial turf. We assist with the paperwork to help ensure you receive your maximum rebate.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential artificial turf projects are completed in 1-3 days depending on size and complexity. We offer next-day installation in many cases. We\'ll give you an exact timeline with your free estimate.'
  },
  {
    question: 'Does artificial turf require maintenance?',
    answer: 'Minimal! Occasional rinsing to remove dust, brushing high-traffic areas, and removing debris. No mowing, no watering, no fertilizing. That\'s it!'
  },
  {
    question: 'Can I install artificial turf myself?',
    answer: 'While DIY is possible, professional installation ensures proper base preparation, drainage, seaming, and longevity. Our 20+ years of experience means we get it right the first time, and you qualify for the SNWA rebate with professional installation.'
  }
];

export default function ArtificialTurfPage() {
  const turfProjects = getProjectsByService('artificial-turf').slice(0, 3);

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
            <Star className="w-4 h-4" />
            Most Popular Service
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Artificial Turf Installation<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Transform your outdoor space with premium synthetic grass. Save water, save money, save time.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              1,500+
            </div>
            <div className="text-slate font-accent">Turf Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              Prorated
            </div>
            <div className="text-slate font-accent">Lifetime Warranty Included</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              $7/sq ft
            </div>
            <div className="text-slate font-accent">SNWA Rebate Available</div>
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
                Las Vegas's Premier Artificial Turf Experts
              </h2>
              <p className="text-slate leading-relaxed">
                In the harsh Las Vegas climate, maintaining a natural grass lawn is an expensive, time-consuming battle.
                Our premium artificial turf gives you a lush, green lawn year-round without the water bills, mowing,
                or maintenance headaches.
              </p>
              <p className="text-slate leading-relaxed">
                With over 20 years of experience installing artificial turf across Southern Nevada, we've perfected
                the art of creating beautiful, durable synthetic lawns that look and feel natural. From residential
                backyards to commercial properties, putting greens to dog runs, we do it all.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Choose Artificial Turf?
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
                    title: 'Site Assessment & Quote',
                    description: 'We visit your property, take measurements, discuss your needs, and provide a detailed free estimate.'
                  },
                  {
                    step: 2,
                    title: 'Base Preparation',
                    description: 'Remove existing grass, grade and compact the base, install proper drainage system.'
                  },
                  {
                    step: 3,
                    title: 'Turf Installation',
                    description: 'Roll out premium turf, make precise cuts, seam sections, and secure edges.'
                  },
                  {
                    step: 4,
                    title: 'Infill & Finishing',
                    description: 'Add infill material, brush fibers upright, final cleanup, and walkthrough.'
                  }
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
            {/* Quote Form */}
            <div id="quote-form" className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-slate text-sm mb-6">
                Fill out the form and we'll contact you within 24 hours with a detailed estimate.
              </p>
              <ContactForm />
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-forest-green to-sage-green text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Transparent Pricing
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Every project is unique, but here's what to expect:
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-3xl font-headline font-bold mb-1">
                  $8-15/sq ft
                </div>
                <div className="text-sm text-white/80">
                  Installed (before rebate)
                </div>
              </div>
              <div className="bg-desert-gold/20 rounded-lg p-3 mb-4">
                <div className="font-accent font-semibold mb-1">
                  Minus $7 SNWA Rebate
                </div>
                <div className="text-sm text-white/90">
                  Net cost as low as $1-8/sq ft
                </div>
              </div>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Get Exact Quote
                </Link>
              </Button>
            </div>

            {/* Related Services */}
            <div className="bg-cloud p-6 rounded-xl">
              <h4 className="font-accent font-bold text-lg text-charcoal mb-4">
                Related Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/putting-greens" className="text-forest-green hover:text-sage-green transition-colors">
                    → Custom Putting Greens
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

      {/* Project Gallery */}
      {turfProjects.length > 0 && (
        <Section background="white" padding="xl">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Recent Artificial Turf Projects
            </h2>
            <p className="text-xl text-slate">
              See the quality of our work across Las Vegas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {turfProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery?filter=artificial-turf">
                View All Turf Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Ready for a Maintenance-Free Lawn?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Prorated lifetime warranty • SNWA rebate experts • Next-day installation available
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