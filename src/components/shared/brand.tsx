'use client';

import { cn } from '@/lib/utils';

/**
 * TakiPilot brand components.
 *
 * Text-based brand treatment — no generated illustrations or decorative assets.
 */

export function BrandName({ className }: { className?: string }) {
  return <span className={cn('font-bold tracking-tight', className)}>TakiPilot</span>;
}

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow-[0_0_12px_rgba(59,130,246,0.4)]',
        className
      )}
    >
      TP
    </div>
  );
}

export function BrandLink({
  className,
  ...props
}: {
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn('flex items-center gap-2 font-bold tracking-tight text-foreground', className)}
      {...props}
    >
      <Logo />
      <BrandName />
    </a>
  );
}
