import { unstable_setRequestLocale } from 'next-intl/server';
import RecrutementClient from '@/components/pages/RecrutementClient';

export default function RecrutementPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  return <RecrutementClient />;
} 