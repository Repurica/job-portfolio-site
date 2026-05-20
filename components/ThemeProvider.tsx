'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'paper' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'paper', toggle: () => undefined });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('paper');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const next = stored === 'dark' ? 'dark' : 'paper';
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggle: () => {
        setTheme((current) => {
          const next = current === 'dark' ? 'paper' : 'dark';
          document.documentElement.dataset.theme = next;
          window.localStorage.setItem('theme', next);
          return next;
        });
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
