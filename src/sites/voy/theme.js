// Voye — brand theme. Only the CSS variables that differ from the base
// tokens in globals.css (@theme). These are injected as a :root override
// <style> block by the root layout, so components never change per site.
export const theme = {
  direction: 'ltr',
  logo: { src: '/home/voyelogo.svg', alt: 'Voye Global', width: 90, height: 37 },
  cssVars: {
    '--color-brand': '#077ad5',
    '--color-brand-light': '#e6f2fb',
    '--color-brand-lighter': '#deefff',
    '--color-brand-dark': '#022847',
    '--color-accent': '#faa61a',
    '--color-accent-light': '#fff3d6',
    '--shadow-brand': '0 8px 32px rgba(7, 122, 213, 0.24)',
  },
};
