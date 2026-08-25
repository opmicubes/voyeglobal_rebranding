# Design System

## Rule

All visual values come from `src/theme/tokens.ts` → CSS custom properties in `globals.css`.

**Never use arbitrary values when a token exists.**

BAD:  `className="text-[#343434] mt-[17px]"`
GOOD: Use the defined token classes.

## Colors

- Brand colors: `--color-primary-*` CSS variables (change per site, never hardcoded)
- Neutral: `neutral-50` through `neutral-950`
- Semantic: `success-*`, `warning-*`, `error-*`, `info-*`

## Spacing and typography

Follow the scale in `src/theme/tokens.ts`. Do not use arbitrary pixel values.

## Z-index

| Layer | Value |
|---|---|
| dropdown | 100 |
| sticky header | 200 |
| overlay | 300 |
| modal | 400 |
| toast | 500 |

Never use arbitrary z-index values like `z-[999]`.

## RTL

Use Tailwind logical utilities — never directional ones in layout code:
- `ms-*` not `ml-*`, `me-*` not `mr-*`
- `ps-*` not `pl-*`, `pe-*` not `pr-*`
- `start-*` not `left-*`, `end-*` not `right-*`

## Focus states

Never remove the focus outline without a visible replacement.
Standard: `focus-visible:ring-2 focus-visible:ring-primary-500`

## Component states

Every interactive component needs these states designed before building:
default · hover · focus · active · disabled · loading · error · empty

## Tailwind rules

- Mobile-first: base = mobile, add `sm:` `md:` `lg:` for larger screens
- No CSS-in-JS, no styled-components, no Bootstrap, no arbitrary `[]` values unless documented
- Where a CSS variable is needed for runtime theming, use `@theme` in `globals.css`

## E-commerce component specs (for when UI is built)

**ProductCard**: image (aspect ratio consistent), name (2 lines max), price via `formatCurrency`, optional badge, add-to-cart, hover + focus state, skeleton state

**ProductPrice**: always `formatCurrency(money, locale)` — never raw `₹999`

**Breadcrumbs**: `<nav aria-label="Breadcrumb">` → `<ol>` → `aria-current="page"` on last item, BreadcrumbList JSON-LD

**All interactive components**: keyboard accessible, visible focus ring, ARIA labels on icon-only buttons
