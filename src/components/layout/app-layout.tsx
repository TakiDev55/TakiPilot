'use client';

import { useState } from 'react';

import { AppSidebar } from '@/components/layout/app-sidebar';
import { AppHeader } from '@/components/layout/app-header';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

/**
 * AppLayout – top-level application shell.
 *
 * Composes the collapsible sidebar, topbar, and main content area.
 * Sidebar is static on desktop and a slide-in overlay on mobile.
 */
export function AppLayout({ children, pageTitle = 'Dashboard' }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-col flex-1">
        <AppHeader pageTitle={pageTitle} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 pt-16">{children}</main>
      </div>
    </div>
  );
}
