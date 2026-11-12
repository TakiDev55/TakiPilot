import type { AuthOptions } from 'next-auth';

/**
 * Auth.js (next-auth) integration placeholder.
 *
 * This file establishes the architectural boundary for future authentication.
 * No authentication flows, pages, or UI are implemented in this phase.
 *
 * To enable authentication in a future phase:
 * 1. Configure providers and callbacks below.
 * 2. Add `src/app/api/auth/[...nextauth]/route.ts` re-exporting
 *    NextAuth(authOptions) GET/POST handlers (next-auth v4 default export).
 * 3. Add sign-in/sign-out entry points via `auth.signIn()` / `auth.signOut()`.
 */

export const authOptions = {
  // Providers will be registered here in a future phase.
  providers: [],
  // Example:
  // providers: [
  //   GitHubProvider({
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   }),
  // ],
  //
  // callbacks: {
  //   session({ session, token }) {
  //     return session
  //   },
  // },
  //
  // session: {
  //   strategy: "jwt",
  // },
} satisfies AuthOptions;
