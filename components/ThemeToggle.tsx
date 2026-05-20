'use client';

import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="focus-ring rounded-full border border-line/70 px-3 py-2 text-xs font-bold uppercase tracking-[.24em] text-ink transition hover:border-accent hover:text-accent"
      aria-label="Toggle dark and paper theme"
    >
      {theme === 'dark' ? 'Paper' : 'Ink'}
    </button>
  );
}
