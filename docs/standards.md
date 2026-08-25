# Standards

## Coding rules

- **Named exports** everywhere except Next.js page/layout files
- **`@/` imports** for all absolute paths — no deep relative paths
- **`async/await`** — no raw promise chains
- **No magic values** — use config, tokens, and constants
- **No comments** that explain what the code does — only WHY when non-obvious
- **No new packages** without checking: native solution? bundle size? maintenance status?
- **Tailwind only** — no inline styles (`style={{}}`), no external `.css` files for components. Only `src/app/globals.css` is allowed (CSS variables and base resets)

## Server vs Client Components

Default: Server Component.
Add `'use client'` only when the component genuinely needs:
event handlers · React hooks · browser APIs · client-only libraries

## AI agent rules

Before starting any task, an agent MUST:
1. Read `docs/README.md` and `docs/architecture.md`
2. Read the relevant doc for the task area
3. Search for existing code to reuse before writing new code

Hard rules — never break:
- Never hardcode user-facing text (use translation keys)
- Never hardcode currency symbols (use `formatCurrency()`)
- Never hardcode brand name, logo, or colors in core components
- Never use directional CSS utilities (`ml-`, `mr-`, `pl-`, `pr-`) in layout components
- Never add `'use client'` to a component that doesn't need it
- Never declare work done without testing it
- Never silently change files outside the task scope
- Update `docs/architecture.md` if a new architectural pattern is introduced

## Accessibility (required, not optional)

- Semantic HTML before ARIA
- All inputs have `<label>` (or `aria-label`)
- All images have meaningful `alt` (or `alt=""` for decorative)
- All interactive elements keyboard reachable with visible focus
- Color alone never conveys information
- Text contrast: 4.5:1 normal, 3:1 large text
- On modal open: trap focus, move focus in; on close: return focus to trigger
- `aria-live` for dynamic announcements (cart updates, form errors)

## SEO (required for every public page)

- `generateMetadata()` using `buildMetadata()` on every public page
- Canonical URL set
- `noIndex: true` on cart, checkout, account, search result pages
- Structured data validated before shipping (Google Rich Results Test)

## Performance

- `next/image` for all images — always provide `width`/`height` to prevent CLS
- `next/link` for all internal links
- `next/font` for all fonts
- No large synchronous imports in the critical render path
- ISR revalidate: products 60s, categories 300s, cart/checkout `no-store`

## Definition of done

A task is not done until:
- [ ] `npm run build` passes (zero errors)
- [ ] `npm run lint` passes
- [ ] All user-facing text uses translation keys
- [ ] All prices rendered via `formatCurrency()`
- [ ] RTL layout correct (logical CSS used)
- [ ] Accessibility: keyboard nav, labels, focus, contrast
- [ ] SEO: metadata, canonical, structured data (for pages)
- [ ] `next/image` used with dimensions
- [ ] No console errors on affected pages
- [ ] Docs updated if a new pattern was introduced
- [ ] No inline styles used — Tailwind classes only
