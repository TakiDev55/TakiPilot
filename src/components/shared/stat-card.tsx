'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

/**
 * StatCard – a single metric card for dashboard overviews.
 */
export function StatCard({ title, value, change, trend = 'neutral' }: StatCardProps) {
  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {change && (
          <span
            className={cn(
              'text-xs font-medium leading-none',
              trend === 'up'
                ? 'text-green-400'
                : trend === 'down'
                  ? 'text-red-400'
                  : 'text-muted-foreground'
            )}
          >
            {change}
          </span>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="mt-2">Updated today</CardDescription>
      </CardContent>
    </Card>
  );
}
