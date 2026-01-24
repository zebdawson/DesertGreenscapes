import {
  Hero,
  SNWARebateBanner,
  ServicesGrid,
  WhyChooseUs,
  ProcessSteps,
  Testimonials,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <SNWARebateBanner />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
    </>
  );
}
