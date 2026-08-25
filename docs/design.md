# Design System

All values in this file come directly from the Figma design.
The single source of truth for CSS is `src/app/globals.css`.
The JavaScript reference is `src/theme/tokens.js`.

**Rule: never hardcode a color, size, shadow, or spacing value that has a CSS variable.**

BAD:  `className="text-[#077ad5] mt-[80px]"`
GOOD: `className="text-[var(--color-brand)] mt-[var(--section-py)]"` or the matching Tailwind utility.

---

## Colors

### Brand

| Variable | Value | Use |
|---|---|---|
| `--color-brand` | `#077ad5` | Primary buttons, links, highlights |
| `--color-brand-light` | `#e6f2fb` | Light tinted backgrounds, hover states |
| `--color-brand-lighter` | `#deefff` | Very light accent backgrounds |
| `--color-brand-dark` | `#022847` | Dark sections, footer |
| `--color-brand-overlay` | `#0b1215` | Darkest overlays |

### Accent

| Variable | Value | Use |
|---|---|---|
| `--color-accent` | `#faa61a` | Badges, ratings, highlights, CTAs |
| `--color-accent-light` | `#fff3d6` | Accent backgrounds |

### Text

| Variable | Value | Use |
|---|---|---|
| `--color-text-primary` | `#202124` | Main body text, headings |
| `--color-text-dark` | `#0a0a0a` | High-contrast text |
| `--color-text-secondary` | `#626364` | Secondary labels, captions |
| `--color-text-muted` | `#b0b0b0` | Placeholder, disabled text |
| `--color-text-inverse` | `#ffffff` | Text on dark backgrounds |

### Surfaces

| Variable | Value | Use |
|---|---|---|
| `--color-bg` | `#ffffff` | Default page background |
| `--color-surface` | `#f8f9fa` | Card backgrounds, alternating sections |
| `--color-surface-alt` | `#eef1f6` | Alternate section backgrounds |
| `--color-surface-blue` | `#e6f2fb` | Blue-tinted section backgrounds |
| `--color-dark-bg` | `#1a1a2e` | Dark/hero sections |
| `--color-dark-surface` | `#2a2a2e` | Dark cards |

### Borders and Semantic

| Variable | Value |
|---|---|
| `--color-border` | `#e9ebee` |
| `--color-border-dark` | `#3f4043` |
| `--color-success` | `#00b564` |
| `--color-warning` | `#faa61a` |
| `--color-error` | `#ef4444` |
| `--color-info` | `#3b82f6` |

---

## Typography

### Fonts

- **Primary (Poppins)** — headings, body text, most UI. Load via `next/font/google`.
- **Secondary (Inter)** — UI controls, labels, data-dense areas.
- **Tertiary (Arimo)** — specific design elements only.

Always load fonts with `next/font/google` in the root layout. Never import font CSS files directly.

### Type scale

| Variable | Size | Use |
|---|---|---|
| `--text-display` | 60px | Hero / display headline |
| `--text-h1` | 52px | Page H1 |
| `--text-h2` | 40px | Section headings |
| `--text-h3` | 32px | Sub-section headings |
| `--text-h4` | 28px | Card headings |
| `--text-h5` | 24px | Feature headings |
| `--text-h6` | 20px | Minor headings |
| `--text-lg` | 18px | Lead / intro text |
| `--text-base` | 16px | Body text |
| `--text-sm` | 14px | Secondary text, labels |
| `--text-xs` | 12px | Captions, badges, meta |

### Font weights

| Variable | Value |
|---|---|
| `--weight-light` | 300 |
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |
| `--weight-bold` | 700 |

### Line heights

| Variable | Value | Use |
|---|---|---|
| `--leading-tight` | 1.2 | Large display/hero headings |
| `--leading-snug` | 1.35 | Section headings |
| `--leading-normal` | 1.5 | Body text (default) |
| `--leading-relaxed` | 1.625 | Long-form content |
| `--leading-loose` | 1.8 | Spaced-out small text |

---

## Spacing

Base grid: 4px (0.25rem). All spacing uses this scale.

| Variable | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-30` | 120px |

---

## Layout

From the Figma canvas (1728px):

| Variable | Value | Notes |
|---|---|---|
| `--container-max` | 1400px | Main content max-width |
| `--container-narrow` | 1228px | Narrow/centered content |
| `--section-px` | 80px (5rem) | Horizontal section padding |
| `--section-py` | 80px (5rem) | Vertical section padding |
| `--section-gap` | 64px (4rem) | Gap between page sections |

### Breakpoints

| Name | Width | Use |
|---|---|---|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Small desktop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Wide desktop |

Always mobile-first: base styles = mobile, add `sm:` `md:` `lg:` `xl:` for larger screens.

---

## Border Radius

| Variable | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | Inputs, small chips |
| `--radius-sm` | 8px | Buttons, cards (small) |
| `--radius-md` | 12px | Cards, modals |
| `--radius-lg` | 16px | Panels, large cards |
| `--radius-xl` | 24px | Feature sections |
| `--radius-2xl` | 32px | Hero cards |
| `--radius-3xl` | 40px | Large feature cards |
| `--radius-pill` | 100px | Pill badges, tags |
| `--radius-full` | 9999px | Circular avatars, icons |

---

## Shadows

| Variable | Use |
|---|---|
| `--shadow-card` | Standard card elevation |
| `--shadow-subtle` | Gentle lift, hover states |
| `--shadow-strong` | Modals, popovers, strong elevation |
| `--shadow-brand` | Brand-colored glow on primary buttons |

---

## Z-index

| Variable | Value | Layer |
|---|---|---|
| `--z-base` | 0 | Default |
| `--z-raised` | 10 | Cards, badges |
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-sticky` | 200 | Sticky header |
| `--z-overlay` | 300 | Overlay backdrop |
| `--z-modal` | 400 | Modal dialogs |
| `--z-toast` | 500 | Toast notifications |
| `--z-tooltip` | 600 | Tooltips |

---

## Transitions

| Variable | Value | Use |
|---|---|---|
| `--transition-fast` | 100ms ease-in-out | Micro-interactions |
| `--transition-base` | 150ms ease-in-out | Standard hover/focus |
| `--transition-slow` | 300ms ease-in-out | Modals, drawers |

---

## RTL

Use Tailwind logical utilities in all layout code:
- `ms-*` not `ml-*` — margin inline-start
- `me-*` not `mr-*` — margin inline-end
- `ps-*` not `pl-*` — padding inline-start
- `pe-*` not `pr-*` — padding inline-end
- `start-*` not `left-*` — inset inline-start
- `end-*` not `right-*` — inset inline-end

---

## Tailwind rule

Tailwind is the ONLY styling method. Never use:
- `style={{}}` inline styles
- External `.css` files for components
- Arbitrary `[]` values when a CSS variable or Tailwind class covers it

The only CSS file is `src/app/globals.css` (variables and base reset).

To use a CSS variable in Tailwind: `text-[var(--color-brand)]`, `bg-[var(--color-surface)]`, etc.

---

## Component states

Every interactive component must handle all these states before shipping:
`default` · `hover` · `focus` · `active` · `disabled` · `loading` · `error` · `empty`

Focus: always `focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]` — never remove without replacement.
