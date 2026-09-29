"use client";

import SiteHeader from '@/components/landing/site-header';
import SiteFooter from '@/components/landing/site-footer';
import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import ShowcaseSection from '@/components/landing/showcase-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FaqSection from '@/components/landing/faq-section';
import DownloadSection from '@/components/landing/download-section';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </div>
  );
}
