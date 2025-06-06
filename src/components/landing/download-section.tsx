
"use client"; // Using useLanguage hook

import Link from 'next/link';
import { GooglePlayBadge } from '@/components/icons/google-play-badge';
import { AppStoreBadge } from '@/components/icons/app-store-badge';
import { useLanguage } from '@/contexts/language-context';

export default function DownloadSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 font-headline">
          {t.downloadHeadline}
        </h2>
        <p className="text-xl mb-10 max-w-xl mx-auto">
          {t.downloadSubheadline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <Link href="https://play.google.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
              <GooglePlayBadge className="h-auto w-[180px] hover:opacity-90 transition-opacity" />
            </a>
          </Link>
          <Link href="https://www.apple.com/app-store/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
              <AppStoreBadge className="h-auto w-[180px] hover:opacity-90 transition-opacity" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
