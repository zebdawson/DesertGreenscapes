'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, MapPin, Users, Calendar, Shield, Heart, CheckCircle2, Phone } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { BUSINESS_INFO, TEAM_MEMBERS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green to-sage-green text-white pt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" size="lg" className="mb-4">
              <Heart className="w-4 h-4" />
              Family-Owned & Operated
            </Badge>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              20+ Years Transforming Las Vegas Landscapes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Since 2002, Desert Greenscapes has been the trusted name in premium landscaping
              throughout Southern Nevada. We're not just contractors—we're your neighbors,
              dedicated to making Las Vegas beautiful, one yard at a time.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section background="white" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">2002</div>
            <div className="text-sm text-slate font-accent">Founded in Las Vegas</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">1,000+</div>
            <div className="text-sm text-slate font-accent">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">100%</div>
            <div className="text-sm text-slate font-accent">Family-Owned</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">A+</div>
            <div className="text-sm text-slate font-accent">BBB Rating</div>
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="cloud" padding="xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="primary" size="md" className="mb-4">
              <Calendar className="w-4 h-4" />
              Our Story
            </Badge>
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-6">
              Built on Experience, Driven by Excellence
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                Desert Greenscapes was founded in 2002 by Steve Hofsaess with a simple mission:
                to bring beautiful, sustainable landscapes to Las Vegas homes and businesses.
                What started as a small operation has grown into one of Southern Nevada's most
                trusted landscaping companies.
              </p>
              <p>
                Over more than two decades, we've witnessed Las Vegas transform into a thriving
                metropolis. Through it all, we've been here — helping homeowners and businesses
                navigate water conservation challenges while creating stunning outdoor spaces that
                enhance property values and quality of life.
              </p>
              <p>
                Today, Desert Greenscapes is a true team effort. Steve leads the business with
                Pedro — our bilingual master installer with an eye for perfection — and George,
                our waterfall and plants specialist whose custom water features and desert plant
                designs have become some of the most talked-about in the Las Vegas valley.
              </p>
              <p>
                We specialize in artificial turf, custom waterfalls, paver installations, and
                complete landscape design. As SNWA-authorized contractors, we've helped hundreds
                of homeowners save thousands through water conservation rebates — and we make
                the paperwork process as smooth as possible.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-green to-forest-green">
              <img
                src="/images/about/team-photo.jpg"
                alt="Desert Greenscapes Team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full">
                <PlaceholderImage
                  category="landscape"
                  aspectRatio="4:3"
                  label="Desert Greenscapes Team"
                  showOverlay={false}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-forest-green text-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="font-headline font-bold text-3xl mb-1">Since 2002</div>
              <div className="text-sm text-white/90">
                Serving Southern Nevada for over 20 years
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet the Team */}
      <Section background="white" padding="xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <Users className="w-4 h-4" />
            Meet Our Team
          </Badge>
          <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
            The People Behind Your Dream Landscape
          </h2>
          <p className="text-lg text-slate">
            Three specialists. Decades of combined experience. One goal — making your outdoor
            space exactly what you've always wanted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-sage-green to-forest-green relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold text-2xl text-charcoal mb-1">
                  {member.name}
                </h3>
                <div className="text-forest-green font-accent font-semibold text-sm mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-slate leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.specialties && (
                  <div>
                    <div className="text-xs font-accent font-semibold text-slate uppercase mb-2">
                      Specialties:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" size="sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section background="cloud" padding="xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <Heart className="w-4 h-4" />
            Our Values
          </Badge>
          <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-slate">
            These core values guide everything we do, from initial consultation to final walkthrough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Quality Craftsmanship
            </h3>
            <p className="text-slate leading-relaxed">
              We take pride in every installation. Our work isn't just about getting the job
              done — it's about exceeding expectations with attention to detail and superior materials.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Customer-First Approach
            </h3>
            <p className="text-slate leading-relaxed">
              Your satisfaction is our priority. We listen to your needs, respect your property,
              and communicate clearly throughout the entire process.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Honest & Transparent
            </h3>
            <p className="text-slate leading-relaxed">
              No hidden fees, no surprises. We provide detailed estimates upfront and keep you
              informed every step of the way.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Deep Local Expertise
            </h3>
            <p className="text-slate leading-relaxed">
              With 20+ years working exclusively in Southern Nevada, we know the soil, the
              heat, the HOA requirements, and exactly what works long-term in this climate.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Bilingual Team
            </h3>
            <p className="text-slate leading-relaxed">
              We proudly serve Las Vegas' diverse community. Pedro and George are fluent in
              Spanish — hablamos español — so nothing gets lost in translation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-forest-green" />
            </div>
            <h3 className="font-headline font-bold text-xl text-charcoal mb-3">
              Community Focused
            </h3>
            <p className="text-slate leading-relaxed">
              As a local, family-owned business, we're invested in our community. We actively
              support water conservation efforts and help Las Vegas adapt to desert living.
            </p>
          </div>
        </div>
      </Section>

      {/* Licenses & Certifications */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="primary" size="md" className="mb-4">
              <Shield className="w-4 h-4" />
              Licenses & Certifications
            </Badge>
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Fully Licensed & Insured
            </h2>
            <p className="text-lg text-slate">
              Your peace of mind matters. We maintain all required licenses and insurance
              to protect you and your property on every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cloud rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                    Nevada State License
                  </h3>
                  <div className="text-2xl font-bold text-forest-green mb-2">
                    #{BUSINESS_INFO.license}
                  </div>
                  <p className="text-sm text-slate">
                    Fully licensed by the State of Nevada Contractors Board
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-water-blue flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                    SNWA Authorized
                  </h3>
                  <p className="text-sm text-slate">
                    Authorized contractor for Southern Nevada Water Authority rebate programs.
                    We assist with paperwork to help maximize your water conservation incentives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-desert-gold flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                    Fully Insured
                  </h3>
                  <p className="text-sm text-slate">
                    Comprehensive liability and workers' compensation insurance protects
                    your property and our team on every job.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cloud rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-green flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                    BBB Rating: A+
                  </h3>
                  <p className="text-sm text-slate">
                    Rated A+ by the Better Business Bureau, reflecting our long track record
                    of ethical business practices and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas */}
      <Section background="cloud" padding="xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <MapPin className="w-4 h-4" />
            Service Areas
          </Badge>
          <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
            Proudly Serving Southern Nevada
          </h2>
          <p className="text-lg text-slate">
            We bring our expertise to communities throughout the Las Vegas Valley and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Las Vegas',
            'Henderson',
            'North Las Vegas',
            'Summerlin',
            'Green Valley',
            'Paradise',
            'Enterprise',
            'Spring Valley',
            'Anthem',
            'Boulder City',
            'Centennial Hills',
            'Mountains Edge',
          ].map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 text-forest-green flex-shrink-0" />
              <span className="font-accent font-medium text-charcoal">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate mb-4">
            Don't see your area? We serve many communities throughout Southern Nevada.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Phone className="w-5 h-5" />
              Call to Confirm: {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Why Homeowners Choose Desert Greenscapes
            </h2>
            <p className="text-lg text-slate">
              We've built our reputation on delivering exceptional results and outstanding service.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Over 20 Years of Local Excellence',
                description: 'Founded in Las Vegas in 2002, we\'ve spent over two decades perfecting our craft and building lasting relationships with hundreds of satisfied customers.',
              },
              {
                title: 'Specialists, Not Generalists',
                description: 'Steve, Pedro, and George each bring deep expertise in their specific areas — turf, installation, and water features. You\'re not getting a jack-of-all-trades crew.',
              },
              {
                title: 'SNWA Rebate Experts',
                description: 'As authorized SNWA contractors, we assist homeowners through the rebate process and have helped our clients save hundreds of thousands in water conservation incentives.',
              },
              {
                title: 'Bilingual Service',
                description: 'We serve Las Vegas\' entire community. Pedro and George are fluent Spanish speakers — no language barriers, ever.',
              },
              {
                title: 'Transparent Pricing',
                description: 'Detailed estimates with no hidden fees. You\'ll know exactly what to expect before we break ground.',
              },
              {
                title: 'Prorated Lifetime Warranty',
                description: 'Our turf comes with a prorated lifetime warranty. We stand behind our work long after the job is done.',
              },
              {
                title: 'Clean & Professional',
                description: 'We treat your property with respect, protect surrounding areas, and leave your space cleaner than we found it.',
              },
              {
                title: 'Family-Owned Values',
                description: 'As a local family business, our reputation is everything. We don\'t cut corners — every project gets our full attention.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-cloud rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-forest-green" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-lg text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied Las Vegas homeowners who trust Desert Greenscapes
            for their landscaping needs. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get Your Free Estimate
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