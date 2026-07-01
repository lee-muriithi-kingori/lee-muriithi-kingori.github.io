/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0E0C',
          2: '#2A2823',
          3: '#45433D',
        },
        ivory: {
          DEFAULT: '#F2EDE2',
          2: '#ECE5D6',
          3: '#E0D8C4',
        },
        muted: '#7A7468',
        rule: '#D7CFBE',
        accent: {
          DEFAULT: '#C5302B',
          2: '#8B1A18',
          3: '#E06B66',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.04em',
      },
      animation: {
        'pulse-slow': 'pulse 2.4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'fade-in': 'fadeIn .9s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};