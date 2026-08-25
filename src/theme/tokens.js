// Design tokens extracted from Figma design file.
// These values drive globals.css CSS variables and serve as
// the reference for all styling decisions in this project.

export const tokens = {
  colors: {
    brand: {
      DEFAULT: '#077ad5',
      light: '#e6f2fb',
      lighter: '#deefff',
      dark: '#022847',
      overlay: '#0b1215',
    },
    accent: {
      DEFAULT: '#faa61a',
      light: '#fff3d6',
    },
    text: {
      primary: '#202124',
      dark: '#0a0a0a',
      secondary: '#626364',
      muted: '#b0b0b0',
      inverse: '#ffffff',
    },
    surface: {
      white: '#ffffff',
      DEFAULT: '#f8f9fa',
      alt: '#eef1f6',
      blue: '#e6f2fb',
      dark: '#1a1a2e',
      darkAlt: '#2a2a2e',
    },
    border: {
      DEFAULT: '#e9ebee',
      dark: '#3f4043',
    },
    semantic: {
      success: '#00b564',
      warning: '#faa61a',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },

  typography: {
    fontFamily: {
      primary: "'Poppins', system-ui, -apple-system, sans-serif",
      secondary: "'Inter', system-ui, -apple-system, sans-serif",
      tertiary: "'Arimo', system-ui, -apple-system, sans-serif",
      mono: "ui-monospace, 'Cascadia Code', monospace",
    },
    fontSize: {
      display: '3.75rem',  // 60px
      h1: '3.25rem',       // 52px
      h2: '2.5rem',        // 40px
      h3: '2rem',          // 32px
      h4: '1.75rem',       // 28px
      h5: '1.5rem',        // 24px
      h6: '1.25rem',       // 20px
      lg: '1.125rem',      // 18px
      base: '1rem',        // 16px
      sm: '0.875rem',      // 14px
      xs: '0.75rem',       // 12px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.35,
      normal: 1.5,
      relaxed: 1.625,
      loose: 1.8,
    },
  },

  borderRadius: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    '3xl': '2.5rem', // 40px
    pill: '6.25rem', // 100px
    full: '9999px',
  },

  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    30: '7.5rem',
  },

  layout: {
    containerMax: '87.5rem',      // 1400px
    containerNarrow: '76.75rem',  // 1228px
    sectionPx: '5rem',            // 80px horizontal padding
    sectionPy: '5rem',            // 80px vertical padding
    sectionGap: '4rem',           // 64px between sections
  },

  shadows: {
    card: '0 12px 12px -12px rgba(12, 12, 13, 0.05), 0 48px 96px -12px rgba(12, 12, 13, 0.1)',
    subtle: '0 5px 5px -5px rgba(17, 24, 39, 0.03), 0 11px 11px 0 rgba(17, 24, 39, 0.03)',
    strong: '0 22px 22px 0 rgba(17, 24, 39, 0.05), 0 44px 44px 0 rgba(17, 24, 39, 0.08)',
    brand: '0 8px 32px rgba(7, 122, 213, 0.24)',
  },

  zIndex: {
    base: 0,
    raised: 10,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
    tooltip: 600,
  },

  transitions: {
    fast: '100ms ease-in-out',
    base: '150ms ease-in-out',
    slow: '300ms ease-in-out',
  },
};
