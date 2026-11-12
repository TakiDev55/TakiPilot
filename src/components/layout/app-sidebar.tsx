'use client';

import { useEffect, useState } from 'react';

import { BrandName, Logo } from '@/components/shared/brand';
import { NavigationItem } from '@/components/shared/navigation-item';
import { cn } from '@/lib/utils';
import {
  ChevronLeft,
  CheckCircle,
  Folder,
  LayoutDashboard,
  Menu,
  Settings,
  Terminal,
  BookOpen,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Overview', icon: <LayoutDashboard size={16} /> },
  { href: '/projects', label: 'Projects', icon: <Folder size={16} /> },
  { href: '/api-workspace', label: 'API Workspace', icon: <Terminal size={16} /> },
  { href: '/documentation', label: 'Documentation', icon: <BookOpen size={16} /> },
  { href: '/validator', label: 'Validator', icon: <CheckCircle size={16} /> },
  { href: '/settings', label: 'Settings', icon: <Settings size={16} /> },
];

interface AppSidebarProps {
  open: boolean;
  onToggle: () => void;
}

/**
 * AppSidebar – left-hand navigation shell.
 *
 * Desktop: static flex child (~250px), collapsible to icon rail (~64px).
 * Mobile: fixed overlay that slides in from the left.
 */
export function AppSidebar({ open, onToggle }: AppSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <aside
      className={cn(
        'z-40 h-full border-r border-border bg-sidebar text-foreground transition-all duration-300 flex-shrink-0',
        isMobile
          ? `fixed left-0 top-0 w-64 ${open ? 'translate-x-0' : '-translate-x-full'}`
          : collapsed
            ? 'w-16'
            : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-border bg-sidebar/80 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          {!collapsed && <BrandName className="text-lg font-bold tracking-tight" />}
        </div>

        {!isMobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft
              size={16}
              className={cn('transition-transform', collapsed ? 'rotate-180' : '')}
            />
          </button>
        )}

        {isMobile && (
          <button
            onClick={onToggle}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Open navigation"
          >
            <Menu size={18} />
          </button>
        )}
      </div>

      <nav className="flex h-full flex-col py-6 space-y-1 px-2">
        {navItems.map((item) => (
          <NavigationItem key={item.href} {...item} />
        ))}
      </nav>

      {!isMobile && (
        <div className="mt-auto px-4 pb-8">
          <button className="w-full flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <Settings size={16} />
            {!collapsed && <span>Settings</span>}
          </button>
        </div>
      )}
    </aside>
  );
}
