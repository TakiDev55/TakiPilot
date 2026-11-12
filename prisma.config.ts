import { config as dotenvConfig } from 'dotenv';
import { defineConfig, env } from '@prisma/config';

dotenvConfig();

/**
 * TakiPilot Prisma configuration (Prisma 7).
 *
 * The datasource connection URL lives here instead of schema.prisma.
 * DATABASE_URL is loaded from .env (never hardcoded, never committed).
 */

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
  },
});
