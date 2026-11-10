import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';
import { HeroSection } from '../components/sections/HeroSection';
import { ValuePropSection } from '../components/sections/ValuePropSection';
import { TreatmentsSection } from '../components/sections/TreatmentsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { SchedulerSection } from '../components/sections/SchedulerSection';
import { LocationsSection } from '../components/sections/LocationsSection';

export default function Home() {
  return (
    <>
      {/* Top Fixed Header */}
      <Header />

      {/* Main Page Content */}
      <main className="w-full pt-14 lg:pt-20 bg-surface flex flex-col flex-1">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Why Families Across India Trust AuraDental */}
        <ValuePropSection />

        {/* Section 3: Specialized Clinical Treatments */}
        <TreatmentsSection />

        {/* Section 4: Real Stories, Restored Confidence (Reviews) */}
        <TestimonialsSection />

        {/* Section 5: Instant Appointment Scheduler */}
        <SchedulerSection />

        {/* Section 6: Clinic Locations & Emergency Care */}
        <LocationsSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Mobile Bottom Action Bar */}
      <MobileBottomBar />
    </>
  );
}

