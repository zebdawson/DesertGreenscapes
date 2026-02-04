import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Shield, Star, Phone, ArrowRight, Hammer } from 'lucide-react';
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
  title: 'Paver Installation Las Vegas | Patios, Driveways & Walkways',
  description: 'Professional paver installation in Las Vegas. Custom patios, driveways, walkways, and retaining walls. 30+ years experience. Premium materials. Free estimate!',
};

const FEATURES = [
  'Custom design consultation',
  'Premium paver materials',
  'Expert base preparation',
  'Proper drainage system',
  'Precision cutting & fitting',
  'Polymeric sand joints',
  'Sealing available',
  'Warranty included'
];

const BENEFITS = [
  {
    icon: Star,
    title: 'Timeless Beauty',
    description: 'Pavers add elegance and curb appeal that increases your property value.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Properly installed pavers can last 25+ years with minimal maintenance.'
  },
  {
    icon: CheckCircle,
    title: 'Weather Resistant',
    description: 'Withstands Las Vegas heat, cold, and occasional rain without cracking.'
  },
  {
    icon: Hammer,
    title: 'Easy Repairs',
    description: 'Individual pavers can be replaced if damaged, unlike concrete slabs.'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How much do pavers cost in Las Vegas?',
    answer: 'Paver installation costs typically range from $12-25 per square foot installed, depending on the paver style, pattern complexity, and site preparation needed. Simple patios start around $12-15/sq ft, while intricate designs with premium materials can be $20-25/sq ft. We provide detailed free estimates.'
  },
  {
    question: 'Are pavers better than concrete?',
    answer: 'In Las Vegas, yes! Pavers handle temperature fluctuations better than concrete, resist cracking, are easier to repair, and offer much more design flexibility. Concrete slabs often crack in our desert climate, while pavers can expand and contract individually.'
  },
  {
    question: 'How long does paver installation take?',
    answer: 'Most residential paver patios take 3-5 days from start to finish. Driveways may take 5-7 days. Complex designs or larger projects may take longer. We\'ll give you an exact timeline with your free estimate.'
  },
  {
    question: 'Do pavers need to be sealed?',
    answer: 'Sealing is optional but recommended in Las Vegas. Sealing protects against UV fading, stains, and makes maintenance easier. We can seal your pavers immediately after installation or you can do it later. Resealing every 2-3 years is recommended.'
  },
  {
    question: 'What types of pavers do you install?',
    answer: 'We install concrete pavers, travertine, flagstone, natural stone, and brick pavers. Each has different benefits - concrete offers the most design options and value, travertine stays cooler, and natural stone provides unique character.'
  },
  {
    question: 'Can pavers handle Las Vegas heat?',
    answer: 'Yes! We use pavers designed for desert climates. Lighter colors stay cooler. Travertine is especially popular in Las Vegas because it stays cooler than concrete pavers. We can recommend the best materials for your needs.'
  },
  {
    question: 'How do you prepare the base for pavers?',
    answer: 'Proper base preparation is critical! We excavate to proper depth, install landscape fabric, add 4-6 inches of compacted base rock, then 1 inch of leveling sand. This creates a stable foundation that won\'t shift or settle.'
  },
  {
    question: 'Can you match existing pavers?',
    answer: 'We can usually match or complement existing pavers. If you have the manufacturer and style information, that helps. Otherwise, we can take samples and find the closest match available.'
  }
];

export default function PaversPage() {
  const paverProjects = getProjectsByService('pavers').slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderImage
            category="pavers"
            aspectRatio="16:9"
            showOverlay={false}
            className="w-full h-full rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-slate/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Hammer className="w-4 h-4" />
            Premium Hardscaping
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Paver Installation<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Transform your outdoor space with custom pavers. Patios, driveways, walkways, and more.
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
              800+
            </div>
            <div className="text-slate font-accent">Paver Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              25+ Years
            </div>
            <div className="text-slate font-accent">Lifespan with Proper Care</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">
              100s
            </div>
            <div className="text-slate font-accent">Design Options Available</div>
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
                Las Vegas's Premier Paver Installation Experts
              </h2>
              <p className="text-slate leading-relaxed">
                Pavers are the perfect solution for Las Vegas outdoor spaces. Unlike concrete that cracks in our
                extreme temperature swings, pavers flex and move independently, maintaining their beauty for decades.
                From elegant patios to durable driveways, we create hardscapes that enhance your property's value
                and usability.
              </p>
              <p className="text-slate leading-relaxed">
                With over 30 years of experience installing pavers across Southern Nevada, we've mastered the art
                of creating beautiful, long-lasting hardscapes. We handle everything from custom design to final
                sealing, ensuring your paver installation exceeds expectations.
              </p>
            </div>

            {/* Paver Types */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                What We Install
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Patios', desc: 'Outdoor living spaces, fire pit areas, entertaining spaces' },
                  { title: 'Driveways', desc: 'Residential and commercial driveway installations' },
                  { title: 'Walkways & Paths', desc: 'Front entry walks, garden paths, side yards' },
                  { title: 'Pool Decks', desc: 'Slip-resistant pavers that stay cooler' },
                  { title: 'Retaining Walls', desc: 'Functional and decorative landscape walls' },
                  { title: 'Outdoor Kitchens', desc: 'Custom islands, counters, and flooring' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-accent font-bold text-forest-green mb-1">{item.title}</h4>
                    <p className="text-sm text-slate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Choose Pavers?
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
                Our Process Includes
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
                    description: 'We visit your property, take measurements, discuss design options, and create a detailed proposal.'
                  },
                  {
                    step: 2,
                    title: 'Site Preparation',
                    description: 'Excavate area to proper depth, install drainage, prepare base with compacted rock and sand.'
                  },
                  {
                    step: 3,
                    title: 'Paver Installation',
                    description: 'Lay pavers in your chosen pattern, make precise cuts, ensure proper spacing and alignment.'
                  },
                  {
                    step: 4,
                    title: 'Finishing Touches',
                    description: 'Install edge restraints, sweep polymeric sand into joints, compact, optional sealing, final cleanup.'
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
            <div className="bg-gradient-to-br from-charcoal to-slate text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Transparent Pricing
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Every project is unique, but here's what to expect:
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-3xl font-headline font-bold mb-1">
                  $12-25/sq ft
                </div>
                <div className="text-sm text-white/80">
                  Installed (varies by material & design)
                </div>
              </div>
              <div className="space-y-2 text-sm text-white/90 mb-4">
                <div>• Basic concrete pavers: $12-15/sq ft</div>
                <div>• Premium pavers: $18-22/sq ft</div>
                <div>• Travertine: $20-25/sq ft</div>
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
                  <Link href="/services/landscape-lighting" className="text-forest-green hover:text-sage-green transition-colors">
                    → Landscape Lighting
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
      {paverProjects.length > 0 && (
        <Section background="white" padding="xl">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Recent Paver Projects
            </h2>
            <p className="text-xl text-slate">
              See the quality of our paver installations across Las Vegas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paverProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery?filter=pavers">
                View All Paver Projects
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
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Premium materials • Expert installation • 30+ years experience
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
