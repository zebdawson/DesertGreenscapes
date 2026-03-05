'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, Calculator, CheckCircle2, FileText, Clock, Phone, Droplets, Award, AlertCircle, MapPin } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function RebatesPage() {
  const [sqft, setSqft] = useState<string>('1000');
  const calculatedRebate = parseInt(sqft) * 7;

  const faqs = [
    {
      question: 'Who is eligible for the SNWA Water Smart Landscapes Rebate?',
      answer: 'Any residential or commercial property within the SNWA service area is eligible. You must be converting existing grass (not rock or dirt) to water-smart landscaping. Properties with existing artificial turf or desert landscaping in the area to be converted are not eligible.',
    },
    {
      question: 'How much can I save with the rebate?',
      answer: 'SNWA currently offers $7 per square foot of grass converted to water-smart landscaping. For a typical 1,000 sq ft lawn, that\'s $7,000 in rebates! The rebate applies to both artificial turf installations and desert landscaping conversions.',
    },
    {
      question: 'What types of landscaping qualify for rebates?',
      answer: 'Qualifying landscaping includes artificial turf installation, drought-tolerant desert plants, decorative rock, pavers in place of grass, and other water-efficient landscape features. The key requirement is converting existing grass to a water-smart alternative.',
    },
    {
      question: 'How does the rebate application process work?',
      answer: 'First, you must submit a pre-approval application before starting work. Once approved, complete your landscape conversion with a licensed contractor like Desert Greenscapes. After completion, submit photos and documentation for final approval. SNWA typically processes rebates within 6-8 weeks.',
    },
    {
      question: 'Can Desert Greenscapes help with the rebate paperwork?',
      answer: 'Absolutely! We assist with the entire rebate process. We\'ll help with pre-approval applications, ensure your project meets all requirements, document the installation with required photos, and submit final paperwork. We\'ve successfully processed thousands of rebate applications.',
    },
    {
      question: 'Are there any restrictions on artificial turf for rebates?',
      answer: 'Yes, the artificial turf must meet SNWA specifications for quality and appearance. It must have a backing that allows drainage, be installed with proper sub-base materials, and look realistic. Desert Greenscapes only installs turf that exceeds SNWA requirements.',
    },
    {
      question: 'How long do I have to complete the project after approval?',
      answer: 'Once your pre-approval is granted, you typically have 180 days (6 months) to complete the project. If you need more time due to special circumstances, extensions may be available by contacting SNWA before the deadline.',
    },
    {
      question: 'Can I combine the rebate with financing options?',
      answer: 'Yes! Many homeowners use the anticipated rebate to offset project costs. We offer flexible financing options and can structure payments to account for your expected rebate. Contact us to discuss financing solutions that work with the SNWA rebate program.',
    },
    {
      question: 'What documentation do I need for the rebate?',
      answer: 'You\'ll need before photos showing grass, after photos of the completed project, proof of property ownership, contractor license information (we provide this), and water account number. Desert Greenscapes helps gather and organize all required documentation.',
    },
    {
      question: 'Are rebates taxable income?',
      answer: 'Rebates are generally not considered taxable income as they\'re a reduction in the cost of home improvements. However, tax situations vary, so we recommend consulting with your tax advisor about your specific circumstances.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-water-blue via-forest-green to-sage-green text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/topography.svg')]"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" size="lg" className="mb-4">
              <DollarSign className="w-4 h-4" />
              Save Thousands
            </Badge>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Get Up to $7 Per Square Foot with SNWA Rebates
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              The Southern Nevada Water Authority rewards homeowners for converting grass to
              water-smart landscaping. We'll assist with the paperwork—you enjoy the savings!
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
              <Droplets className="w-8 h-8 text-water-blue" />
              <div className="text-left">
                <div className="text-sm text-white/80">Current Rebate Amount</div>
                <div className="text-3xl font-headline font-bold">$7/sq ft</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <Section background="white" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-water-blue mb-2">$7</div>
            <div className="text-sm text-slate font-accent">Per Square Foot</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-water-blue mb-2">180</div>
            <div className="text-sm text-slate font-accent">Days to Complete</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-water-blue mb-2">6-8</div>
            <div className="text-sm text-slate font-accent">Weeks for Payment</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-water-blue mb-2">$7K+</div>
            <div className="text-sm text-slate font-accent">Avg. Homeowner Savings</div>
          </div>
        </div>
      </Section>

      {/* Rebate Calculator */}
      <Section background="cloud" padding="xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="primary" size="md" className="mb-4">
              <Calculator className="w-4 h-4" />
              Calculate Your Savings
            </Badge>
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Instant Rebate Calculator
            </h2>
            <p className="text-lg text-slate">
              Enter your lawn size to estimate your potential SNWA rebate savings
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <label className="block text-sm font-accent font-semibold text-slate mb-3">
                Square Feet of Grass to Convert
              </label>
              <input
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-cloud rounded-xl focus:border-water-blue focus:outline-none transition-colors"
                placeholder="1000"
                min="0"
              />
            </div>

            <div className="bg-gradient-to-br from-water-blue to-forest-green text-white rounded-xl p-8 text-center">
              <div className="text-sm font-accent uppercase tracking-wider mb-2 text-white/80">
                Your Estimated Rebate
              </div>
              <div className="font-headline font-bold text-5xl md:text-6xl mb-4">
                ${calculatedRebate.toLocaleString()}
              </div>
              <div className="text-white/90 mb-6">
                Based on {parseInt(sqft).toLocaleString()} sq ft × $7/sq ft
              </div>
              <Button variant="cta" size="lg" asChild className="!bg-white !text-forest-green hover:!bg-cloud">
                <Link href="/contact">
                  Get Your Free Estimate
                </Link>
              </Button>
            </div>

            <div className="mt-6 p-4 bg-water-blue/5 rounded-lg border border-water-blue/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-water-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate">
                  <strong>Note:</strong> This calculator provides an estimate only. Actual rebate
                  amounts depend on SNWA approval, project completion, and current program terms.
                  Desert Greenscapes will verify exact rebate eligibility during your free consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="primary" size="md" className="mb-4">
              <FileText className="w-4 h-4" />
              Simple Process
            </Badge>
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              How the SNWA Rebate Process Works
            </h2>
            <p className="text-lg text-slate">
              We make it easy! Follow these simple steps to maximize your water conservation rebate.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Free Consultation & Estimate',
                description: 'Contact Desert Greenscapes for a free on-site evaluation. We\'ll measure your lawn, discuss your vision, and provide a detailed estimate including projected rebate amounts.',
                icon: Phone,
                color: 'water-blue',
              },
              {
                step: 2,
                title: 'Pre-Approval Application',
                description: 'We assist with your pre-approval application to SNWA, including property details, water account information, and project plans. Most approvals come within 2-3 weeks.',
                icon: FileText,
                color: 'forest-green',
              },
              {
                step: 3,
                title: 'Professional Installation',
                description: 'Once approved, our expert team completes your landscape transformation. We document everything with detailed before and after photos as required by SNWA.',
                icon: CheckCircle2,
                color: 'sage-green',
              },
              {
                step: 4,
                title: 'Final Submission & Payment',
                description: 'We assist with submitting final documentation to SNWA, including completion photos and invoices. You receive your rebate check directly from SNWA within 6-8 weeks of final approval.',
                icon: DollarSign,
                color: 'desert-gold',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className={cn(
                  'flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-headline font-bold text-2xl',
                  `bg-${item.color}`
                )}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className={cn(
                  'hidden md:block flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center',
                  `bg-${item.color}/10`
                )}>
                  <item.icon className={cn('w-6 h-6', `text-${item.color}`)} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-forest-green/5 rounded-xl border-2 border-forest-green/20">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-forest-green flex-shrink-0" />
              <div>
                <h4 className="font-accent font-bold text-lg text-charcoal mb-2">
                  We're With You Every Step of the Way
                </h4>
                <p className="text-slate">
                  Desert Greenscapes has assisted with thousands of successful rebate applications.
                  We know exactly what SNWA requires and help with all paperwork, measurements, and
                  documentation. You just sit back and wait for your rebate check!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section background="cloud" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Why Convert to Water-Smart Landscaping?
            </h2>
            <p className="text-lg text-slate">
              Beyond the generous rebates, there are many benefits to eliminating your grass
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-water-blue/10 flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-water-blue" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                Massive Water Savings
              </h3>
              <p className="text-slate leading-relaxed">
                Save up to 55 gallons per square foot annually. For a typical 1,000 sq ft lawn,
                that's 55,000 gallons per year—enough to fill a swimming pool!
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-forest-green" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                Lower Utility Bills
              </h3>
              <p className="text-slate leading-relaxed">
                Reduce your water bill by $50-150+ per month. Combined with the upfront rebate,
                artificial turf typically pays for itself within 3-5 years.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-sage-green" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                No More Maintenance
              </h3>
              <p className="text-slate leading-relaxed">
                Eliminate mowing, fertilizing, aerating, and reseeding. Reclaim your weekends
                and enjoy your outdoor space instead of working on it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-desert-gold/10 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-desert-gold" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                Increase Property Value
              </h3>
              <p className="text-slate leading-relaxed">
                Well-designed water-smart landscaping enhances curb appeal and can increase your
                home's value by 10-20%, making it a smart investment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-water-blue/10 flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-water-blue" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                Environmental Impact
              </h3>
              <p className="text-slate leading-relaxed">
                Help conserve Nevada's precious water resources. Every square foot converted
                makes a meaningful difference in our desert environment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-forest-green" />
              </div>
              <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
                Year-Round Beauty
              </h3>
              <p className="text-slate leading-relaxed">
                Enjoy lush green grass 365 days a year, regardless of drought, heat, or water
                restrictions. No brown spots or seasonal dormancy.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Eligibility Requirements */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="primary" size="md" className="mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Eligibility
            </Badge>
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Rebate Requirements & Eligibility
            </h2>
            <p className="text-lg text-slate">
              Make sure your project qualifies for SNWA rebates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-forest-green" />
                What Qualifies
              </h3>
              <ul className="space-y-3">
                {[
                  'Converting existing grass to artificial turf',
                  'Converting grass to desert landscaping with plants',
                  'Converting grass to decorative rock/gravel',
                  'Replacing grass with pavers or hardscaping',
                  'Residential and commercial properties',
                  'Properties within SNWA service area',
                  'Water account in good standing',
                  'Pre-approval obtained before starting work',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline font-bold text-2xl text-charcoal mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-sunset-orange" />
                What Doesn't Qualify
              </h3>
              <ul className="space-y-3">
                {[
                  'Converting existing rock or dirt (must be grass)',
                  'Artificial turf that doesn\'t meet SNWA specs',
                  'Work started before pre-approval',
                  'Properties outside SNWA service area',
                  'Decorative grass or grass alternatives',
                  'Replacing existing artificial turf',
                  'Back-yard putting greens under 500 sq ft',
                  'Projects not completed within 180 days',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-sunset-orange flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-water-blue/5 rounded-xl border border-water-blue/20">
            <h4 className="font-accent font-bold text-lg text-charcoal mb-3">
              Not Sure If You Qualify?
            </h4>
            <p className="text-slate mb-4">
              Contact Desert Greenscapes for a free consultation. We'll evaluate your property,
              confirm eligibility, and provide a detailed estimate including your projected rebate amount.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="cloud" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              SNWA Rebate FAQ
            </h2>
            <p className="text-lg text-slate">
              Common questions about the Water Smart Landscapes Rebate Program
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Before/After Examples */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <Award className="w-4 h-4" />
            Real Results
          </Badge>
          <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
            Success Stories: Homeowners Who Saved Big
          </h2>
          <p className="text-lg text-slate">
            See how Las Vegas homeowners transformed their yards and pocketed thousands in rebates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              location: 'Summerlin',
              sqft: 1200,
              rebate: 8400,
              description: 'Converted front and backyard grass to premium artificial turf',
            },
            {
              location: 'Henderson',
              sqft: 850,
              rebate: 5950,
              description: 'Replaced water-hungry lawn with desert landscape and turf',
            },
            {
              location: 'Green Valley',
              sqft: 1500,
              rebate: 10500,
              description: 'Full property conversion with pavers and synthetic grass',
            },
          ].map((project, index) => (
            <div key={index} className="bg-cloud rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <PlaceholderImage
                  category="turf"
                  aspectRatio="4:3"
                  label={`${project.location} Project`}
                  showOverlay={false}
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="gold" size="sm">
                    <DollarSign className="w-3 h-3" />
                    ${project.rebate.toLocaleString()} Saved
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                  {project.sqft.toLocaleString()} sq ft Conversion
                </h3>
                <p className="text-sm text-slate mb-4">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-cloud">
                  <div className="text-2xl font-headline font-bold text-forest-green">
                    ${project.rebate.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate">SNWA Rebate Received</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Ready to Save Thousands on Your Landscape?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let Desert Greenscapes assist with your SNWA rebate application from start to finish.
            Get your free estimate and rebate projection today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Free Rebate Estimate
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="!text-white !border-white hover:!bg-white hover:!text-forest-green"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}