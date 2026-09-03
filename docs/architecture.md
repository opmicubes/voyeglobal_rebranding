# Architecture

## Principles

- **Server Components by default** — `'use client'` only when needed (event handlers, hooks, browser APIs)
- **No hardcoding** — no brand names, colors, text, currencies in core components
- **Config drives everything** — locale, currency, features come from `src/config/`
- **Docs before code** — if a new pattern is needed, document it here first

## Folder structure

```
src/
├── app/              # Next.js App Router — pages and layouts only
├── components/       # Reusable UI components (create when first needed)
│   ├── ui/           # Primitive UI: Button, Input, Modal, etc.
│   ├── layout/       # Header, Footer, Navigation
│   └── product/      # ProductCard, ProductGrid, etc.
├── features/         # Feature business logic (create when first needed)
├── graphql/
│   ├── client.js     # Single GraphQL fetch point — all queries go through here
│   ├── queries/      # .graphql query files
│   ├── mutations/    # .graphql mutation files
│   └── fragments/    # .graphql fragments
├── theme/            # Design tokens + branding
├── config/           # Site, SEO, locale, currency, features
├── lib/
│   ├── seo/          # buildMetadata()
│   ├── schema/       # JSON-LD builders
│   └── utils/        # cn() and other pure utilities
└── types/            # Shared type documentation (JSDoc)
```

Do not create directories until there is real code to put in them.

## Data flow

```
WordPress / WooCommerce
       ↓
WPGraphQL / WooGraphQL
       ↓
src/graphql/client.js  ← only fetch point
       ↓
src/graphql/queries/
       ↓
src/features/          ← domain logic, data transformation
       ↓
src/components/        ← UI (never sees raw GraphQL shapes)
```

## Multi-site / sub-sites (multi-tenant by host)

The same codebase powers multiple brands, resolved **per request from the
Host header** (e.g. `voy.com`, `asser.voy.com`). No env swap, no rebuild —
one deployment serves every site.

### Data flow

```
request → src/proxy.js            # reads Host, resolves slug, sets x-site-id header
        → getCurrentSite()        # src/lib/site/context.js — reads header in any Server Component
        → src/app/layout.jsx      # injects per-site theme (CSS vars) + lang/dir + metadata
        → components              # brand-agnostic; pick up brand via CSS vars + props
```

### Where things live

| Concern | Location |
|---|---|
| Host → slug resolution | `src/lib/site/resolver.js` + `src/sites/registry.js` |
| Proxy that sets the header | `src/proxy.js` (Next 16 renamed `middleware` → `proxy`) |
| Server-side site accessor | `src/lib/site/context.js` → `getCurrentSite()` |
| Per-brand config / theme / content | `src/sites/<slug>/{config,theme,content}.js` |
| Per-brand API endpoint | `src/sites/<slug>/config.js` → `api.graphqlEndpoint` |
| Shared components, data, checkout | `src/components`, `src/lib/gql`, `src/features` |

### Per-site data source

Each site can point at its own WordPress/WooGraphQL backend via
`config.api.graphqlEndpoint` (overridable per env, e.g. `ASSER_GRAPHQL_ENDPOINT`).
`gqlServer()` resolves the current site's endpoint automatically — query
functions and pages need no changes. Precedence:
`opts.endpoint` → site's `api.graphqlEndpoint` → global default.

**Per-brand code is confined to `src/sites/`.** Everything else stays shared.
A "brand" is `config` (name, url, locales, currency, features, SEO) + `theme`
(CSS-variable overrides only) + `content` (composition + editorial text).

Themes are applied by injecting a `:root { --color-brand: … }` override
`<style>` in the root layout — components reference `var(--color-brand)` and
never change per site.

### Adding a site

1. Create `src/sites/<slug>/{config,theme,content,index}.js`.
2. List its hostnames in that site's `config.hosts`.
3. Register it in `src/sites/registry.js`.

### Local dev

Subdomains resolve via `*.localhost` (e.g. `http://asser.localhost:3000`) — no
hosts-file edit needed in Chrome. The bare `localhost` maps to the default site.

If genuinely independent apps are needed later, evolve to a monorepo with
`apps/` and `packages/`. Don't do it before there's a real reason.

## i18n and RTL

- Locale routing: `src/app/[locale]/` segment
- Locale config (direction, date/number format): `src/config/locale.js`
- RTL: set `dir` on `<html>` from `isRTL(locale)`
- All layout components must use CSS logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) — never `left`/`right` utilities

## Currency

All prices use the `Money` type `{ amount: number, currencyCode: string }`.
Always render via `formatCurrency(money, locale)` from `src/config/currency.js`.
Never hardcode `₹`, `$`, or any symbol.

## SEO

- Every public page exports `generateMetadata()` using `buildMetadata()` from `src/lib/seo/metadata.js`
- SEO title/description come from Yoast SEO (WordPress); canonical and structured data are managed by Next.js
- Structured data (JSON-LD) built in `src/lib/schema/`, injected as `<script type="application/ld+json">`
- `robots.txt` and `sitemap.xml` via `src/app/robots.js` and `src/app/sitemap.js`

## Environment variables

- Server-only secrets: no prefix (`WORDPRESS_API_URL`, `WORDPRESS_AUTH_REFRESH_TOKEN`)
- Client-safe values: `NEXT_PUBLIC_*` only
- Never read `process.env` directly in components — read in config files and use the typed config objects

## GraphQL

`src/graphql/client.js` is the only place raw `fetch` calls are made to the GraphQL endpoint.
Raw GraphQL response types never reach UI components — transform to domain types in `src/features/`.
