'use client';

import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UserMenuProps {
  className?: string;
}

/**
 * UserMenu – placeholder user avatar dropdown.
 *
 * Authentication is not implemented; menu items are visual only.
 */
export function UserMenu({ className }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground hover:bg-secondary/80 transition-colors',
            className
          )}
          aria-label="User account"
        >
          <User className="h-4 w-4" />
          <span>Profile</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Account settings</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
