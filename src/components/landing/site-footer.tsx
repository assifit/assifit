"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeAwareLogo } from '@/components/theme-aware-logo';
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';
import { PLAY_STORE_URL } from './store-button';

export default function SiteFooter() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-primary';

  return (
    <footer className="border-t border-border/40 bg-muted/40">
      <div className="container mx-auto grid gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <ThemeAwareLogo width={32} height={32} className="h-8 w-8" />
            <span className="font-headline text-2xl font-bold italic text-primary">{appName}</span>
          </div>
          <p className="mt-4 max-w-xs text-muted-foreground">{t.footerSlogan}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{t.footerProduct}</h3>
          <ul className="space-y-3">
            <li><Link href="#features" prefetch={false} className={linkClass}>{t.navFeatures}</Link></li>
            <li><Link href="#how-it-works" prefetch={false} className={linkClass}>{t.navHowItWorks}</Link></li>
            <li><Link href="#faq" prefetch={false} className={linkClass}>{t.navFaq}</Link></li>
            <li><a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>{t.navDownload}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{t.footerLegal}</h3>
          <ul className="space-y-3">
            <li><Link href="/privacy-policy" prefetch={false} className={linkClass}>{t.footerPrivacy}</Link></li>
            <li><Link href="/terms-of-service" prefetch={false} className={linkClass}>{t.footerTerms}</Link></li>
            <li><Link href="/delete-account" prefetch={false} className={linkClass}>{t.footerDeleteAccount}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <p className="container mx-auto px-6 py-6 text-center text-xs text-muted-foreground">
          {t.footerCopyright.replace('{year}', currentYear.toString())}
        </p>
      </div>
    </footer>
  );
}
