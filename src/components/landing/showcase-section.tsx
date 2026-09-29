"use client";

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { asset } from '@/lib/base-path';
import { SectionHeading } from './section-heading';

export default function ShowcaseSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted/40 px-6 py-12 md:grid-cols-2 md:px-14 md:py-16">
          <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative order-2 md:order-1">
            <SectionHeading
              align="left"
              eyebrow={t.showcaseEyebrow}
              title={t.showcaseHeadline}
              subtitle={t.showcaseDescription}
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.showcasePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 flex justify-center md:order-2">
            <Image
              src={asset('/images/img_feature.webp')}
              alt="AssiFit squat workout screen"
              width={420}
              height={572}
              sizes="(min-width: 768px) 420px, 80vw"
              className="relative h-auto w-full max-w-xs drop-shadow-2xl md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
