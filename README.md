# TakiPilot

Developer-focused SaaS platform — technical foundation.

This repository contains the **foundation only** for TakiPilot. No SaaS
features, business logic, dashboard pages, AI assistant, subscription system,
or payment integration are implemented here. These will be added in future
development phases.

## Technology stack

- [Next.js 16](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Lucide React](https://lucide.dev/)
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- [Auth.js / next-auth](https://authjs.dev/) — integration prepared, not implemented
- [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)

## Folder architecture

```
src/
  app/              Next.js App Router (layout, pages, globals.css)
  components/
    ui/             shadcn/ui primitives
    layout/         shell components (theme provider)
    shared/         brand components (logo, brand name)
  config/           site metadata and navigation
  lib/              utils, constants, shared zod validations
  hooks/            React hooks (theme)
  types/            shared TypeScript types
  services/         service layer (future)
  server/           database client and auth placeholders
prisma/
  schema.prisma     Prisma schema (PostgreSQL)
public/
  images/           image assets
  icons/            icon assets
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

```bash
cp .env.example .env
```

Fill in `DATABASE_URL` with your PostgreSQL connection string. Auth.js and
site variables are placeholders for future phases.

`.env` is gitignored — never commit it.

### 3. Database setup

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to PostgreSQL
npm run db:push

# Open Prisma Studio (optional)
npm run db:studio
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start dev server (Turbopack)   |
| `npm run build`        | Production build               |
| `npm run start`        | Start production server        |
| `npm run lint`         | Run ESLint                     |
| `npm run type-check`   | Type-check with tsc --noEmit   |
| `npm run format`       | Format files with Prettier     |
| `npm run format:check` | Check formatting with Prettier |
| `npm run db:generate`  | Generate Prisma Client         |
| `npm run db:push`      | Push Prisma schema to database |
| `npm run db:studio`    | Open Prisma Studio             |

## Design system

Dark mode is the default; light mode can be opted into via the `.light` class
on the document element. Theme state is persisted in `localStorage` and can be
toggled with `useTheme().toggleTheme()` from `src/hooks/use-theme.ts` (wire
this into a settings page in a future phase).

Design tokens live in `src/app/globals.css` as CSS HSL variables and are
exposed to Tailwind through `@theme inline`.

Brand components live in `src/components/shared/brand.tsx` (`BrandName`,
`Logo`, `BrandLink`). The brand name is always written as **TakiPilot**.

## Authentication

Authentication is intentionally not implemented. `src/server/auth.ts` holds
the `next-auth` configuration placeholder. To enable authentication:

1. Configure providers/callbacks in `src/server/auth.ts`.
2. Create `src/app/api/auth/[...nextauth]/route.ts` re-exporting
   `NextAuth(authOptions)` handlers.
3. Add sign-in/sign-out entry points using `auth.signIn()` / `auth.signOut()`.

## Security

- No credentials are hardcoded; all secrets come from environment variables.
- `.env` and `.env.*` are ignored by git.
- Server-only code lives under `src/server/`.
- Environment variables should be validated before use in production.

## License

Private — TakiPilot.
