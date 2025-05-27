import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale
});

// Wrappers légers autour des APIs de navigation de Next.js
// qui fournissent des liens et redirections avec prise en compte de la locale
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing); 