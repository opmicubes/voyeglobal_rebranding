import { siteConfig } from './site';

export const localeConfigs = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    dateLocale: 'en-US',
    numberLocale: 'en-US',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    dateLocale: 'ar-AE',
    numberLocale: 'ar-AE',
  },
};

export function getLocaleConfig(locale) {
  return localeConfigs[locale] ?? localeConfigs[siteConfig.defaultLocale] ?? localeConfigs['en'];
}

export function isRTL(locale) {
  return getLocaleConfig(locale).direction === 'rtl';
}
