// Voye — brand + behavior config. Brand-specific values only; anything
// shared lives in src/config/*. Resolved per request via the site resolver.
export const config = {
  slug: 'voy',
  name: 'Voye Global',
  url: 'https://voy.com',
  // Hostnames that resolve to this site (no port, no leading www.).
  // Include *.localhost variants so subdomains work in local dev.
  hosts: ['voy.com', 'localhost'],
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
  // Per-site data source. Each brand can point at its own WordPress/WooGraphQL
  // backend. Overridable per environment without touching code.
  api: {
    graphqlEndpoint:
      process.env.VOY_GRAPHQL_ENDPOINT || 'https://voyeglobal.com/graphql',
  },
  seo: {
    title: 'Voye Global — Travel eSIM for 190+ countries',
    description:
      'Stay connected worldwide with Voye Global eSIM. Instant activation, no roaming fees.',
  },
};
