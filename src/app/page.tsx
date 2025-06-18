import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Page racine qui redirige vers la locale par défaut
export default function RootPage() {
  // Redirection côté serveur vers la locale par défaut
  redirect(`/${defaultLocale}`);
}

// Metadata pour SEO
export const metadata = {
  title: 'CNBD - Redirection...',
  description: 'CNBD - Votre partenaire IT de confiance',
}; 