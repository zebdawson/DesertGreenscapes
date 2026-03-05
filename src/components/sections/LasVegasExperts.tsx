'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Award, Users, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

const STATS = [
  {
    icon: Users,
    number: '2,500+',
    label: 'Vegas Backyards Transformed'
  },
  {
    icon: Award,
    number: '20+',
    label: 'Years in Las Vegas'
  },
  {
    icon: TrendingUp,
    number: '$2M+',
    label: 'SNWA Rebates Secured for Clients'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Steve Hofsaess',
    role: 'Owner & Founder',
    image: '/images/team/steve.jpg',
  },
  {
    name: 'Pedro',
    role: 'Lead Installer',
    image: '/images/team/pedro.jpg',
  },
  {
    name: 'George',
    role: 'Waterfall & Plants Specialist',
    image: '/images/team/george.jpg',
  }
];

export default function LasVegasExperts() {
  return (
    <Section background="white" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <Badge variant="primary" size="lg" className="mb-4">
            <MapPin className="w-4 h-4" />
            Proudly Local
          </Badge>
          <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal mb-6">
            Las Vegas Landscaping Experts Since 2002
          </h2>
          <div className="space-y-4 text-lg text-slate leading-relaxed mb-8">
            <p>
              We're not a franchise. We're not from out of state. <strong>We're your neighbors</strong> who
              understand the unique challenges of creating beautiful outdoor spaces in the Mojave Desert.
            </p>
            <p>
              From the scorching summers to the caliche soil, we've spent over 20 years perfecting landscapes
              that thrive in Southern Nevada. We know what works, what lasts, and what will make your
              outdoor space truly special.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 text-forest-green" />
                  </div>
                  <div className="font-headline font-bold text-2xl text-forest-green mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate font-accent">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team Preview */}
          <div className="mb-8">
            <h3 className="font-headline font-bold text-xl text-charcoal mb-4">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-3">
                    <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-sage-green to-forest-green">
                      <div className="relative w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="font-accent font-semibold text-charcoal text-sm">
                    {member.name}
                  </div>
                  <div className="text-xs text-slate">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="primary" size="lg" asChild>
            <Link href="/about">
              Learn More About Us
            </Link>
          </Button>
        </div>

        {/* Image/Visual */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <PlaceholderImage
              category="landscape"
              aspectRatio="4:3"
              label="Las Vegas Landscape Project"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-headline font-bold text-charcoal mb-1">
                  Serving All of Southern Nevada
                </div>
                <div className="text-sm text-slate">
                  Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Pahrump & Mesquite
                </div>
              </div>
            </div>
          </div>

          {/* Vegas-themed decorative element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-desert-gold to-sunset-orange rounded-full opacity-20 blur-2xl" />
        </div>
      </div>
    </Section>
  );
}