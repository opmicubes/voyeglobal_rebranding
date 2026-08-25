import { siteConfig } from './site';

export function isFeatureEnabled(feature) {
  return siteConfig.features[feature] ?? false;
}
