import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Valider la locale
  if (!locale || !locales.includes(locale as any)) {
    //console.warn(`Locale ${locale} not supported, falling back to ${defaultLocale}`);
    locale = defaultLocale;
  }
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
   // console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback vers la locale par défaut si le fichier n'existe pas
    // Ensure we use the potentially updated locale here
    messages = (await import(`../../messages/${locale}.json`)).default;
  }
  
  return { messages, locale }; // Added locale here
}); 