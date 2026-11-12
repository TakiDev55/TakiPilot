'use client';

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: 'primary' | 'accent' | 'success' | 'destructive';
}

/**
 * ProgressBar – ox_lib style progress bar.
 *
 * Shows a fill that scales from 0 to 100%. Purely visual.
 */
export function ProgressBar({ value, max = 100, className, color = 'primary' }: ProgressBarProps) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    success: 'bg-green-500',
    destructive: 'bg-destructive',
  };

  return (
    <div className={cn('w-full rounded-full border border-border bg-secondary h-2', className)}>
      <div
        className={cn(
          'h-full rounded-full transition-all duration-300 ease-out',
          colorClasses[color]
        )}
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
}
