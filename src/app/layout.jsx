import { Poppins, Inter } from 'next/font/google';
import { FaWhatsapp } from 'react-icons/fa';
import { buildMetadata } from '@/lib/seo/metadata';
import { getCurrentSite } from '@/lib/site/context';
import { cssVarsToDeclarations } from '@/lib/utils/cssVars';
import { isRTL } from '@/config/locale';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
  const { config, theme, content } = site;
  const lang = config.defaultLocale;
  const dir = theme.direction ?? (isRTL(lang) ? 'rtl' : 'ltr');
  const themeVars = cssVarsToDeclarations(theme.cssVars);

  return (
    <html
      lang={lang}
      dir={dir}
      data-site={config.slug}
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Per-site brand override — see docs/architecture.md (Sub-sites). */}
        <style dangerouslySetInnerHTML={{ __html: `:root{${themeVars}}` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <AnnouncementBar
          text={content.announcement.text}
          couponCode={content.announcement.couponCode}
        />
        <Navbar logo={theme.logo} siteName={config.name} />
        {children}
        <Footer logo={theme.logo} siteName={config.name} />
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 end-6 z-50 w-12 h-12 bg-[var(--color-brand)] rounded-full flex items-center justify-center hover:bg-[var(--color-brand-dark)] transition-colors shadow-[var(--shadow-brand)]"
        >
          <FaWhatsapp className="w-6 h-6 text-white" aria-hidden="true" />
        </a>
      </body>
    </html>
  );
}
