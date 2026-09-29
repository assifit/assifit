"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Flame, ScanLine, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { asset } from '@/lib/base-path';
import { StoreButton } from './store-button';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Background glow + texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] md:left-[70%]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-tertiary/20 blur-[110px]" />

      <div className="container relative mx-auto grid items-center gap-14 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            {t.heroBadge}
          </span>
          <h1 className="mt-6 font-headline text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            <span className="block">{t.heroTitleLead}</span>
            <span className="text-gradient block italic">{t.heroTitleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0">
            {t.heroSubheadline}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <StoreButton />
            <Link
              href="#how-it-works"
              prefetch={false}
              className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-foreground transition-colors hover:text-primary"
            >
              {t.heroSecondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-border/50 lg:mx-0">
            {t.heroStats.map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 last:pr-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-headline text-xl font-bold text-primary md:text-2xl">{stat.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden className="absolute inset-8 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
          <Image
            src={asset('/images/img_hero.webp')}
            alt="AssiFit app on a phone"
            width={640}
            height={503}
            sizes="(min-width: 1024px) 560px, 90vw"
            className="relative h-auto w-full animate-float-slow drop-shadow-2xl"
            priority
          />

          {/* Floating chips */}
          <div className="absolute left-0 top-[12%] flex items-center gap-2 rounded-2xl border border-border/50 bg-background/85 px-3 py-2 shadow-xl backdrop-blur-md sm:-left-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <ScanLine className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold">{t.heroChipReps}</span>
          </div>
          <div className="absolute bottom-[22%] left-2 flex items-center gap-2 rounded-2xl border border-border/50 bg-background/85 px-3 py-2 shadow-xl backdrop-blur-md sm:-left-6">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold">{t.heroChipForm}</span>
          </div>
          <div className="absolute bottom-[6%] right-2 flex items-center gap-2 rounded-2xl border border-border/50 bg-background/85 px-3 py-2 shadow-xl backdrop-blur-md sm:right-0">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-bold">{t.heroChipStreak}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
