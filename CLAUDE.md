@AGENTS.md

# PROJECT RULES — READ BEFORE EVERY TASK

## MANDATORY: Read docs before doing anything

Before writing a single line of code, read:

1. `docs/architecture.md` — folder structure, data flow, multi-site, SEO, GraphQL rules
2. The doc relevant to the task:
   - UI / layout / components → `docs/design.md`
   - Code rules, agent rules, testing, accessibility, SEO, performance, definition of done → `docs/standards.md`
   - Where things are, what to reuse → `docs/README.md`

Never skip this step. Never assume you know the conventions — verify them.

## MANDATORY: Inspect existing code before writing new code

Search for existing components, utilities, and patterns before creating new ones.
Reuse what exists. Do not invent a second way to do something that already exists.

## MANDATORY: Standard procedure for every task

Every task follows this order — no exceptions:

1. Read relevant docs (above)
2. Search existing code for reusable pieces
3. Plan what to build and where it lives
4. Implement — follow `docs/design.md` and `docs/standards.md`
5. Verify build passes: `npm run build`
6. Verify lint passes: `npm run lint`
7. Report what was done and what was NOT validated

## HARD RULES — never break

- Never hardcode user-facing text — use translation keys
- Never hardcode currency symbols — use `formatCurrency()` from `src/config/currency.js`
- Never hardcode brand name, logo, or colors in reusable components
- Never use directional Tailwind utilities (`ml-`, `mr-`, `pl-`, `pr-`) in layout — use logical ones (`ms-`, `me-`, `ps-`, `pe-`)
- Never add `'use client'` unless the component genuinely needs event handlers, hooks, or browser APIs
- Never put secrets or API keys in source code
- Never declare a task done without running the build
- Never silently change files outside the task scope
- This is a JavaScript project — never introduce TypeScript (.ts / .tsx files)
- Never use inline styles (`style={{}}`) — use Tailwind classes only
- Never create external CSS files for component styling — Tailwind classes only. The only CSS file allowed is `src/app/globals.css` (for CSS variables and base resets)

## Key source locations

| What | File |
|---|---|
| Site config | `src/config/site.js` |
| Currency formatting | `src/config/currency.js` |
| Locale + RTL | `src/config/locale.js` |
| SEO metadata builder | `src/lib/seo/metadata.js` |
| Design tokens | `src/theme/tokens.js` |
| GraphQL client | `src/graphql/client.js` |
| Shared utilities | `src/lib/utils/cn.js` |
| JSON-LD builders | `src/lib/schema/` |

## Definition of done (short version)

A task is not complete until:
- `npm run build` passes
- `npm run lint` passes
- All user-facing text uses translation keys
- All prices use `formatCurrency()`
- Accessibility: labels, keyboard nav, focus states
- RTL: logical CSS properties used
- SEO metadata present on all public pages
- No console errors

Full checklist: `docs/standards.md`
