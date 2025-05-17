/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Extensions de fichiers à considérer comme des pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Désactiver le générateur d'images au moment du build si nécessaire
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 