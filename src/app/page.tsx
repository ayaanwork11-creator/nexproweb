import React from 'react';
import Hero from '@/components/Hero';
import MetricStats from '@/components/MetricStats';
import FeatureGrid from '@/components/FeatureGrid';
import InteractiveDemo from '@/components/InteractiveDemo';
import PricingCalculator from '@/components/PricingCalculator';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'NexPro — The Next-Generation Distributed Cloud & Edge Runtime',
  description:
    'Deploy serverless microservices, distributed state caches, and autonomous AI pipelines with sub-millisecond cold starts and zero DevOps configuration.',
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <MetricStats />
      <FeatureGrid />
      <InteractiveDemo />
      <PricingCalculator />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}
