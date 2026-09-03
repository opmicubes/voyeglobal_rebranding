import { Poppins, Inter } from 'next/font/google';
import { buildMetadata } from '@/lib/seo/metadata';
import { getCurrentSite } from '@/lib/site/context';
import { cssVarsToDeclarations } from '@/lib/utils/cssVars';
import { isRTL } from '@/config/locale';
import './globals.css';

const poppins = Poppins({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export async function generateMetadata() {
  const { config } = await getCurrentSite();
  return buildMetadata(
    {
      title: config.seo.title,
      description: config.seo.description,
      canonical: config.url,
    },
    { siteName: config.name }
  );
}

export default async function RootLayout({ children }) {
  const site = await getCurrentSite();
  const lang = site.config.defaultLocale;
  const dir = site.theme.direction ?? (isRTL(lang) ? 'rtl' : 'ltr');
  const themeVars = cssVarsToDeclarations(site.theme.cssVars);

  return (
    <html
      lang={lang}
      dir={dir}
      data-site={site.config.slug}
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Per-site brand override — see docs/architecture.md (Sub-sites). */}
        <style dangerouslySetInnerHTML={{ __html: `:root{${themeVars}}` }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
