
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import type { TestimonialContent } from '@/lib/translations';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials: TestimonialContent[] = t.testimonials;

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          {t.testimonialsHeadline}
        </h2>
        <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary-darker">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[300px] md:min-w-[350px] bg-background text-foreground shadow-xl flex-shrink-0"
            >
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-right font-semibold">
                  – {testimonial.author}, {testimonial.age} {t.testimonialAgeSuffix}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--accent)) hsl(var(--primary) / 0.8); /* thumb track */
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: hsl(var(--primary) / 0.8);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: hsl(var(--accent));
          border-radius: 10px;
          border: 2px solid hsl(var(--primary) / 0.8);
        }
      `}</style>
    </section>
  );
}
