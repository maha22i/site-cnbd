import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object;
  locale?: string;
  alternates?: { [key: string]: string };
}

const baseUrl = 'https://cnbd.fr';
const siteName = 'CNBD';
const defaultImage = '/logo-cnbd.png';

// Configuration SEO par page
export const seoConfig = {
  default: {
    fr: {
      title: 'CNBD - Solutions Informatiques & Bureautiques pour Entreprises',
      description: 'CNBD : Votre partenaire expert en solutions informatiques, bureautiques et téléphonie. Distribution, installation, maintenance. Partenaire officiel Canon.',
      keywords: 'solutions informatiques, bureautique, téléphonie entreprise, Canon, distributeur informatique, maintenance informatique, hébergement, sécurité informatique'
    },
    en: {
      title: 'CNBD - IT & Office Solutions for Businesses',
      description: 'CNBD: Your expert partner in IT, office and telephony solutions. Distribution, installation, maintenance. Official Canon partner.',
      keywords: 'IT solutions, office equipment, business telephony, Canon, IT distributor, computer maintenance, hosting, IT security'
    }
  },
  pages: {
    contact: {
      fr: {
        title: 'Contactez CNBD - Experts en Solutions Informatiques',
        description: 'Contactez nos experts CNBD pour vos projets informatiques et bureautiques. Devis gratuit, conseil personnalisé. Paris, Ile-de-France.',
        keywords: 'contact CNBD, devis informatique, expert IT, conseil informatique, Paris'
      },
      en: {
        title: 'Contact CNBD - IT Solutions Experts',
        description: 'Contact our CNBD experts for your IT and office projects. Free quote, personalized advice. Paris, Ile-de-France.',
        keywords: 'contact CNBD, IT quote, IT expert, IT consulting, Paris'
      }
    },
    services: {
      fr: {
        title: 'Nos Services IT - Audit, Maintenance, Support 24/7 | CNBD',
        description: 'Services informatiques professionnels : audit sécurité, maintenance préventive, support 24/7, financement. Solutions sur-mesure pour entreprises.',
        keywords: 'services informatiques, audit sécurité, maintenance IT, support 24/7, financement informatique'
      },
      en: {
        title: 'Our IT Services - Audit, Maintenance, 24/7 Support | CNBD',
        description: 'Professional IT services: security audit, preventive maintenance, 24/7 support, financing. Custom solutions for businesses.',
        keywords: 'IT services, security audit, IT maintenance, 24/7 support, IT financing'
      }
    },
    solutions: {
      fr: {
        title: 'Solutions Informatiques & Bureautiques Professionnelles | CNBD',
        description: 'Découvrez nos solutions : postes informatiques, hébergement cloud, impression, écrans interactifs, téléphonie. Technologies de pointe.',
        keywords: 'solutions informatiques, hébergement cloud, impression professionnelle, écrans interactifs, téléphonie IP'
      },
      en: {
        title: 'Professional IT & Office Solutions | CNBD',
        description: 'Discover our solutions: computers, cloud hosting, printing, interactive displays, telephony. Cutting-edge technologies.',
        keywords: 'IT solutions, cloud hosting, professional printing, interactive displays, IP telephony'
      }
    },
    infogerance: {
      fr: {
        title: 'Infogérance Informatique - Gestion SI Externalisée | CNBD',
        description: 'Infogérance complète de votre système d\'information. Supervision 24/7, maintenance proactive, sécurité renforcée. Concentrez-vous sur votre métier.',
        keywords: 'infogérance, gestion SI, supervision informatique, maintenance proactive, externalisation IT'
      },
      en: {
        title: 'IT Outsourcing - Managed IT Services | CNBD',
        description: 'Complete management of your information system. 24/7 monitoring, proactive maintenance, enhanced security. Focus on your business.',
        keywords: 'IT outsourcing, managed IT, IT monitoring, proactive maintenance, IT externalization'
      }
    },
    telephonie: {
      fr: {
        title: 'Téléphonie d\'Entreprise - Solutions VoIP & Unifiées | CNBD',
        description: 'Solutions téléphonie d\'entreprise : VoIP, communication unifiée, standard virtuel. Installation, formation, maintenance.',
        keywords: 'téléphonie entreprise, VoIP, communication unifiée, standard virtuel, téléphonie IP'
      },
      en: {
        title: 'Business Telephony - VoIP & Unified Solutions | CNBD',
        description: 'Business telephony solutions: VoIP, unified communication, virtual switchboard. Installation, training, maintenance.',
        keywords: 'business telephony, VoIP, unified communication, virtual switchboard, IP telephony'
      }
    },
    'ged-digitalisation': {
      fr: {
        title: 'GED & Digitalisation - Dématérialisation Documents | CNBD',
        description: 'Solutions GED et digitalisation : dématérialisation factures, archivage électronique, workflow documentaire. Conformité RGPD.',
        keywords: 'GED, digitalisation, dématérialisation, archivage électronique, workflow documentaire, RGPD'
      },
      en: {
        title: 'DMS & Digitalization - Document Digitization | CNBD',
        description: 'DMS and digitalization solutions: invoice digitization, electronic archiving, document workflow. GDPR compliance.',
        keywords: 'DMS, digitalization, document digitization, electronic archiving, document workflow, GDPR'
      }
    }
  }
};

