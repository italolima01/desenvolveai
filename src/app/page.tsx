'use client';

import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import InnovationSection from '@/components/InnovationSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <InnovationSection />
      <CtaSection />
      <Footer />
    </main>
  );
}