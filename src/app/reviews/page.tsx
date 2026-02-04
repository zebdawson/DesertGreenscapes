'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Quote, ThumbsUp, MapPin, Calendar, CheckCircle2, Award, Phone, Filter } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  review: string;
  projectDetails?: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    customerName: 'Michael & Sarah Thompson',
    location: 'Summerlin',
    rating: 5,
    date: '2024-01-15',
    service: 'Artificial Turf Installation',
    review: 'Desert Greenscapes transformed our backyard! We had 1,200 sq ft of grass that was costing us a fortune in water bills. Steve and his team were professional, on-time, and the quality of work is outstanding. The artificial turf looks so realistic that our neighbors thought it was real grass! They also handled all the SNWA rebate paperwork and we received $8,400 back. Absolutely recommend!',
    projectDetails: '1,200 sq ft turf installation with SNWA rebate',
    verified: true,
  },
  {
    id: '2',
    customerName: 'David Rodriguez',
    location: 'Henderson',
    rating: 5,
    date: '2024-01-08',
    service: 'Custom Waterfall',
    review: 'We wanted a custom waterfall feature for our backyard oasis and Pedro absolutely nailed it. His craftsmanship and attention to detail are incredible. The waterfall looks natural and the LED lighting makes it stunning at night. The entire team was respectful of our property and cleaned up beautifully every day. Worth every penny!',
    projectDetails: 'Custom rock waterfall with LED lighting',
    verified: true,
  },
  {
    id: '3',
    customerName: 'Jennifer Martinez',
    location: 'Green Valley',
    rating: 5,
    date: '2023-12-22',
    service: 'Paver Installation',
    review: 'Our paver patio and walkway turned out even better than we imagined. The design consultation was thorough and they helped us choose the perfect color scheme. Installation took exactly as long as they said it would. Six months later and everything still looks perfect - no settling or issues. These guys are the real deal.',
    projectDetails: '800 sq ft paver patio & walkways',
    verified: true,
  },
  {
    id: '4',
    customerName: 'Robert & Linda Chen',
    location: 'Las Vegas',
    rating: 5,
    date: '2023-12-10',
    service: 'Artificial Turf Installation',
    review: 'After getting quotes from 5 different companies, Desert Greenscapes offered the best value and professionalism. They weren\'t the cheapest, but they explained exactly what materials they use and why quality matters in Vegas heat. 18 months later, our turf still looks brand new while our neighbor\'s (from a cheaper company) is already fading. You get what you pay for!',
    projectDetails: '2,000 sq ft front & back yard conversion',
    verified: true,
  },
  {
    id: '5',
    customerName: 'Amanda Sullivan',
    location: 'North Las Vegas',
    rating: 5,
    date: '2023-11-28',
    service: 'Complete Landscape Design',
    review: 'We hired Desert Greenscapes for a complete landscape overhaul. They removed all our grass, installed beautiful pavers, added a putting green for my husband, and created gorgeous desert landscaping with lighting. George kept us updated throughout the entire project. The transformation is incredible and we\'re saving over $150/month on our water bill!',
    projectDetails: 'Full property landscape transformation',
    verified: true,
  },
  {
    id: '6',
    customerName: 'James Wilson',
    location: 'Summerlin',
    rating: 5,
    date: '2023-11-15',
    service: 'Putting Green',
    review: 'My backyard putting green is the envy of the neighborhood! The quality is PGA-level and it\'s held up perfectly through two Vegas summers. I practice every evening and it\'s improved my short game significantly. Steve helped design the green with multiple break points to make it challenging. Best investment I\'ve made in my home.',
    projectDetails: '600 sq ft custom putting green',
    verified: true,
  },
  {
    id: '7',
    customerName: 'Maria Gonzalez',
    location: 'Henderson',
    rating: 5,
    date: '2023-10-20',
    service: 'Artificial Turf Installation',
    review: 'As a busy single mom, maintaining a grass lawn was impossible. Desert Greenscapes converted both my front and back yards to artificial turf and it\'s been life-changing. No more weekend mowing, no brown spots, and my kids can play on it year-round. The SNWA rebate process was seamless - they handled everything and I got $5,600 back!',
    projectDetails: '800 sq ft turf with pet-friendly infill',
    verified: true,
  },
  {
    id: '8',
    customerName: 'Thomas & Patricia Anderson',
    location: 'Enterprise',
    rating: 5,
    date: '2023-10-05',
    service: 'Paver Installation',
    review: 'We replaced our old concrete patio with gorgeous pavers and couldn\'t be happier. The team was meticulous about proper grading for drainage and the base preparation. They finished on schedule despite 110-degree weather. The craftsmanship shows - every paver is perfectly level and the pattern is flawless. Highly recommend!',
    projectDetails: '1,200 sq ft paver patio replacement',
    verified: true,
  },
  {
    id: '9',
    customerName: 'Daniel Kim',
    location: 'Summerlin',
    rating: 5,
    date: '2023-09-18',
    service: 'Custom Waterfall',
    review: 'We wanted a resort-style backyard and the custom waterfall was the centerpiece. Pedro is a true artist - the way he positioned every rock looks completely natural. The sound of the water is so relaxing. Our home value increased significantly and we enjoy our backyard so much more now. Thank you Desert Greenscapes!',
    projectDetails: 'Natural stone waterfall & stream',
    verified: true,
  },
  {
    id: '10',
    customerName: 'Rachel Brooks',
    location: 'Green Valley',
    rating: 5,
    date: '2023-09-02',
    service: 'Artificial Turf Installation',
    review: 'I was skeptical about artificial turf but after seeing my friend\'s yard that Desert Greenscapes did, I had to call. Best decision ever! It looks amazing, feels soft underfoot, and stays cool even in summer heat. My water bill dropped by 60% immediately. Steve gave me a fair price and stood behind their warranty when I had a minor drainage question months later.',
    projectDetails: '1,000 sq ft backyard turf installation',
    verified: true,
  },
];

