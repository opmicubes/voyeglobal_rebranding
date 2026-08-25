# Platform Documentation

Read this before touching anything.

## What this is

A reusable, white-label Next.js e-commerce platform — one codebase, multiple brands/sites.

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · WordPress + WPGraphQL/WooGraphQL · React 19 + React Compiler

## Before starting any task

1. Read `docs/architecture.md` — understand the structure and rules
2. Read `docs/design.md` — if touching UI
3. Read `docs/standards.md` — coding rules, agent rules, definition of done
4. Inspect existing code before writing new code
5. Reuse existing utilities from `src/config/`, `src/theme/`, `src/lib/`

## Key source locations

| What | Where |
|---|---|
| Site config (name, locales, currencies, features) | `src/config/site.ts` |
| SEO defaults | `src/config/seo.ts` |
| Locale metadata + RTL detection | `src/config/locale.ts` |
| Currency formatting | `src/config/currency.ts` |
| Feature flags | `src/config/features.ts` |
| Design tokens | `src/theme/tokens.ts` |
| Branding (logo, colors) | `src/theme/branding.ts` |
| SEO metadata builder | `src/lib/seo/metadata.ts` |
| JSON-LD builders | `src/lib/schema/` |
| GraphQL client | `src/graphql/client.ts` |
| Shared types | `src/types/index.ts` |
