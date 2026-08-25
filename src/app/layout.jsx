import { Poppins, Inter } from 'next/font/google';
import { buildMetadata } from '@/lib/seo/metadata';
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

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
