// Asser — brand + behavior config. Runs on the same shared codebase as Voye;
// only the values below (and theme/content) differ. Served at asser.voy.com.
export const config = {
  slug: 'asser',
  name: 'Asser',
  url: 'https://asser.voy.com',
  // Hostnames that resolve to this site (no port, no leading www.).
  hosts: ['asser.voy.com', 'asser.localhost'],
  defaultLocale: 'en',
  supportedLocales: ['en', 'ar'],
  defaultCurrency: 'USD',
  supportedCurrencies: ['USD'],
  features: {
    wishlist: false,
    compare: false,
    reviews: true,
    search: true,
  },
  social: {},
  contact: {},
  // Asser's own data source — a different backend from Voye.
  api: {
    graphqlEndpoint:
      process.env.ASSER_GRAPHQL_ENDPOINT || 'https://asser.voyeglobal.com/graphql',
  },
  seo: {
    title: 'Asser — Global travel eSIM',
    description:
      'Asser eSIM keeps you online in 190+ countries. Instant activation, no roaming fees.',
  },
};
