import Image from 'next/image';
import { cn } from '@/lib/utils';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=vn.assifit';

interface StoreButtonProps {
  className?: string;
}

export function StoreButton({ className }: StoreButtonProps) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={cn(
        'group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      <Image src="/icons/ic_google_play.png" alt="" width={28} height={28} className="h-7 w-7" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[11px] font-medium uppercase tracking-wide opacity-80">Get it on</span>
        <span className="text-lg font-bold">Google Play</span>
      </span>
    </a>
  );
}
