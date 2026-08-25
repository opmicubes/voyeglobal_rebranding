import { siteConfig } from './site';

export const defaultSeo = {
  title: siteConfig.name,
  description: `Shop at ${siteConfig.name}`,
  canonical: siteConfig.url,
  noIndex: false,
  openGraph: {
    title: siteConfig.name,
    description: `Shop at ${siteConfig.name}`,
  },
};

export const robotsTxtConfig = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/', '/account/'],
    },
  ],
  sitemap: `${siteConfig.url}/sitemap.xml`,
};
