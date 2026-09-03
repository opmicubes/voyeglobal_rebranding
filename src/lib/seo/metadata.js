import { siteConfig } from '@/config/site';
import { defaultSeo } from '@/config/seo';

/**
 * @param {Partial<import('@/config/seo').SeoMeta>} [seo]
 * @param {{ siteName?: string }} [options] per-site overrides (multi-tenant)
 * @returns {import('next').Metadata}
 */
export function buildMetadata(seo = {}, options = {}) {
  const merged = { ...defaultSeo, ...seo };
  const siteName = options.siteName ?? siteConfig.name;

  return {
    title: merged.title,
    description: merged.description,
    alternates: {
      canonical: merged.canonical ?? siteConfig.url,
    },
    robots: merged.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: merged.openGraph?.title ?? merged.title,
      description: merged.openGraph?.description ?? merged.description,
      images: merged.openGraph?.image ? [{ url: merged.openGraph.image }] : [],
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: merged.openGraph?.title ?? merged.title,
      description: merged.openGraph?.description ?? merged.description,
    },
    icons: {
      icon: '/home/voye.svg',
      shortcut: '/home/voye.svg',
    },
  };
}
