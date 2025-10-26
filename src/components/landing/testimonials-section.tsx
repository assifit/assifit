
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t.testimonials;

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          {t.testimonialsHeadline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background text-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 border-none"
            >
              <CardContent className="pt-6 pb-6 px-6 flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary mb-3 opacity-50" />
                <blockquote className="text-base italic mb-4 flex-grow">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-semibold text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.age} {t.testimonialAgeSuffix}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
