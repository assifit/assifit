import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orbit-dumbbell': { // Orbit for the dumbbell icon
          '0%': { transform: 'rotate(0deg) translateX(180px) translateY(30px) rotate(0deg) scale(0.9)', opacity: '0.7' },
          '25%': { transform: 'rotate(90deg) translateX(190px) translateY(-10px) rotate(-90deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) translateX(180px) translateY(-40px) rotate(-180deg) scale(0.9)', opacity: '0.8' },
          '75%': { transform: 'rotate(270deg) translateX(170px) translateY(0px) rotate(-270deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(360deg) translateX(180px) translateY(30px) rotate(-360deg) scale(0.9)', opacity: '0.7' },
        },
        'orbit-flame': { // Orbit for the flame icon
          '0%': { transform: 'rotate(0deg) translateX(140px) translateY(-60px) rotate(0deg) scale(0.8)', opacity: '0.6' },
          '25%': { transform: 'rotate(-90deg) translateX(150px) translateY(20px) rotate(90deg) scale(0.95)', opacity: '0.9' },
          '50%': { transform: 'rotate(-180deg) translateX(140px) translateY(50px) rotate(180deg) scale(0.85)', opacity: '0.7' },
          '75%': { transform: 'rotate(-270deg) translateX(130px) translateY(-30px) rotate(270deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(-360deg) translateX(140px) translateY(-60px) rotate(360deg) scale(0.8)', opacity: '0.6' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'orbit-dumbbell': 'orbit-dumbbell 15s linear infinite',
        'orbit-flame': 'orbit-flame 12s linear infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
