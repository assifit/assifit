import { HTMLAttributes } from 'react';
import Image from 'next/image';

interface GooglePlayBadgeProps extends HTMLAttributes<HTMLDivElement> {}

export function GooglePlayBadge({ className, ...props }: GooglePlayBadgeProps) {
  return (
    <div 
      className={`flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg transition-all ${className || ''}`}
      aria-label="Get it on Google Play"
      role="button"
      {...props}
    >
      <Image src="/icons/ic_google_play.png" alt="Google Play" width={24} height={24} className="h-6 w-6" />
      <div className="flex flex-col">
        <span className="text-xs font-medium">GET IT ON</span>
        <span className="text-base font-bold">Google Play</span>
      </div>
    </div>
  );
}
