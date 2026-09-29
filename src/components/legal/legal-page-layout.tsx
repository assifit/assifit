"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import SiteHeader from '@/components/landing/site-header';
import SiteFooter from '@/components/landing/site-footer';
import { useLanguage } from '@/contexts/language-context';

// Date the legal copy was last revised. Bump this whenever the policy text changes.
export const LEGAL_LAST_UPDATED = new Date(2026, 8, 29);

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  /** Localised "Last updated: {date}" template; omit to hide the line. */
  lastUpdatedTemplate?: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

export function LegalPageLayout({ title, lastUpdatedTemplate, intro, sections }: LegalPageLayoutProps) {
  const { t, language } = useLanguage();
  const formattedDate = LEGAL_LAST_UPDATED.toLocaleDateString(language === 'en' ? 'en-US' : 'vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-grow">
        {/* Title band */}
        <section className="relative overflow-hidden border-b border-border/40 pb-12 pt-28 md:pb-16 md:pt-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
          <div className="container relative mx-auto max-w-6xl px-6">
            <Link
              href="/"
              prefetch={false}
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t.legalBackHome}
            </Link>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">{t.legalEyebrow}</p>
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            {lastUpdatedTemplate && (
              <p className="mt-4 text-sm text-muted-foreground">{lastUpdatedTemplate.replace('{date}', formattedDate)}</p>
            )}
          </div>
        </section>

        <div className="container mx-auto grid max-w-6xl gap-10 px-6 py-12 md:py-16 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.legalOnThisPage}</p>
              <ul className="space-y-1 border-l border-border/50">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
            {intro && <div className="mb-10 text-lg text-muted-foreground md:text-xl">{intro}</div>}
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="mb-4 font-headline text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                  <div className="space-y-4 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li::marker]:text-primary">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

/**
 * Replaces a `{token}` inside translated text with a React node (e.g. a link),
 * so the surrounding sentence stays fully translatable.
 */
export function interpolate(text: string, token: string, node: ReactNode): ReactNode {
  const [before, after] = text.split(`{${token}}`);
  if (after === undefined) return text;
  return (
    <>
      {before}
      {node}
      {after}
    </>
  );
}

const EMAIL_PATTERN = /([\w.+-]+@[\w-]+\.[\w.]+[a-z])/i;

/** Turns any email address in translated text into a mailto link. */
export function linkifyEmails(text: string): ReactNode {
  return text.split(EMAIL_PATTERN).map((part, index) =>
    index % 2 === 1 ? (
      <a key={index} href={`mailto:${part}`} className="font-semibold text-primary hover:underline">
        {part}
      </a>
    ) : (
      part
    )
  );
}
