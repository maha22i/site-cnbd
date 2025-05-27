import { locales } from '../../i18n/config';
import HomeContent from '../../components/pages/HomeContent';
import { unstable_setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  return <HomeContent />;
} 