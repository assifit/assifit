"use client";

import { BarChart3, Bell, Flame, Mic, ScanLine, Share2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import { SectionHeading } from './section-heading';

// Order matches t.features
const featureIcons: LucideIcon[] = [ScanLine, Mic, Flame, BarChart3, Bell, Share2];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow={t.featuresEyebrow} title={t.featuresHeadline} subtitle={t.featuresSubheadline} />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? ScanLine;
            const highlighted = index === 0;
            // Last card spans the full row on desktop so the bento grid has no gaps
            const wide = index === t.features.length - 1;
            return (
              <article
                key={feature.title}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                  highlighted
                    ? 'border-transparent bg-brand-gradient text-white shadow-lg shadow-primary/20 sm:col-span-2 lg:col-span-1 lg:row-span-2'
                    : 'border-border/50 bg-card hover:border-primary/40 hover:shadow-primary/10',
                  wide && 'sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-6'
                )}
              >
                <div
                  className={cn(
                    'mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl',
                    highlighted ? 'bg-white/15' : 'bg-primary/10 text-primary',
                    wide && 'lg:mb-0'
                  )}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className={cn('font-headline font-bold', highlighted ? 'text-2xl' : 'text-lg')}>{feature.title}</h3>
                  <p className={cn('mt-2 leading-relaxed', highlighted ? 'text-white/85 lg:text-lg' : 'text-muted-foreground')}>
                    {feature.description}
                  </p>
                </div>
                {highlighted && (
                  <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[24px] border-white/10" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
