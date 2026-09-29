"use client";

import { Award, Gauge, Mic, ShieldCheck, Smile, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionHeading } from './section-heading';

// Order matches t.whatsNewHighlights
const highlightIcons: LucideIcon[] = [Smile, Target, Gauge, Mic, Award, ShieldCheck];

export default function WhatsNewSection() {
  const { t } = useLanguage();

  return (
    <section id="whats-new" className="relative py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-80 max-w-4xl -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="flex justify-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-brand-gradient px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-primary/20">
            {t.whatsNewVersionLabel}
          </span>
        </div>
        <SectionHeading eyebrow={t.whatsNewEyebrow} title={t.whatsNewHeadline} subtitle={t.whatsNewSubheadline} />

        <ul className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whatsNewHighlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? Target;
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-headline text-lg font-bold">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
