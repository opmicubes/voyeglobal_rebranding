import { hostToSlug, defaultSiteSlug } from '@/sites/registry';

/**
 * Map an incoming Host header to a site slug.
 * Strips port and a leading `www.`, then looks up the registry.
 * @param {string | null | undefined} host
 * @returns {string} site slug (falls back to the default site)
 */
export function getSiteSlugFromHost(host) {
  if (!host) return defaultSiteSlug;
  const hostname = host.split(':')[0].trim().toLowerCase().replace(/^www\./, '');
  return hostToSlug[hostname] ?? defaultSiteSlug;
}
