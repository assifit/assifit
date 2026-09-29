"use client";

import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { SectionHeading } from './section-heading';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow={t.testimonialsEyebrow} title={t.testimonialsHeadline} />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-400" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/30" />
              </div>
              <blockquote className="mt-5 flex-grow text-lg font-medium leading-snug">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-bold text-white">
                  {testimonial.author.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{testimonial.author}</span>
                  <span className="block text-sm text-muted-foreground">
                    {testimonial.age} {t.testimonialAgeSuffix}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
