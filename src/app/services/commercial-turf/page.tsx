import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Building2, DollarSign, Shield, Star, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Commercial Artificial Turf Las Vegas | Large-Scale Synthetic Grass Installation',
  description: 'Commercial artificial turf installation in Las Vegas. HOAs, apartment complexes, office parks, retail, and more. SNWA rebate eligible. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Large-scale project management',
  'HOA and multi-unit property specialists',
  'Office park and retail center installations',
  'School and playground-safe turf options',
  'Commercial-grade turf for high traffic',
  'Prorated lifetime warranty on materials',
  'SNWA rebate assistance for eligible properties',
  'Minimal disruption to business operations',
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Major Cost Savings',
    description: 'Eliminate ongoing water bills, landscape maintenance contracts, and lawn care costs. Commercial properties with large grass areas see dramatic savings.'
  },
  {
    icon: Shield,
    title: 'Commercial-Grade Durability',
    description: 'High-traffic commercial turf is engineered for constant foot traffic, heavy use, and the most demanding environments — maintaining its appearance for years.'
  },
  {
    icon: Star,
    title: 'Always Looks Professional',
    description: 'No brown patches, no seasonal die-off, no uneven growth. Your property always presents a polished, well-maintained image to clients and visitors.'
  },
  {
    icon: Building2,
    title: 'Property Value & Appeal',
    description: 'A consistently green, well-maintained exterior enhances your property\'s curb appeal, helps attract tenants and customers, and maintains property values.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'What types of commercial properties do you work with?',
    answer: 'We work with HOAs, apartment complexes, condominium communities, office parks, retail centers, hotels, schools, churches, and any other commercial or multi-unit property. No project is too large for our team.'
  },
  {
    question: 'How is commercial turf different from residential turf?',
    answer: 'Commercial-grade turf is engineered for higher foot traffic and heavier use. It features denser pile, more robust backing, and infill systems designed to maintain appearance under constant use. We recommend the right turf specification for your specific application and traffic level.'
  },
  {
    question: 'Do commercial properties qualify for the SNWA rebate?',
    answer: 'Many commercial properties do qualify for the SNWA\'s $7 per square foot water conservation rebate. Eligibility depends on your water meter and property type. We assist with the paperwork and help determine eligibility for your specific property.'
  },
  {
    question: 'How do you minimize disruption during commercial installation?',
    answer: 'We work with property managers to schedule installation in phases, work during off-hours, and stage work to keep common areas accessible. Our experienced team works efficiently to minimize impact on tenants, customers, and daily operations.'
  },
  {
    question: 'Can you handle multi-building or campus-scale projects?',
    answer: 'Absolutely. We have the team, equipment, and project management experience for large-scale commercial installations. We\'ve completed projects ranging from individual HOA common areas to multi-acre commercial campuses across Southern Nevada.'
  },
  {
    question: 'What is the ROI for commercial artificial turf?',
    answer: 'Most commercial properties recoup their investment within 3-7 years through eliminated water bills and reduced landscape maintenance costs. Large properties with multiple grass areas often see payback in 2-4 years, especially after factoring in SNWA rebates.'
  },
  {
    question: 'Are you licensed for commercial work in Nevada?',
    answer: 'Yes. Desert Greenscapes holds Nevada Contractors License #0085191 and is fully bonded and insured for commercial projects of all sizes. We\'ve been serving Las Vegas commercial clients since 2002.'
  },
  {
    question: 'Do you provide maintenance services after installation?',
    answer: 'Commercial artificial turf requires very little maintenance, but we offer periodic maintenance programs for HOAs and property managers who want to ensure their investment looks its best year after year.'
  },
];

export default function CommercialTurfPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-forest-green/80" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Building2 className="w-4 h-4" />
            Commercial Specialists
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Commercial Artificial Turf<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Large-scale commercial turf installation for HOAs, apartment complexes, office parks, and more. Save water. Save money. Always look great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="#quote-form">
                Get Commercial Quote
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
            <div className="text-slate font-accent">Commercial Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">$7/sq ft</div>
            <div className="text-slate font-accent">SNWA Rebate Available</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">20+</div>
            <div className="text-slate font-accent">Years Experience</div>
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
                Las Vegas's Commercial Turf Installation Experts
              </h2>
              <p className="text-slate leading-relaxed">
                Commercial properties in Las Vegas face unique challenges with traditional grass — extreme heat,
                high water costs, ongoing maintenance contracts, and the pressure to always look their best.
                Commercial artificial turf solves all of these problems at once, providing a consistently beautiful
                appearance with dramatically reduced operating costs.
              </p>
              <p className="text-slate leading-relaxed">
                With over 20 years of experience and hundreds of commercial installations across Southern Nevada,
                Desert Greenscapes has the team, equipment, and expertise to handle projects of any size. From
                single HOA common areas to multi-building campus conversions, we deliver on time and on budget.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Commercial Artificial Turf?
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

            {/* Industries */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'HOAs & Homeowner Associations',
                  'Apartment & Condo Complexes',
                  'Office Parks & Business Centers',
                  'Retail Centers & Shopping Centers',
                  'Hotels & Resorts',
                  'Schools & Universities',
                  'Churches & Religious Organizations',
                  'Medical & Dental Offices',
                  'Sports Facilities & Recreation',
                  'Municipal & Government Properties',
                ].map((industry, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span className="text-slate text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Our Commercial Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Site Assessment & Proposal',
                    description: 'We walk the property, take detailed measurements, assess existing conditions, and provide a comprehensive proposal with clear scope and pricing.'
                  },
                  {
                    step: 2,
                    title: 'Project Planning',
                    description: 'We develop a phased installation plan to minimize disruption to residents, tenants, or customers, and coordinate with property management.'
                  },
                  {
                    step: 3,
                    title: 'Installation',
                    description: 'Our experienced crew handles all site prep, base installation, turf laying, seaming, and edging with precision and efficiency.'
                  },
                  {
                    step: 4,
                    title: 'SNWA Rebate & Closeout',
                    description: 'We assist with SNWA rebate paperwork, conduct a final quality walkthrough, and ensure you\'re fully satisfied before we close the project.'
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
                Get a Commercial Quote
              </h3>
              <p className="text-slate text-sm mb-6">
                Tell us about your property and we'll contact you within 24 hours with a detailed proposal.
              </p>
              <ContactForm />
            </div>

            <div className="bg-gradient-to-br from-forest-green to-charcoal text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                Commercial Advantages
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Why commercial clients choose Desert Greenscapes:
              </p>
              <ul className="space-y-2 text-sm text-white/90 mb-4">
                {[
                  'Licensed & insured for commercial work',
                  '20+ years commercial experience',
                  'Prorated lifetime warranty',
                  'SNWA rebate assistance',
                  'Minimal business disruption',
                  'Volume pricing available',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-desert-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Request Commercial Quote
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
                    → Residential Artificial Turf
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-design" className="text-forest-green hover:text-sage-green transition-colors">
                    → Complete Landscape Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/xeriscaping" className="text-forest-green hover:text-sage-green transition-colors">
                    → Desert Plants & Xeriscaping
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
            Ready to Reduce Costs and Beautify Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Prorated lifetime warranty • SNWA rebate assistance • 20+ years commercial experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Commercial Quote
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
