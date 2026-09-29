import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-headline text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}
