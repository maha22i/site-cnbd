import { unstable_setRequestLocale } from 'next-intl/server';
import InfogeranceClient from '@/components/pages/InfogeranceClient';

export default function InfogerancePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <InfogeranceClient />;
} 