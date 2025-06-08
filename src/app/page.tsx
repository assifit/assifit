
"use client"; // Since Header and Footer now use a hook (useLanguage)

import HeroSection from '@/components/landing/hero-section';
import FeaturesSection from '@/components/landing/features-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import DownloadSection from '@/components/landing/download-section';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { LanguageSwitcher } from '@/components/language-switcher'; // Import LanguageSwitcher
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';
import { useEffect, useState } from 'react';


const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 bg-background/80 backdrop-blur-md shadow-sm">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/icons/ic_logo.png" alt="AssiFit Logo" width={28} height={28} className="h-7 w-7" />
        <span className="text-2xl font-bold font-headline text-primary italic">{appName}</span>
      </Link>
      <div className="flex items-center space-x-2">
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors" prefetch={false}>
            {t.navFeatures}
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors" prefetch={false}>
            {t.navTestimonials}
          </Link>
        </nav>
        <LanguageSwitcher /> {/* Add LanguageSwitcher */}
        <ThemeToggleButton />
      </div>
    </header>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="py-12 bg-muted text-muted-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-6">
          <Image src="/icons/ic_logo.png" alt="AssiFit Logo" width={32} height={32} className="h-8 w-8" />
          <span className="ml-2 text-2xl font-bold font-headline text-primary italic">{appName}</span>
        </div>
        <p className="mb-2">{t.footerSlogan}</p>
        <p className="text-sm mb-6">
          {t.footerCopyright.replace('{year}', currentYear.toString())}
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors" prefetch={false}>
            {t.footerPrivacy}
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors" prefetch={false}>
            {t.footerTerms}
          </Link>
        </div>
      </div>
    </footer>
  );
};


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[5rem]">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="download">
          <DownloadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

    
