import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import BackToTopButton from '../../components/BackToTopButton';
import WhatsAppButton from '../../components/WhatsAppButton';
import GoogleAnalytics from '../../components/seo/GoogleAnalytics';
import { OrganizationSchema, LocalBusinessSchema } from '../../components/seo/SchemaMarkup';
import { locales } from '../../i18n/config';
import { generatePageSEO } from '../../lib/seo';
import 'aos/dist/aos.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap', // Optimisation pour le chargement des polices
  preload: true
});

// Métadonnées générées dynamiquement par page
export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  return generatePageSEO.home(locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html 
      lang={locale} 
      suppressHydrationWarning
      className="scroll-smooth" // Smooth scrolling
    >
      <head>
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/logo-cnbd.png" 
          as="image" 
          type="image/png"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/france.png" 
          as="image" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href="/anglais.png" 
          as="image" 
          type="image/png"
        />
        
        {/* DNS Prefetch pour améliorer les performances */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Preconnect pour les ressources critiques */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        
        {/* Optimisations pour mobile */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CNBD" />
        
        {/* Thème couleur pour le navigateur mobile */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        
        {/* Optimisations pour les moteurs de recherche */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Links canoniques et alternates pour SEO multilingue */}
        <link 
          rel="canonical" 
          href={locale === 'fr' ? 'https://cnbd.fr/' : 'https://cnbd.fr/en/'} 
        />
        <link 
          rel="alternate" 
          hrefLang="fr" 
          href="https://cnbd.fr/" 
        />
        <link 
          rel="alternate" 
          hrefLang="en" 
          href="https://cnbd.fr/en/" 
        />
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href="https://cnbd.fr/" 
        />

        {/* Schema Markup JSON-LD */}
        <OrganizationSchema locale={locale} />
        <LocalBusinessSchema locale={locale} />
      </head>
      
      <body className={`${inter.variable} font-sans min-h-screen antialiased`}>
        {/* Google Analytics */}
        <GoogleAnalytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
          debug={process.env.NODE_ENV === 'development'}
        />
        
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Skip to main content pour l'accessibilité */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cnbd-red text-white px-4 py-2 rounded-md z-50"
          >
            {locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
          </a>
          
          <Navbar />
          
          <main 
            id="main-content" 
            className="pt-20"
            role="main"
          >
            {children}
          </main>
          
          <Footer />
          <BackToTopButton />
          <WhatsAppButton />
        </NextIntlClientProvider>

        {/* Script pour améliorer le Core Web Vitals */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimisation du CLS (Cumulative Layout Shift)
              if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                  img.src = img.src;
                });
              }
              
              // Optimisation du LCP (Largest Contentful Paint)
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    // Marquer le LCP
                    if (window.gtag) {
                      window.gtag('event', 'timing_complete', {
                        name: 'LCP',
                        value: Math.round(entry.startTime)
                      });
                    }
                  }
                }
              });
              observer.observe({entryTypes: ['largest-contentful-paint']});
            `
          }}
        />
      </body>
    </html>
  );
} 