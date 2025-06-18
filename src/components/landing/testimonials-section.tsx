
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import type { TestimonialContent } from '@/lib/translations';
import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials: TestimonialContent[] = t.testimonials;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate testimonials to create a seamless loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    // Don't animate if hovering
    if (isHovering || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let startTime: number | null = null;
    const duration = 30000; // 30 seconds for one complete scroll cycle

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate scroll position based on elapsed time
      const progress = (elapsed % duration) / duration;
      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const position = scrollWidth * progress;

      scrollContainer.scrollLeft = position;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">
          {t.testimonialsHeadline}
        </h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 no-scrollbar"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ scrollBehavior: 'smooth' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background text-foreground shadow-xl min-w-[300px] md:min-w-[400px] flex-shrink-0"
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
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
