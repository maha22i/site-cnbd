import { unstable_setRequestLocale } from 'next-intl/server';
import InfogeranceClient from '@/components/pages/InfogeranceClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function InfogerancePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <InfogeranceClient />;
} 