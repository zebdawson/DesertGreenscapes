import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, Sprout, LayoutGrid, Waves, Trees, Target, Lightbulb, UtensilsCrossed, Flame, Leaf, Building2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/forms/ContactForm';
import { PRIMARY_SERVICES, SECONDARY_SERVICES, BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Landscaping Services Las Vegas | Desert Greenscapes',
  description: 'Comprehensive landscaping services in Las Vegas: artificial turf, pavers, waterfalls, landscape design, putting greens, outdoor kitchens, fire features, and more. 20+ years experience. Free estimates.',
};

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  LayoutGrid,
  Waves,
  Trees,
  Target,
  Lightbulb,
  UtensilsCrossed,
  Flame,
  Palmtree: Leaf,
  Building2,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-forest-green to-sage-green">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        <Container className="relative z-10 text-center pt-32 pb-16">
          <Badge variant="gold" size="lg" className="mb-4">
            20+ Years Serving Las Vegas
          </Badge>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Landscaping Services<br />Las Vegas
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            From artificial turf to custom water features, we transform Las Vegas outdoor spaces into paradise. Founded in 2002.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">20+</div>
            <div className="text-slate font-accent">Years in Business</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">2,500+</div>
            <div className="text-slate font-accent">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">10</div>
            <div className="text-slate font-accent">Services Offered</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-forest-green mb-2">5★</div>
            <div className="text-slate font-accent">Customer Rated</div>
          </div>
        </div>
      </Section>

      {/* Primary Services */}
      <Section background="cloud" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Core Services</Badge>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Our Primary Services
            </h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              Comprehensive outdoor transformations — Las Vegas's trusted choice since 2002.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PRIMARY_SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Sprout;
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-forest-green/10 to-sage-green/10 p-6 border-b border-cloud">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-forest-green" />
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-xl text-charcoal mb-1">
                          {service.title}
                        </h3>
                        <p className="text-slate text-sm">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate">
                          <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={service.slug}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary Services */}
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Additional Services</Badge>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              More Ways We Can Help
            </h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              Specialty services to complete your dream outdoor living space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECONDARY_SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Sprout;
              return (
                <Link
                  key={service.id}
                  href={service.slug}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-desert-gold/10 flex items-center justify-center mb-4 group-hover:bg-desert-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-desert-gold" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-charcoal mb-2 group-hover:text-forest-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-forest-green text-sm font-accent font-semibold">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us + Contact Form */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-headline font-bold text-3xl text-charcoal mb-6">
              Why Choose Desert Greenscapes?
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Founded in 2002 by Steve Hofsaess, Desert Greenscapes has spent over 20 years perfecting the art of
              Las Vegas outdoor transformations. Our bilingual team — led by Pedro, our meticulous lead installer,
              and George, our waterfall and plants specialist — brings unmatched expertise to every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Licensed & Insured', detail: 'NV License #0085191, fully bonded' },
                { title: 'Prorated Lifetime Warranty', detail: 'On all artificial turf materials' },
                { title: 'SNWA Rebate Experts', detail: 'We assist with your $7/sq ft rebate paperwork' },
                { title: 'Bilingual Team', detail: 'English & Spanish — Hablamos Español' },
                { title: '20+ Years Experience', detail: 'Serving Las Vegas since 2002' },
                { title: 'Next-Day Installation', detail: 'Fast turnaround when you need it' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-accent font-semibold text-charcoal">{item.title}</div>
                    <div className="text-slate text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="quote-form" className="bg-cloud p-6 rounded-xl shadow-lg">
            <h3 className="font-headline font-bold text-2xl text-charcoal mb-2">
              Get a Free Quote
            </h3>
            <p className="text-slate text-sm mb-6">
              Tell us about your project and we'll contact you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free estimates • Prorated lifetime warranty • SNWA rebate assistance • 20+ years experience
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
