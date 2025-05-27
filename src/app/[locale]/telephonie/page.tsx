import { unstable_setRequestLocale } from 'next-intl/server';
import TelephonieClient from '@/components/pages/TelephonieClient';

export default function TelephoniePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <TelephonieClient />;
} 