// Asser — brand theme. Distinct brand palette from Voye; only the CSS
// variables that differ from the base tokens in globals.css are listed.
// Injected as a :root override by the root layout — components are untouched.
export const theme = {
  direction: 'ltr',
  // No brand asset yet — Navbar falls back to a text wordmark of config.name.
  logo: { src: null, alt: 'Asser' },
  cssVars: {
    '--color-brand': '#16a34a',
    '--color-brand-light': '#e7f6ec',
    '--color-brand-lighter': '#d8f2e1',
    '--color-brand-dark': '#052e16',
    '--color-accent': '#f59e0b',
    '--color-accent-light': '#fef3c7',
    '--shadow-brand': '0 8px 32px rgba(22, 163, 74, 0.24)',
  },
};
