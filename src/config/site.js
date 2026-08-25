export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'My Store',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',
  supportedLocales: (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? 'en')
    .split(',')
    .map((l) => l.trim()),
  defaultCurrency: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY ?? 'USD',
  supportedCurrencies: (process.env.NEXT_PUBLIC_SUPPORTED_CURRENCIES ?? 'USD')
    .split(',')
    .map((c) => c.trim()),
  direction: 'ltr',
  social: {},
  contact: {},
  features: {
    wishlist: process.env.NEXT_PUBLIC_FEATURE_WISHLIST === 'true',
    compare: process.env.NEXT_PUBLIC_FEATURE_COMPARE === 'true',
    reviews: process.env.NEXT_PUBLIC_FEATURE_REVIEWS !== 'false',
    search: process.env.NEXT_PUBLIC_FEATURE_SEARCH !== 'false',
  },
};
