import { unstable_setRequestLocale } from 'next-intl/server';
import ContactClient from '@/components/pages/ContactClient';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <ContactClient />;
} 