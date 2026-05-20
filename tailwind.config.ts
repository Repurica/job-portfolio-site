import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent-2) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        editorial: '0 18px 80px rgb(9 9 11 / 0.16)',
        paper: '0 1px 0 rgb(0 0 0 / .08), 0 18px 60px rgb(0 0 0 / .10)',
      },
      backgroundImage: {
        gridpaper: 'linear-gradient(rgb(var(--line) / .36) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / .36) 1px, transparent 1px)',
        scanlines: 'repeating-linear-gradient(0deg, rgb(var(--ink) / .06) 0 1px, transparent 1px 4px)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        paperShift: { '0%': { backgroundPosition: '0 0, 0 0' }, '100%': { backgroundPosition: '42px 84px, 84px 42px' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        paperShift: 'paperShift 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
