"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { StoreButton } from './store-button';

export default function DownloadSection() {
  const { t } = useLanguage();

  return (
    <section id="download" className="pb-20 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white shadow-2xl shadow-primary/30 md:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">
              <Image src="/icons/ic_logo.png" alt="" width={40} height={40} className="h-10 w-10" />
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-headline text-3xl font-bold leading-tight md:text-5xl">
              {t.downloadHeadline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{t.downloadSubheadline}</p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <StoreButton className="bg-white text-neutral-900" />
              <span className="text-sm text-white/75">{t.downloadNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
