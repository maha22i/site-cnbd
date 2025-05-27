import { unstable_setRequestLocale } from 'next-intl/server';
import GedDigitalisationClient from '@/components/pages/GedDigitalisationClient';

export default function GedDigitalisationPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <GedDigitalisationClient />;
} 