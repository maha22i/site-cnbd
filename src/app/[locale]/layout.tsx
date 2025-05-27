import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import BackToTopButton from '../../components/BackToTopButton';
import { locales } from '../../i18n/config';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'CNBD - Distributeur de solutions informatiques pour entreprises',
  description: 'CNBD est spécialisé dans le commerce de gros d\'ordinateurs, d\'équipements informatiques périphériques et de logiciels pour les entreprises.',
  keywords: 'informatique, entreprise, ordinateurs, équipements informatiques, logiciels, Canon, partenaire officiel',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 