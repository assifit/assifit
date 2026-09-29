"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { ThemeAwareLogo } from '@/components/theme-aware-logo';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { PLAY_STORE_URL } from './store-button';

export default function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/#whats-new', label: t.navWhatsNew },
    { href: '/#features', label: t.navFeatures },
    { href: '/#how-it-works', label: t.navHowItWorks },
    { href: '/#testimonials', label: t.navTestimonials },
    { href: '/#faq', label: t.navFaq },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-border/40 bg-background/75 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <ThemeAwareLogo width={28} height={28} className="h-7 w-7" />
          <span className="font-headline text-2xl font-bold italic text-primary">{appName}</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-full px-4 py-2 text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggleButton />
          <Button asChild className="hidden rounded-full px-5 font-semibold sm:inline-flex">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              {t.navCta}
            </a>
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label={t.navOpenMenu}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-headline italic text-primary">{appName}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-6 w-full rounded-full font-semibold">
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  {t.navCta}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
