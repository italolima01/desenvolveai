'use client';

import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </main>
  );
}
