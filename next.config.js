const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configuration pour l'export statique
  reactStrictMode: true,
  // Extensions de fichiers à considérer comme des pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Désactiver le générateur d'images au moment du build si nécessaire
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Recommandé pour l'hébergement statique
}

module.exports = withNextIntl(nextConfig); 