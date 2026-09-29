"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/language-context';
import { SectionHeading } from './section-heading';

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[2fr_3fr] md:gap-16">
        <SectionHeading align="left" eyebrow={t.faqEyebrow} title={t.faqHeadline} />
        <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
          {t.faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border/50">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-primary hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
