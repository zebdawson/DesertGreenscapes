import {
  HeroVideo,
  SNWARebateBanner,
  VideoShowcase,
  ServicesGrid,
  BeforeAfterShowcase,
  WhyChooseUs,
  LasVegasExperts,
  ProcessSteps,
  Testimonials,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <HeroVideo />
      <SNWARebateBanner />
      <VideoShowcase />
      <ServicesGrid />
      <BeforeAfterShowcase />
      <WhyChooseUs />
      <LasVegasExperts />
      <ProcessSteps />
      <Testimonials />
    </>
  );
}
