// Voye — page composition + editorial content. Text values here are
// placeholders for the scaffold; move to translation keys when i18n wiring
// lands (see docs/standards.md). `sections` declares homepage order so the
// composition can become data-driven without touching component code.
export const content = {
  announcement: {
    text: '⚡ Use coupon code {code} for 15% off your first order!',
    couponCode: 'APP15',
  },
  sections: [
    'hero',
    'features',
    'plans',
    'gateway',
    'whyChoose',
    'howItWorks',
    'phoneSupport',
    'comparison',
    'trusted',
    'faq',
    'cta',
  ],
};
