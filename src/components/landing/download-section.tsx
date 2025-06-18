
"use client"; // Using useLanguage hook

import Link from 'next/link';
import { GooglePlayBadge } from '@/components/icons/google-play-badge';
import { useLanguage } from '@/contexts/language-context';

export default function DownloadSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 font-headline">
          {t.downloadHeadline}
        </h2>
        <p className="text-xl mb-10 max-w-xl mx-auto">
          {t.downloadSubheadline}
        </p>
        <div className="flex justify-center items-center">
          <Link href="https://play.google.com/store/apps/details?id=vn.assifit" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
              <GooglePlayBadge />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
