'use client';

import { useTheme } from '@/hooks/use-theme';

/**
 * ThemeProvider initializes the theme system on the client.
 *
 * Renders nothing; applies the `.light` class to `<html>` when light mode is
 * active. Dark mode remains the default. Wire a `useTheme().toggleTheme`
 * call into a settings page when one is built in a future phase.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  // The class is applied in the hook's effect; this component exists so the
  // theme system is mounted once at the root of the application.
  return (
    <div data-theme={theme} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
