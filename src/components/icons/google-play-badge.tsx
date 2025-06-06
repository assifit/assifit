import type { SVGProps } from 'react';

export function GooglePlayBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="180" 
      height="60" 
      viewBox="0 0 180 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Get it on Google Play"
      role="img"
      {...props}
    >
      <rect width="180" height="60" rx="8" fill="#212121"/>
      <path d="M34.8522 20.828L44.4273 25.7381L50.4739 29.9998L44.4273 34.2616L34.8522 39.1717L34.8522 20.828Z" fill="url(#paint0_linear_badge_google)"/>
      <path d="M34.8523 20.8281L22.0001 14L34.8523 29.9999L34.8523 20.8281Z" fill="url(#paint1_linear_badge_google)"/>
      <path d="M50.4739 30L58 34.0113L53.693 36.4665L50.4739 30Z" fill="url(#paint2_linear_badge_google)"/>
      <path d="M34.8523 40.0889L22 46L34.8523 29.9999L34.8523 40.0889Z" fill="url(#paint3_linear_badge_google)"/>
      <path d="M50.4739 29.9998L53.693 23.5332L58 25.9884L50.4739 29.9998Z" fill="url(#paint4_linear_badge_google)"/>
      <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="0em">
        <tspan x="70" y="26.5">GET IT ON</tspan>
      </text>
      <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Arial,sans-serif" fontSize="18" fontWeight="bold" letterSpacing="0em">
        <tspan x="70" y="45.5">Google Play</tspan>
      </text>
      <defs>
        <linearGradient id="paint0_linear_badge_google" x1="34.8522" y1="29.9998" x2="50.4739" y2="29.9998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF"/>
          <stop offset="1" stopColor="#00E7FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_badge_google" x1="22" y1="22" x2="34.8523" y2="29.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC900"/>
          <stop offset="1" stopColor="#FFEA00"/>
        </linearGradient>
        <linearGradient id="paint2_linear_badge_google" x1="58" y1="30.0056" x2="50.4739" y2="29.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DE0000"/>
          <stop offset="1" stopColor="#FF3D00"/>
        </linearGradient>
        <linearGradient id="paint3_linear_badge_google" x1="22" y1="38" x2="34.8523" y2="29.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D308"/>
          <stop offset="1" stopColor="#00A965"/>
        </linearGradient>
        <linearGradient id="paint4_linear_badge_google" x1="58" y1="29.9941" x2="50.4739" y2="29.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3D00"/>
          <stop offset="1" stopColor="#FF7000"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
