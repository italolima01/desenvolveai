'use client';

import HeroSection from '@/components/HeroSection';
import InnovationSection from '@/components/InnovationSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <InnovationSection />
    </main>
  );
}
