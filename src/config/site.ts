/**
 * TakiPilot site metadata configuration.
 *
 * Central place for application identity used by layouts, metadata, and
 * future SEO/social sharing configuration.
 */

export const site = {
  name: 'TakiPilot',
  shortName: 'TakiPilot',
  description: 'Developer-focused SaaS platform',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
} as const;

export const metadata = {
  title: {
    default: `${site.name}`,
    template: '%s · TakiPilot',
  },
  description: site.description,
  publisher: site.name,
  robots: {
    index: false,
    follow: false,
  },
} as const;