export function generateSEOMetadata(
  pageKey: keyof typeof seoConfig.pages | 'default',
  locale: string = 'fr',
  overrides: Partial<SEOConfig> = {}
): Metadata {
  const pageConfig = pageKey === 'default' 
    ? seoConfig.default[locale as 'fr' | 'en']
    : seoConfig.pages[pageKey]?.[locale as 'fr' | 'en'] || seoConfig.default[locale as 'fr' | 'en'];

  const config: SEOConfig = {
    ...pageConfig,
    ...overrides
  };

  const fullTitle = config.title;
  const canonical = config.canonical || `${baseUrl}${locale === 'fr' ? '' : '/en'}`;
  
  // Schema markup pour l'organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CNBD",
    "description": config.description,
    "url": baseUrl,
    "logo": `${baseUrl}/logo-cnbd.png`,
    "sameAs": [
      "https://www.linkedin.com/company/cnbd",
      "https://www.facebook.com/cnbd"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "64, allée de la main ferme",
      "addressLocality": "Les Pavillons sous Bois",
      "postalCode": "93320",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-43-62-16-03",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French", "English"]
    }
  };

  const metadata: Metadata = {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    
    // Métadonnées de base
    authors: [{ name: 'CNBD' }],
    creator: 'CNBD',
    publisher: 'CNBD',
    
    // Robots
    robots: {
      index: !config.noindex,
      follow: true,
      googleBot: {
        index: !config.noindex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: config.ogType || 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      url: canonical,
      title: fullTitle,
      description: config.description,
      siteName: siteName,
      images: [
        {
          url: config.ogImage || `${baseUrl}${defaultImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: [config.ogImage || `${baseUrl}${defaultImage}`],
      creator: '@CNBD_official',
    },

    // Alternates pour SEO multilingue
    alternates: {
      canonical: canonical,
      languages: {
        'fr': `${baseUrl}/`,
        'en': `${baseUrl}/en`,
      },
    },

    // Autres métadonnées
    category: 'Technology',
    verification: {
      google: 'your-google-verification-code', // À remplacer
    },

    // Schema.org structured data
    other: {
      'schema:Organization': JSON.stringify(organizationSchema),
    },
  };

  return metadata;
}

// Configuration pour les pages spécifiques
export const generatePageSEO = {
  home: (locale: string) => generateSEOMetadata('default', locale),
  contact: (locale: string) => generateSEOMetadata('contact', locale),
  services: (locale: string) => generateSEOMetadata('services', locale),
  solutions: (locale: string) => generateSEOMetadata('solutions', locale),
  infogerance: (locale: string) => generateSEOMetadata('infogerance', locale),
  telephonie: (locale: string) => generateSEOMetadata('telephonie', locale),
  ged: (locale: string) => generateSEOMetadata('ged-digitalisation', locale),
}; 