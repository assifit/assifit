"use client";

import { Dumbbell, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionHeading } from './section-heading';

const stepIcons = [Dumbbell, Smartphone, TrendingUp];

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow={t.howItWorksEyebrow} title={t.howItWorksHeadline} subtitle={t.howItWorksSubheadline} />

        <ol className="relative mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
          {/* Connector line (desktop) */}
          <div aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 md:block" />

          {t.howItWorksSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? Dumbbell;
            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-primary/30">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-foreground text-xs font-bold text-background">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
