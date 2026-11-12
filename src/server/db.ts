import { PrismaClient } from '@prisma/client';

/**
 * Reusable Prisma database client.
 *
 * A single client instance is reused across hot-module reloads in development
 * to avoid exhausting the database connection pool.
 *
 * Database setup:
 * 1. Create a PostgreSQL database.
 * 2. Copy .env.example to .env and set DATABASE_URL.
 * 3. Run `npm run db:generate` to generate the Prisma Client.
 * 4. Run `npm run db:push` to push the schema to the database.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

export default db;
