'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface NavigationItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

/**
 * NavigationItem – a single sidebar navigation link.
 *
 * Visual placeholder only. Active state derived from router pathname.
 */
export function NavigationItem({ href, label, icon }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
        isActive
          ? 'bg-accent text-accent-foreground'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
