'use client';

import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ContextMenuProps {
  children: React.ReactNode;
  items: React.ReactNode;
}

/**
 * ContextMenu – ox_lib style right-click context menu.
 *
 * Items are passed as DropdownMenuItem components. No real functionality
 * is wired; this is a visual foundation component.
 */
export function ContextMenu({ children, items }: ContextMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span>{children}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items}
        <DropdownMenuSeparator />
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuItem>Inspect element</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
