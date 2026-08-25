# VoyeGlobal Next.js E-Commerce Platform

A production-grade, reusable, white-label Next.js e-commerce platform.

> **New developers and AI agents: read [`docs/README.md`](./docs/README.md) before starting.**

## What this is

This platform powers multiple e-commerce sites from a single codebase. Think of it as a "parent theme" concept — site-specific branding, locale, and currency are configured per deployment, while the core platform is shared.

## Architecture philosophy

- **Documentation first**: every decision is documented in `docs/` before implementation
- **Reusability**: built for multiple brands and sites from day one
- **Server Components**: default to server-side rendering, use client components only when required
- **No hardcoding**: no brand, text, currency, or locale assumptions in core components
- **Accessibility**: WCAG 2.2 AA — not optional
- **RTL**: first-class, not an afterthought

## Technology stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS v4 |
| Backend | WordPress + WooCommerce |
| API | WPGraphQL + WooGraphQL |
| React | React 19 + React Compiler |

## Getting started

```bash
# Install dependencies
npm install

# Copy environment config
cp .env.example .env.local
# Edit .env.local with your values

# Run dev server
npm run dev
```

## Documentation

Read [`docs/README.md`](./docs/README.md) for the full documentation index.

Key docs:
- [`docs/architecture.md`](./docs/architecture.md) — system architecture
- [`docs/design.md`](./docs/design.md) — design system
- [`docs/coding-standards.md`](./docs/coding-standards.md) — code rules
- [`docs/agents.md`](./docs/agents.md) — AI agent rules
- [`docs/workflow.md`](./docs/workflow.md) — development workflow
- [`docs/definition-of-done.md`](./docs/definition-of-done.md) — completion checklist

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Multi-site support

This platform supports multiple sites via environment-based configuration. See [`docs/multi-site.md`](./docs/multi-site.md) and [`docs/white-labeling.md`](./docs/white-labeling.md).

## Status

Foundation phase complete. E-commerce features not yet implemented. See `docs/` for the roadmap.
