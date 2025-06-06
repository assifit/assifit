
"use client";

import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 bg-background/80 backdrop-blur-md shadow-sm">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-7 w-7 text-primary" />
        <span className="text-2xl font-bold font-headline text-primary">{appName}</span>
      </Link>
      <div className="flex items-center space-x-2">
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/#features" className="hover:text-primary transition-colors" prefetch={false}>
            {t.navFeatures}
          </Link>
          <Link href="/#testimonials" className="hover:text-primary transition-colors" prefetch={false}>
            {t.navTestimonials}
          </Link>
          <Link href="/#download" className="hover:text-primary transition-colors" prefetch={false}>
            {t.navDownload}
          </Link>
        </nav>
        <LanguageSwitcher />
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
          <MountainIcon className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold font-headline text-primary">{appName}</span>
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


export default function PrivacyPolicyPage() {
  const { t } = useLanguage();
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setLastUpdatedDate(today.toLocaleDateString(t.languageLabel === 'Language' ? 'en-US' : 'vi-VN', options));
  }, [t.languageLabel]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 pb-12 container mx-auto px-4 md:px-6">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto">
          <h1 className="text-3xl font-bold font-headline text-primary mb-4">{t.privacyPolicyTitle}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t.privacyPolicyLastUpdated.replace('{date}', lastUpdatedDate)}</p>

          <section className="mb-8">
            <p>{t.privacyPolicyIntro.replaceAll('${appName}', appName)}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyInfoCollected}</h2>
            <p className="mb-2">{t.privacyPolicyInfoCollectedP1.replaceAll('${appName}', appName)}</p>
            <p>{t.privacyPolicyInfoCollectedP2.replaceAll('${appName}', appName)}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyHowWeUse}</h2>
            <p>{t.privacyPolicyHowWeUseP1.replaceAll('${appName}', appName)}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyHowWeShare}</h2>
            <p>{t.privacyPolicyHowWeShareP1}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyDataSecurity}</h2>
            <p>{t.privacyPolicyDataSecurityP1}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyYourRights}</h2>
            <p>{t.privacyPolicyYourRightsP1}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyChildren}</h2>
            <p>{t.privacyPolicyChildrenP1.replaceAll('${appName}', appName)}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyChanges}</h2>
            <p>{t.privacyPolicyChangesP1}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-headline mb-3">{t.privacyPolicyContact}</h2>
            <p>{t.privacyPolicyContactP1.replaceAll('${appName}', appName)}</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

    