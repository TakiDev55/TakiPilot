'use client';

import { useTheme } from '@/hooks/use-theme';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

/**
 * ThemeToggle – switches between dark (default) and light mode.
 *
 * Theme is persisted in localStorage. Dark mode is the application default.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors',
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" aria-label="Switch to light mode" />
      ) : (
        <Moon className="h-4 w-4" aria-label="Switch to dark mode" />
      )}
    </button>
  );
}
