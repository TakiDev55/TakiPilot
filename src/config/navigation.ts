/**
 * TakiPilot navigation configuration.
 *
 * Foundation-level navigation only. Application navigation will be expanded
 * when dashboard and product features are implemented in future phases.
 */

export type NavItem = {
  href: string;
  label: string;
};

export const mainNavigation: NavItem[] = [{ href: '/', label: 'Home' }];

export const userNavigation: NavItem[] = [];
