'use client';

import { Search, Bell, Menu } from 'lucide-react';

import { ThemeToggle } from '@/components/shared/theme-toggle';
import { UserMenu } from '@/components/shared/user-menu';

interface AppHeaderProps {
  pageTitle: string;
  onMenuClick: () => void;
}

/**
 * AppHeader – top navigation bar (~64px).
 *
 * Contains page title, search field, theme toggle, notification placeholder,
 * and user menu. Placeholders only; no real functionality wired.
 */
export function AppHeader({ pageTitle, onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between px-4 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors sm:hidden"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>
        <h1 className="text-sm font-semibold leading-none tracking-tight">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center">
          <div className="relative w-48">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search commands, projects…"
              className="h-9 rounded-md border border-input bg-secondary px-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              aria-label="Search"
            />
          </div>
        </div>

        <ThemeToggle />

        <button
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Notifications"
        >
          <Bell size={16} />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}
