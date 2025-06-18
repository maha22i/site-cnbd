'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaId?: string;
  gtmId?: string;
  debug?: boolean;
}

export default function GoogleAnalytics({ 
  gaId = 'G-XXXXXXXXXX', // À remplacer par votre ID GA4
  gtmId = 'GTM-XXXXXXX', // À remplacer par votre ID GTM
  debug = false 
}: GoogleAnalyticsProps) {

  useEffect(() => {
    // Configuration GA4 avancée
    if (typeof window !== 'undefined' && window.gtag) {
      // Désactiver le tracking automatique des pages pour le contrôler manuellement
      window.gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true, // Conformité RGPD
        allow_google_signals: false, // Désactiver les signaux Google pour plus de confidentialité
        allow_ad_personalization_signals: false,
      });

      // Tracking personnalisé pour CNBD
      window.gtag('event', 'page_view', {
        event_category: 'engagement',
        event_label: 'site_visit',
        custom_parameter: 'cnbd_visitor'
      });
    }
  }, [gaId]);

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false,
                  page_title: document.title,
                  page_location: window.location.href,
                  custom_map: {
                    'custom_parameter_1': 'business_type',
                    'custom_parameter_2': 'service_interest'
                  }
                });

                // Events personnalisés CNBD
                gtag('event', 'cnbd_site_loaded', {
                  event_category: 'site_performance',
                  event_label: 'initial_load',
                  value: 1
                });

                ${debug ? `console.log('Google Analytics configuré avec l\'ID: ${gaId}');` : ''}
              `,
            }}
          />
        </>
      )}

      {/* GTM NoScript Fallback */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}
    </>
  );
}

// Hook pour tracker les événements personnalisés
export function useGATracking() {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'user_interaction',
        event_label: 'cnbd_action',
        ...parameters
      });
    }
  };

  const trackContactForm = (formType: string) => {
    trackEvent('form_submission', {
      event_category: 'lead_generation',
      event_label: formType,
      value: 1
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      event_category: 'content_engagement',
      event_label: serviceName,
      custom_parameter: 'service_interest'
    });
  };

  const trackPhoneClick = () => {
    trackEvent('phone_click', {
      event_category: 'contact_action',
      event_label: 'phone_number',
      value: 1
    });
  };

  const trackWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      event_category: 'contact_action',
      event_label: 'whatsapp',
      value: 1
    });
  };

  return {
    trackEvent,
    trackContactForm,
    trackServiceView,
    trackPhoneClick,
    trackWhatsAppClick
  };
}

// Déclaration des types pour TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
} 