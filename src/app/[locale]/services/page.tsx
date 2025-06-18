import { unstable_setRequestLocale } from 'next-intl/server';
import ServicesClient from '@/components/pages/ServicesClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <ServicesClient />;
} 