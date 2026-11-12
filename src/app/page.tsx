'use client';

import { PageHeader } from '@/components/shared/page-header';
import { StatCard } from '@/components/shared/stat-card';
import { EmptyState } from '@/components/shared/empty-state';
import { ProgressBar } from '@/components/shared/progress-bar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard } from 'lucide-react';

const stats = [
  { title: 'Total Projects', value: '0', change: '0%', trend: 'neutral' as const },
  { title: 'API Requests', value: '0', change: '0%', trend: 'neutral' as const },
  { title: 'Validations', value: '0', change: '0%', trend: 'neutral' as const },
  { title: 'Active Users', value: '0', change: '0%', trend: 'neutral' as const },
];

/**
 * Home – dashboard visual foundation.
 *
 * Realistic sample UI data only. No database or backend integration.
 * Navigation items are placeholders; no functionality is wired.
 *
 * The AppLayout shell is provided by the root layout; this page renders only
 * its own content to avoid duplicating the sidebar/header.
 */
export default function Home() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome back to TakiPilot. Here is an overview of your workspace."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="col-span-2 lg:col-span-2 overflow-hidden border-border">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <EmptyState
              icon={<LayoutDashboard size={32} className="text-muted-foreground" />}
              title="No recent activity"
              description="Activity will appear here as you work with TakiPilot."
            />
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-1 overflow-hidden border-border">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Quick Start</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 pb-6">
            <div className="space-y-3">
              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  System load
                </p>
                <ProgressBar value={42} color="accent" />
                <p className="text-xs text-muted-foreground text-right">42% CPU</p>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Memory
                </p>
                <ProgressBar value={68} color="primary" />
                <p className="text-xs text-muted-foreground text-right">68% RAM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
