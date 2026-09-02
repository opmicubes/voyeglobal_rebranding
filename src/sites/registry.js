import { voySite } from './voy';
import { asserSite } from './asser';

// All sites served by this codebase, keyed by slug.
export const sites = {
  voy: voySite,
  asser: asserSite,
};

// Fallback when a host is unknown (e.g. direct IP, preview URL).
export const defaultSiteSlug = 'voy';

// hostname (lowercased, no port, no leading www.) → slug.
// Built from each site's `hosts` list so there's a single source of truth.
export const hostToSlug = Object.values(sites).reduce((map, site) => {
  for (const host of site.config.hosts) {
    map[host.toLowerCase()] = site.config.slug;
  }
  return map;
}, {});

export function getSite(slug) {
  return sites[slug] ?? sites[defaultSiteSlug];
}
