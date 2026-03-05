import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Leaf, Droplets, Sun, DollarSign, Phone, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Xeriscaping & Desert Plants Las Vegas | Water-Wise Landscaping',
  description: 'Expert xeriscaping and desert plant installation in Las Vegas. Native plants, drought-tolerant landscaping, SNWA rebate eligible. 20+ years experience. Free estimate!',
};

const FEATURES = [
  'Native and drought-tolerant plant selection',
  'Desert-adapted trees, shrubs, and groundcovers',
  'Decorative rock and gravel installation',
  'Efficient drip irrigation systems',
  'SNWA rebate eligible landscape conversions',
  'Soil amendment and mulching',
  'Boulders and desert accents',
  'Long-term plant care guidance',
];

const BENEFITS = [
  {
    icon: Droplets,
    title: 'Dramatic Water Savings',
    description: 'Xeriscape landscapes use up to 75% less water than traditional grass lawns — saving hundreds of dollars per year on water bills in Las Vegas.'
  },
  {
    icon: DollarSign,
    title: 'SNWA Rebate Eligible',
    description: 'Converting grass to xeriscape or desert landscaping may qualify for the SNWA\'s $7 per square foot water conservation rebate. We assist with the paperwork.'
  },
  {
    icon: Sun,
    title: 'Thrives in Desert Heat',
    description: 'Native and adapted desert plants are built for Las Vegas conditions — they flourish where traditional grass struggles and dies.'
  },
  {
    icon: Leaf,
    title: 'Beautiful & Low Maintenance',
    description: 'Modern xeriscaping is anything but boring. Desert plants offer striking colors, textures, and forms that create stunning, low-maintenance landscapes.'
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is xeriscaping?',
    answer: 'Xeriscaping is a landscaping philosophy centered on water conservation through smart plant selection, efficient irrigation, and strategic design. The word comes from the Greek "xeros" meaning dry. In Las Vegas, it means creating beautiful landscapes using plants that thrive naturally in the desert climate.'
  },
  {
    question: 'Does xeriscaping look barren or boring?',
    answer: 'Not at all. Modern desert landscaping is vibrant and visually interesting — featuring colorful blooming plants like desert willow, penstemon, and bougainvillea; structural plants like agave and yucca; and beautiful decorative rock in various colors and textures. George, our waterfall and plants specialist, creates breathtaking desert landscapes.'
  },
  {
    question: 'Does xeriscape qualify for the SNWA rebate?',
    answer: 'Yes. Replacing irrigated grass with drought-tolerant landscaping can qualify for the SNWA\'s $7 per square foot rebate program. We assist with the paperwork to help ensure you receive your maximum rebate.'
  },
  {
    question: 'What plants do you use in Las Vegas xeriscaping?',
    answer: 'We select from a wide palette of desert-adapted plants including palo verde trees, desert willow, agave, aloe, yucca, ocotillo, bougainvillea, red yucca, autumn sage, desert marigold, lantana, and many more. George\'s expertise in desert flora means your plant palette will thrive for decades.'
  },
  {
    question: 'How much water does a xeriscape save compared to grass?',
    answer: 'A traditional grass lawn in Las Vegas uses approximately 55-75 gallons per square foot per year. A well-designed xeriscape uses 5-15 gallons per square foot — up to 75% less. For a 1,000 sq ft area, that can mean saving 40,000-60,000 gallons per year.'
  },
  {
    question: 'How much does xeriscaping cost in Las Vegas?',
    answer: 'Most xeriscape conversions range from $5-$15 per square foot depending on plant selections, rock type, and irrigation upgrades. The SNWA rebate (up to $7/sq ft) can significantly offset the cost. We provide free estimates and can help you maximize your rebate.'
  },
  {
    question: 'Do xeriscape plants still need irrigation?',
    answer: 'During establishment (the first 1-2 years), even drought-tolerant plants need supplemental water. We install efficient drip irrigation systems that deliver water directly to plant roots, minimizing waste. Once established, many plants can survive on Las Vegas\'s natural rainfall alone.'
  },
  {
    question: 'Can you incorporate decorative elements into the xeriscape?',
    answer: 'Absolutely. Boulders, decorative rock, river rock, flagstone, and hardscape elements integrate beautifully into desert landscapes. Many of our most stunning projects combine plants, rock work, and water features for a complete desert oasis.'
  },
];

export default function XeriscapingPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-desert-gold/70" />
        </div>

        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            <Leaf className="w-4 h-4" />
            SNWA Rebate Eligible
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Desert Plants &<br />Xeriscaping Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Beautiful, water-wise desert landscapes that thrive in Las Vegas heat. Save water, save money, and enjoy a stunning yard.
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
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">75%</div>
            <div className="text-slate font-accent">Less Water Than Grass</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">$7/sq ft</div>
            <div className="text-slate font-accent">SNWA Rebate Available</div>
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
                Las Vegas Desert Landscaping & Xeriscape Specialists
              </h2>
              <p className="text-slate leading-relaxed">
                Las Vegas's desert climate isn't a limitation — it's an opportunity. The right desert plants create
                landscapes that are vibrant, colorful, and completely self-sustaining once established. George, our
                waterfall and plants specialist with decades of desert flora experience, has an eye for creating
                breathtaking desert gardens that people stop to admire.
              </p>
              <p className="text-slate leading-relaxed">
                Whether you're converting a grass lawn to save water and qualify for the SNWA rebate, or starting
                fresh with a beautiful desert-inspired landscape, Desert Greenscapes has the expertise to create
                something extraordinary. We've been transforming Las Vegas yards since 2002.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="mb-12">
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">
                Why Xeriscape in Las Vegas?
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
                    title: 'Site Assessment & Design',
                    description: 'George assesses your soil, sun exposure, and existing conditions to create a plant palette and layout that will thrive on your property.'
                  },
                  {
                    step: 2,
                    title: 'Grass Removal & Prep',
                    description: 'Remove existing turf, amend soil as needed, and prepare the site for proper plant establishment and drainage.'
                  },
                  {
                    step: 3,
                    title: 'Plant & Rock Installation',
                    description: 'Install all plants, trees, and shrubs at the right spacing. Lay decorative rock, boulders, and accents per the design plan.'
                  },
                  {
                    step: 4,
                    title: 'Irrigation & SNWA Paperwork',
                    description: 'Install efficient drip irrigation, complete the project, and assist with SNWA rebate paperwork so you can maximize your rebate.'
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

            <div className="bg-gradient-to-br from-forest-green to-desert-gold text-white p-6 rounded-xl">
              <h4 className="font-headline font-bold text-xl mb-4">
                SNWA Rebate
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Qualifying xeriscape conversions earn $7/sq ft from the Southern Nevada Water Authority.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-3xl font-headline font-bold mb-1">
                  $7/sq ft
                </div>
                <div className="text-sm text-white/80">
                  SNWA conservation rebate
                </div>
              </div>
              <p className="text-white/80 text-xs mb-4">
                We assist with the paperwork to help ensure you receive your maximum rebate.
              </p>
              <Button variant="cta" fullWidth asChild>
                <Link href="#quote-form">
                  Get My Rebate Estimate
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
                  <Link href="/services/artificial-turf" className="text-forest-green hover:text-sage-green transition-colors">
                    → Artificial Turf Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/waterfalls" className="text-forest-green hover:text-sage-green transition-colors">
                    → Custom Waterfalls
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
            Ready to Convert to a Water-Wise Landscape?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • SNWA rebate assistance • 20+ years experience • Expert desert plant selection
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
