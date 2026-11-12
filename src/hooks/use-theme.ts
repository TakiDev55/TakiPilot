'use client';

import * as React from 'react';

export type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'takipilot-theme';

/**
 * Theme hook – infrastructure for dark/light mode switching.
 *
 * Dark mode is the application default. The active theme is persisted in
 * localStorage and reflected by the `.light` class on the document element.
 * The initial state is always 'dark' on both server and client to prevent
 * hydration mismatches; the stored preference is applied after mount.
 */
export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>('dark');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }, [theme]);

  return { theme, toggleTheme };
}
