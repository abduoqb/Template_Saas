import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#5a67d8',
          violet: '#9f7aea',
        },
        text: {
          primary: '#1a1a2e',
          secondary: 'rgba(26, 26, 46, 0.7)',
          tertiary: 'rgba(26, 26, 46, 0.6)',
          muted: 'rgba(26, 26, 46, 0.5)',
        },
        grid: {
          light: 'rgba(0, 0, 0, 0.03)',
          strong: 'rgba(0, 0, 0, 0.06)',
        },
        bg: {
          primary: '#ffffff',
          secondary: '#fafafa',
        },
      },
      borderRadius: {
        button: '12px',
        card: '16px',
        'card-md': '20px',
        'card-lg': '24px',
      },
      boxShadow: {
        soft: '0 10px 28px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 18px 40px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 24px 50px rgba(0, 0, 0, 0.10)',
        glow: '0 0 40px rgba(90, 103, 216, 0.15)',
        'glow-strong': '0 0 60px rgba(90, 103, 216, 0.25)',
      },
      backdropBlur: {
        glass: '8px',
        'glass-lg': '12px',
      },
      transitionDuration: {
        micro: '280ms',
        smooth: '320ms',
        slower: '400ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      letterSpacing: {
        tighter: '-0.5px',
        tight: '-0.3px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'gradient-slow': 'gradient 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
