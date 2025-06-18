import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://cnbd.fr';

// Configuration des pages avec priorités SEO
const sitePages = [
  // Pages principales (priorité haute)
  { 
    path: '', 
    priority: 1.0, 
    changeFreq: 'weekly' as const,
    lastModified: new Date()
  },
  { 
    path: 'contact', 
    priority: 0.9, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'services', 
    priority: 0.9, 
    changeFreq: 'weekly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions', 
    priority: 0.9, 
    changeFreq: 'weekly' as const,
    lastModified: new Date()
  },

  // Pages de services (priorité élevée)
  { 
    path: 'infogerance', 
    priority: 0.8, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'telephonie', 
    priority: 0.8, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'ged-digitalisation', 
    priority: 0.8, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },

  // Pages de solutions détaillées
  { 
    path: 'solutions/informatique', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/informatique/poste', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/informatique/hebergement', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/informatique/sauvegarde-securite', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/bureautique', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/bureautique/impression', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'solutions/bureautique/ecrans-interactifs', 
    priority: 0.7, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },

  // Pages de services détaillées
  { 
    path: 'services/audits-conseils', 
    priority: 0.6, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'services/financement', 
    priority: 0.6, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },
  { 
    path: 'services/sav-maintenance', 
    priority: 0.6, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  },

  // Pages institutionnelles (priorité normale)
  { 
    path: 'recrutement', 
    priority: 0.5, 
    changeFreq: 'monthly' as const,
    lastModified: new Date()
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Générer les URLs pour chaque langue
  sitePages.forEach(page => {
    locales.forEach(locale => {
      const url = locale === 'fr' 
        ? `${baseUrl}/${page.path}`.replace(/\/$/, '') || baseUrl
        : `${baseUrl}/en/${page.path}`.replace(/\/$/, '');

      sitemapEntries.push({
        url: url,
        lastModified: page.lastModified,
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: {
            fr: locale === 'fr' ? url : `${baseUrl}/${page.path}`.replace(/\/$/, '') || baseUrl,
            en: locale === 'en' ? url : `${baseUrl}/en/${page.path}`.replace(/\/$/, ''),
          }
        }
      });
    });
  });

  return sitemapEntries;
} 