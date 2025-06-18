import { unstable_setRequestLocale } from 'next-intl/server';
import GedDigitalisationClient from '@/components/pages/GedDigitalisationClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GedDigitalisationPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <GedDigitalisationClient />;
} 