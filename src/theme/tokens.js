// Design tokens — single source of truth for all visual values.
// Tailwind CSS references these through the @theme block in globals.css.

export const tokens = {
  colors: {
    primary: {
      50: 'var(--color-primary-50)',
      100: 'var(--color-primary-100)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
      900: 'var(--color-primary-900)',
    },
    neutral: {
      0: '#ffffff',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    success: { 500: '#22c55e', 700: '#15803d' },
    warning: { 500: '#f59e0b', 700: '#b45309' },
    error: { 500: '#ef4444', 700: '#b91c1c' },
    info: { 500: '#3b82f6', 700: '#1d4ed8' },
  },
  spacing: {
    px: '1px', 0: '0', 0.5: '0.125rem', 1: '0.25rem', 2: '0.5rem',
    3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem',
    10: '2.5rem', 12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem',
    32: '8rem', 40: '10rem', 48: '12rem', 64: '16rem',
  },
  typography: {
    fontFamily: { sans: 'var(--font-sans)', mono: 'var(--font-mono)' },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
    },
    fontWeight: { normal: '400', medium: '500', semibold: '600', bold: '700' },
  },
  borderRadius: {
    none: '0', sm: '0.125rem', DEFAULT: '0.25rem', md: '0.375rem',
    lg: '0.5rem', xl: '0.75rem', '2xl': '1rem', full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  zIndex: {
    base: 0, raised: 10, dropdown: 100, sticky: 200,
    overlay: 300, modal: 400, toast: 500, tooltip: 600,
  },
  breakpoints: {
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
  },
  containerMaxWidths: {
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1400px',
  },
  transitions: {
    DEFAULT: '150ms ease-in-out', fast: '100ms ease-in-out', slow: '300ms ease-in-out',
  },
};
