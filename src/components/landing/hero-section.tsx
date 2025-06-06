
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { GooglePlayBadge } from '@/components/icons/google-play-badge';
import { AppStoreBadge } from '@/components/icons/app-store-badge';
import { useLanguage } from '@/contexts/language-context';
import { Dumbbell, Flame } from 'lucide-react'; // Import icons

export default function HeroSection() {
  const { t } = useLanguage();

  const headlineParts = t.heroHeadline.split(' ');
  const appNamePart = headlineParts[0]; // "AssiFit"
  const taglinePart = headlineParts.slice(1).join(' '); // The rest of the headline

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold font-headline mb-6 text-primary">
            <span className="text-4xl md:text-6xl block mb-2">{appNamePart}</span>
            {taglinePart && (
              <span className="text-3xl md:text-5xl block">{taglinePart}</span>
            )}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-muted-foreground">
            {t.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="https://play.google.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <GooglePlayBadge className="h-auto w-[160px] sm:w-[180px] hover:opacity-90 transition-opacity" />
              </a>
            </Link>
            <Link href="https://www.apple.com/app-store/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <AppStoreBadge className="h-auto w-[160px] sm:w-[180px] hover:opacity-90 transition-opacity" />
              </a>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <div className="relative"> {/* Container for image and orbiting icons */}
            <Image
              src="https://placehold.co/300x500.png"
              alt="AssiFit app on a phone"
              width={300}
              height={500}
              className="rounded-lg shadow-xl animate-float"
              data-ai-hint="phone app"
              priority
            />
            {/* Orbiting Icons - hidden on very small screens to prevent clutter */}
            <div
              className="absolute top-1/2 left-1/2 animate-orbit-dumbbell hidden sm:block"
              aria-hidden="true"
            >
              <Dumbbell className="w-10 h-10 text-primary opacity-70" />
            </div>
            <div
              className="absolute top-1/2 left-1/2 animate-orbit-flame hidden sm:block"
              aria-hidden="true"
            >
              <Flame className="w-8 h-8 text-accent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

