import { unstable_setRequestLocale } from 'next-intl/server';
import RecrutementClient from '@/components/pages/RecrutementClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RecrutementPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  return <RecrutementClient />;
} 