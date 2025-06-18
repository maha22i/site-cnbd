import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cnbd.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/en/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
          '/build-manifest.json',
          '/node_modules/',
          '/.git/',
          '/.env*',
          '/package*.json',
          '/tsconfig.json',
          '/next.config.js',
          '/tailwind.config.js',
          '/postcss.config.js',
          '/*.log',
          '/temp/',
          '/cache/',
          '/*?*utm_*',  // Exclure les paramètres UTM des URLs
          '/*?*fbclid*', // Exclure les paramètres Facebook
          '/*?*gclid*',  // Exclure les paramètres Google Ads
        ],
      },
      // Configuration spéciale pour Googlebot
      {
        userAgent: 'Googlebot',
        allow: ['/', '/en/'],
        disallow: [
          '/api/',
          '/_next/static/chunks/',
          '/build-manifest.json',
        ],
      },
      // Configuration pour Bingbot
      {
        userAgent: 'Bingbot',
        allow: ['/', '/en/'],
        disallow: [
          '/api/',
          '/_next/',
          '/build-manifest.json',
        ],
      },
      // Bloquer les bots malveillants
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'AspiegelBot',
          'SurveyBot',
          'DataForSeoBot',
        ],
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 