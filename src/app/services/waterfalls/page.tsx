import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Droplets, Star, Phone, ArrowRight, Sparkles } from 'lucide-react';
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
  title: 'Custom Waterfalls Las Vegas | Water Feature Installation',
  description: '30+ years building custom waterfalls in Las Vegas. Pondless waterfalls, koi ponds, water features. Expert design & installation. Free estimate!',
};

const FEATURES = [
  'Custom waterfall design',
  'Natural stone selection',
  'Professional plumbing',
  'Energy-efficient pumps',
  'LED lighting options',
  'Pondless systems',
  'Filtration systems',
  'Ongoing maintenance'
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: 'Unique Focal Point',
    description: 'A custom waterfall becomes the centerpiece of your outdoor oasis.'
  },
  {
    icon: Droplets,
    title: 'Soothing Ambiance',
    description: 'The sound of flowing water creates a peaceful, relaxing atmosphere.'
  },
  {
    icon: DollarSign,
    title: 'Increases Value',
    description: 'Water features significantly boost property appeal and resale value.'
  },
  {
    icon: Star,
    title: 'Year-Round Enjoyment',
    description: 'Enjoy your waterfall 12 months a year in the Las Vegas climate.'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How much does a custom waterfall cost?',
    answer: 'Custom waterfalls typically range from $5,000 for a small pondless feature to $25,000+ for large elaborate systems with ponds. Most residential waterfalls fall in the $8,000-15,000 range. The cost depends on size, complexity, stone selection, and features like lighting or ponds. We provide detailed free estimates.'
  },
  {
    question: 'What is a pondless waterfall?',
    answer: 'A pondless waterfall has water flowing over rocks into a hidden underground reservoir, where a pump recirculates it back to the top. It\'s safer (no standing water), requires less maintenance, uses less water, and is often more affordable than traditional pond waterfalls.'
  },
  {
    question: 'How long does waterfall installation take?',
    answer: 'Most residential waterfalls take 3-7 days to complete, depending on complexity. Simple pondless features may take 3-4 days, while large waterfalls with ponds and extensive rockwork can take 5-10 days. We\'ll provide a timeline with your estimate.'
  },
  {
    question: 'How much water does a waterfall use?',
    answer: 'Waterfalls recirculate the same water, so they use very little once filled. Expect to add 1-2 gallons per week for evaporation in small features, up to 5-10 gallons weekly for large features in hot weather. This is minimal compared to the water savings from removing grass!'
  },
  {
    question: 'What maintenance do waterfalls need?',
    answer: 'Regular maintenance includes: weekly water level checks, monthly pump cleaning, quarterly water treatment, and seasonal deep cleaning. We offer maintenance packages, or many clients handle it themselves - we\'ll show you how. Proper maintenance ensures your waterfall runs perfectly for decades.'
  },
  {
    question: 'Can I have fish in my waterfall pond?',
    answer: 'Yes! We can build waterfalls with ponds designed for koi or goldfish. These require filtration systems, adequate depth (3-4 feet), and proper circulation. Fish add life and interest but require more maintenance than pondless features.'
  },
  {
    question: 'What about Las Vegas heat and algae?',
    answer: 'We design waterfalls to handle desert conditions. Proper circulation prevents stagnation, UV clarifiers control algae, and water treatments keep it clean. Shade from rocks or plants helps too. Most clients run their waterfalls year-round without issues.'
  },
  {
    question: 'Can you add lighting to a waterfall?',
    answer: 'Absolutely! LED lighting dramatically enhances waterfalls at night. We install submersible LED lights in various colors, creating stunning nighttime effects. Low-voltage LEDs are energy-efficient and last years.'
  }
];