const stats = {
  averageRating: 5.0,
  totalReviews: 487,
  fiveStarPercentage: 96,
  recommendationRate: 99,
};

export default function ReviewsPage() {
  const [filterService, setFilterService] = useState<string>('all');

  const filteredReviews = filterService === 'all'
    ? reviews
    : reviews.filter(r => r.service.toLowerCase().includes(filterService.toLowerCase()));

  const serviceFilters = [
    'all',
    'Artificial Turf',
    'Pavers',
    'Waterfall',
    'Landscape Design',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green to-sage-green text-white pt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" size="lg" className="mb-4">
              <Award className="w-4 h-4" />
              Trusted by 1,000s of Homeowners
            </Badge>
            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              See Why Las Vegas Trusts Desert Greenscapes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Over 30 years of 5-star service. Real reviews from real homeowners who
              transformed their landscapes with our expert team.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section background="white" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-desert-gold text-desert-gold" />
              ))}
            </div>
            <div className="font-headline font-bold text-3xl text-charcoal mb-1">
              {stats.averageRating.toFixed(1)}
            </div>
            <div className="text-sm text-slate font-accent">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">
              {stats.totalReviews}+
            </div>
            <div className="text-sm text-slate font-accent">Customer Reviews</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">
              {stats.fiveStarPercentage}%
            </div>
            <div className="text-sm text-slate font-accent">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="font-headline font-bold text-4xl text-forest-green mb-2">
              {stats.recommendationRate}%
            </div>
            <div className="text-sm text-slate font-accent">Would Recommend</div>
          </div>
        </div>
      </Section>

      {/* Trust Badges */}
      <Section background="cloud" padding="lg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Award className="w-12 h-12 text-desert-gold mx-auto mb-3" />
              <div className="font-headline font-bold text-xl text-charcoal mb-1">A+</div>
              <div className="text-sm text-slate">BBB Rating</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Star className="w-12 h-12 text-desert-gold mx-auto mb-3" />
              <div className="font-headline font-bold text-xl text-charcoal mb-1">5.0</div>
              <div className="text-sm text-slate">Google Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-forest-green mx-auto mb-3" />
              <div className="font-headline font-bold text-xl text-charcoal mb-1">Licensed</div>
              <div className="text-sm text-slate">NV #{BUSINESS_INFO.license}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <ThumbsUp className="w-12 h-12 text-water-blue mx-auto mb-3" />
              <div className="font-headline font-bold text-xl text-charcoal mb-1">30+</div>
              <div className="text-sm text-slate">Years Experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Filter & Reviews */}
      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
              Customer Reviews
            </h2>
            <p className="text-lg text-slate mb-6">
              Read what our customers have to say about their experience
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterService(filter === 'all' ? 'all' : filter)}
                  className={cn(
                    'px-4 py-2 rounded-full font-accent font-medium text-sm transition-all',
                    filterService === filter || (filterService === 'all' && filter === 'all')
                      ? 'bg-forest-green text-white'
                      : 'bg-cloud text-slate hover:bg-sage-green/20'
                  )}
                >
                  {filter === 'all' ? 'All Reviews' : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-cloud rounded-2xl p-8 hover:shadow-lg transition-shadow relative"
              >
                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute top-6 right-6">
                    <Badge variant="primary" size="sm">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </Badge>
                  </div>
                )}

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-sage-green/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-5 h-5',
                        i < review.rating
                          ? 'fill-desert-gold text-desert-gold'
                          : 'text-slate/20'
                      )}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate leading-relaxed mb-6">
                  "{review.review}"
                </p>

                {/* Project Details */}
                {review.projectDetails && (
                  <div className="mb-6 p-4 bg-white rounded-lg border border-sage-green/20">
                    <div className="text-xs font-accent font-semibold text-sage-green uppercase mb-1">
                      Project Details
                    </div>
                    <div className="text-sm text-slate">{review.projectDetails}</div>
                  </div>
                )}

                {/* Customer Info */}
                <div className="flex items-center justify-between pt-6 border-t border-sage-green/20">
                  <div>
                    <div className="font-accent font-bold text-charcoal">
                      {review.customerName}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {review.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(review.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" size="sm">
                    {review.service}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Load More (placeholder) */}
          {filteredReviews.length >= 10 && (
            <div className="text-center mt-12">
              <p className="text-slate mb-4">
                Showing {filteredReviews.length} of {stats.totalReviews}+ reviews
              </p>
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* Video Testimonials */}
      <Section background="cloud" padding="xl">
        <div className="text-center mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <Star className="w-4 h-4" />
            Video Testimonials
          </Badge>
          <h2 className="font-headline font-bold text-4xl text-charcoal mb-4">
            Hear From Our Happy Customers
          </h2>
          <p className="text-lg text-slate">
            Watch real homeowners share their Desert Greenscapes experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Thompson Family', service: 'Artificial Turf', location: 'Summerlin' },
            { name: 'Rodriguez Family', service: 'Custom Waterfall', location: 'Henderson' },
            { name: 'Martinez Family', service: 'Paver Patio', location: 'Green Valley' },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-sage-green to-forest-green relative">
                <PlaceholderImage
                  category="general"
                  aspectRatio="16:9"
                  label={`${testimonial.name} Testimonial`}
                  showOverlay={true}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-forest-green border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold text-xl text-charcoal mb-2">
                  {testimonial.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-slate">
                  <span>{testimonial.service}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Review Platforms */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-bold text-3xl text-charcoal mb-4">
            Find Us on Your Favorite Review Platform
          </h2>
          <p className="text-lg text-slate mb-8">
            We're proud of our reputation across all major review sites
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { platform: 'Google', rating: '5.0', reviews: '200+' },
              { platform: 'Yelp', rating: '5.0', reviews: '150+' },
              { platform: 'Facebook', rating: '5.0', reviews: '100+' },
              { platform: 'BBB', rating: 'A+', reviews: '37+' },
            ].map((platform, index) => (
              <div key={index} className="bg-cloud rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="font-headline font-bold text-2xl text-charcoal mb-2">
                  {platform.platform}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {platform.rating.includes('.') ? (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-desert-gold text-desert-gold" />
                      ))}
                    </>
                  ) : (
                    <Award className="w-8 h-8 text-desert-gold" />
                  )}
                </div>
                <div className="text-lg font-bold text-forest-green mb-1">
                  {platform.rating}
                </div>
                <div className="text-sm text-slate">{platform.reviews} Reviews</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leave a Review CTA */}
      <Section background="cloud" padding="xl">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <Star className="w-16 h-16 text-desert-gold mx-auto mb-6" />
          <h2 className="font-headline font-bold text-3xl text-charcoal mb-4">
            Are You a Desert Greenscapes Customer?
          </h2>
          <p className="text-lg text-slate mb-8">
            We'd love to hear about your experience! Your feedback helps us continue
            to provide the best service and helps other homeowners make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Leave a Google Review
            </Button>
            <Button variant="outline" size="lg">
              Share on Facebook
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-white mb-4">
            Join Hundreds of Satisfied Homeowners
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the Desert Greenscapes difference. Get your free estimate today
            and discover why we're Las Vegas' most trusted landscaping company.
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
