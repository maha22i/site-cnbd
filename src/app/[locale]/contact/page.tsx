import { unstable_setRequestLocale } from 'next-intl/server';
import ContactClient from '@/components/pages/ContactClient';
import { locales } from '../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <ContactClient />;
} 