export default function WaterfallsPage() {
  const waterfallProjects = getProjectsByService('waterfalls').slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="waterfall"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-water-blue/90 to-forest-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Droplets className="w-4 h-4" />
            30+ Years of Expertise
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Custom Waterfalls<br />& Water Features
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Create a stunning oasis with a custom-designed waterfall. Expert craftsmanship meets natural beauty.
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
            <div className="text-4xl font-headline font-bold text-water-blue mb-2">
              200+
            </div>
            <div className="text-slate font-accent">Waterfalls Built</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-water-blue mb-2">
              30+ Years
            </div>
            <div className="text-slate font-accent">Waterfall Experience</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-water-blue mb-2">
              Custom
            </div>
            <div className="text-slate font-accent">Every Design is Unique</div>
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
                Las Vegas's Premier Waterfall Specialists
              </h2>
              <p className="text-slate leading-relaxed">
                For over 30 years, we've been creating breathtaking custom waterfalls that transform Las Vegas
                backyards into peaceful retreats. Unlike most landscaping companies that occasionally build water
                features, waterfalls are one of our specialties. We understand the artistry required to make water
                flow naturally over carefully selected rocks.
              </p>
              <p className="text-slate leading-relaxed">
                From small pondless features to grand waterfalls with koi ponds, each project is custom-designed
                to complement your outdoor space. We handle everything: design, stone selection, excavation,
                plumbing, electrical, landscaping, and ongoing maintenance support.
              </p>
            </div>

            {/* Waterfall Types */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Types of Water Features We Build
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Pondless Waterfalls', desc: 'Low maintenance, safe, water flows into hidden reservoir' },
                  { title: 'Pond Waterfalls', desc: 'Traditional waterfalls with koi ponds or plant ponds' },
                  { title: 'Backyard Streams', desc: 'Meandering water streams with cascades and pools' },
                  { title: 'Disappearing Fountains', desc: 'Bubbling rocks or urns with pondless systems' },
                  { title: 'Pool Waterfalls', desc: 'Custom waterfalls that flow into swimming pools' },
                  { title: 'Wall Waterfalls', desc: 'Modern water walls and vertical water features' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-accent font-bold text-water-blue mb-1">{item.title}</h4>
                    <p className="text-sm text-slate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Add a Waterfall?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 rounded-lg bg-water-blue/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-water-blue" />
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
                    <CheckCircle className="w-5 h-5 text-water-blue flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Our Design & Build Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Design Consultation',
                    description: 'We discuss your vision, show examples, create custom design, and provide detailed estimate.'
                  },
                  {
                    step: 2,
                    title: 'Excavation & Infrastructure',
                    description: 'Excavate area, install reservoir/pond liner, run electrical and plumbing lines.'
                  },
                  {
                    step: 3,
                    title: 'Stone Work & Sculpture',
                    description: 'Carefully place natural stones to create waterfalls, cascades, and natural flow patterns.'
                  },
                  {
                    step: 4,
                    title: 'Systems & Finishing',
                    description: 'Install pumps, filters, lighting. Add plants, fill with water, test and adjust flow.'
                  }
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-water-blue text-white flex items-center justify-center font-headline font-bold text-xl">
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
                Tell us about your waterfall vision and we'll create a custom design.
              </p>
              <ContactForm />
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-water-blue to-forest-green text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Investment Range
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Every waterfall is custom-built. Typical ranges:
              </p>
              <div className="space-y-3 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-accent font-semibold">Small Pondless</div>
                  <div className="text-xl font-headline font-bold">$5,000-8,000</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-accent font-semibold">Medium Features</div>
                  <div className="text-xl font-headline font-bold">$8,000-15,000</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-accent font-semibold">Large/Complex</div>
                  <div className="text-xl font-headline font-bold">$15,000-25,000+</div>
                </div>
              </div>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Get Custom Quote
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
                  <Link href="/services/pavers" className="text-forest-green hover:text-sage-green transition-colors">
                    → Paver Surrounds
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="text-forest-green hover:text-sage-green transition-colors">
                    → Waterfall Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-design" className="text-forest-green hover:text-sage-green transition-colors">
                    → Complete Landscaping
                  </Link>
                </li>
                <li>
                  <Link href="/services/artificial-turf" className="text-forest-green hover:text-sage-green transition-colors">
                    → Artificial Turf
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Project Gallery */}
      {waterfallProjects.length > 0 && (
        <Section background="white" padding="xl">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Featured Waterfall Projects
            </h2>
            <p className="text-xl text-slate">
              See our custom waterfall creations across Las Vegas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waterfallProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery?filter=waterfalls">
                View All Waterfall Projects
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
            Ready to Create Your Dream Waterfall?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free consultation • Custom design • 30+ years experience • Year-round beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Free Consultation
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
