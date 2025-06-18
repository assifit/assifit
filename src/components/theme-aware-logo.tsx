"use client";

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeAwareLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ThemeAwareLogo({ width = 28, height = 28, className = "" }: ThemeAwareLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before mounting, use a default logo
  if (!mounted) {
    return (
      <div className={`${className} bg-muted/20 rounded-md`} style={{ width, height }} />
    );
  }

  const logoSrc = resolvedTheme === 'dark' 
    ? '/icons/ic_logo_dark.png' 
    : '/icons/ic_logo.png';

  return (
    <Image 
      src={logoSrc} 
      alt="AssiFit Logo" 
      width={width} 
      height={height} 
      className={className} 
    />
  );
}
