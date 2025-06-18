import { unstable_setRequestLocale } from 'next-intl/server';
import TelephonieClient from '@/components/pages/TelephonieClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function TelephoniePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <TelephonieClient />;
} 