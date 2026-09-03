import { headers } from 'next/headers';
import { getSite, defaultSiteSlug } from '@/sites/registry';
import { SITE_HEADER } from './constants';

/**
 * Resolve the current site for this request. Reads the slug set by the proxy
 * from the request headers, so it works in any Server Component / route.
 * @returns {Promise<import('@/sites/registry').sites['voy']>}
 */
export async function getCurrentSite() {
  const headerList = await headers();
  const slug = headerList.get(SITE_HEADER) ?? defaultSiteSlug;
  return getSite(slug);
}
