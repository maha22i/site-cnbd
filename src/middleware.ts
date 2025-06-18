import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // FR à la racine, EN avec préfixe /en
  localeDetection: true,
  pathnames: {
    // Configuration pour l'export statique
    '/': '/',
    '/en': '/en'
  }
});

export const config = {
  matcher: [
    // Racine
    '/',
    
    // Pages avec préfixe de langue
    '/(fr|en)/:path*',
    
    // Toutes les pages sauf les assets statiques
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 