const fs = require('fs');
const path = require('path');

console.log('🖼️ Optimisation des images pour le SEO');

// Configuration des images requises pour le SEO
const requiredImages = {
  // Open Graph Images (1200x630)
  'og-image-home.jpg': { width: 1200, height: 630, description: 'Image Open Graph page d\'accueil' },
  'og-image-services.jpg': { width: 1200, height: 630, description: 'Image Open Graph services' },
  'og-image-solutions.jpg': { width: 1200, height: 630, description: 'Image Open Graph solutions' },
  'og-image-contact.jpg': { width: 1200, height: 630, description: 'Image Open Graph contact' },
  
  // Twitter Cards (1200x600)
  'twitter-card-home.jpg': { width: 1200, height: 600, description: 'Twitter Card page d\'accueil' },
  
  // Favicons
  'favicon.ico': { width: 32, height: 32, description: 'Favicon standard' },
  'favicon-16x16.png': { width: 16, height: 16, description: 'Favicon 16x16' },
  'favicon-32x32.png': { width: 32, height: 32, description: 'Favicon 32x32' },
  'apple-touch-icon.png': { width: 180, height: 180, description: 'Apple Touch Icon' },
  'android-chrome-192x192.png': { width: 192, height: 192, description: 'Android Chrome 192' },
  'android-chrome-512x512.png': { width: 512, height: 512, description: 'Android Chrome 512' },
  
  // Images de structure
  'logo-cnbd-og.png': { width: 1200, height: 630, description: 'Logo CNBD pour Open Graph' },
  'logo-cnbd-square.png': { width: 400, height: 400, description: 'Logo CNBD carré' }
};

function checkImageOptimization() {
  const publicDir = path.join(__dirname, '../public');
  const imagesDir = path.join(publicDir, 'images');
  
  console.log('📁 Vérification du dossier public...');
  
  if (!fs.existsSync(publicDir)) {
    console.error('❌ Dossier public/ non trouvé');
    return false;
  }
  
  // Créer le dossier images s'il n'existe pas
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('✅ Dossier images/ créé');
  }
  
  // Vérifier les images existantes
  const existingImages = fs.readdirSync(publicDir).filter(file => 
    /\.(jpg|jpeg|png|webp|ico|svg)$/i.test(file)
  );
  
  console.log('🔍 Images trouvées dans public/ :');
  existingImages.forEach(img => {
    console.log(`   📷 ${img}`);
  });
  
  return true;
}

function generateImageManifest() {
  const manifest = {
    generateDate: new Date().toISOString(),
    requiredImages: requiredImages,
    recommendations: [
      "Toutes les images doivent être optimisées (WebP recommandé)",
      "Les images Open Graph doivent faire exactement 1200x630px",
      "Utiliser des images de haute qualité pour un meilleur SEO",
      "Compresser les images sans perte de qualité",
      "Ajouter des alt text descriptifs à toutes les images"
    ],
    seoGuidelines: {
      openGraph: {
        dimensions: "1200x630px",
        format: "JPG ou PNG",
        maxSize: "8MB (recommandé: <1MB)",
        purpose: "Partage sur réseaux sociaux"
      },
      favicon: {
        formats: ["ICO", "PNG"],
        sizes: ["16x16", "32x32", "48x48", "180x180"],
        purpose: "Identification du site dans les navigateurs"
      },
      twitter: {
        dimensions: "1200x600px",
        format: "JPG ou PNG",
        purpose: "Twitter Cards"
      }
    }
  };
  
  const manifestPath = path.join(__dirname, '../public/images-seo-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('📄 Manifest des images SEO créé : public/images-seo-manifest.json');
}

function generateHTMLImageTemplate() {
  const template = `<!-- Template HTML pour les images SEO optimisées -->

<!-- Open Graph Meta Tags -->
<meta property="og:image" content="/images/og-image-home.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="CNBD - Solutions Informatiques pour Entreprises" />
<meta property="og:image:type" content="image/jpeg" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:image" content="/images/twitter-card-home.jpg" />
<meta name="twitter:image:alt" content="CNBD - Solutions Informatiques pour Entreprises" />

<!-- Favicons (à placer dans public/) -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

<!-- Manifest pour PWA (optionnel) -->
<link rel="manifest" href="/site.webmanifest" />

<!-- Exemples d'images avec alt text SEO optimisé -->
<img 
  src="/images/solutions-informatiques.jpg" 
  alt="Solutions informatiques CNBD pour entreprises - Ordinateurs, serveurs, réseaux"
  width="800" 
  height="400"
  loading="lazy"
/>

<img 
  src="/images/telephonie-entreprise.jpg" 
  alt="Téléphonie d'entreprise CNBD - Solutions VoIP et communication unifiée"
  width="600" 
  height="400"
  loading="lazy"
/>`;

  const templatePath = path.join(__dirname, '../public/images-html-template.html');
  fs.writeFileSync(templatePath, template);
  console.log('📝 Template HTML créé : public/images-html-template.html');
}

function generateImageOptimizationGuide() {
  const guide = `# 🖼️ Guide d'Optimisation des Images SEO - CNBD

## Images Requises pour un SEO Optimal

### 1. Open Graph Images (1200x630px)
- **og-image-home.jpg** : Page d'accueil
- **og-image-services.jpg** : Page services  
- **og-image-solutions.jpg** : Page solutions
- **og-image-contact.jpg** : Page contact

### 2. Twitter Cards (1200x600px)
- **twitter-card-home.jpg** : Card principale

### 3. Favicons
- **favicon.ico** (32x32px)
- **favicon-16x16.png**
- **favicon-32x32.png** 
- **apple-touch-icon.png** (180x180px)
- **android-chrome-192x192.png**
- **android-chrome-512x512.png**

## 🎨 Recommandations de Design

### Open Graph
- Utiliser les couleurs de la marque CNBD (rouge #dc2626)
- Inclure le logo CNBD
- Texte lisible et contrasté
- Design professionnel et moderne

### Contenu Suggéré
- **Page d'accueil** : "CNBD - Solutions Informatiques pour Entreprises"
- **Services** : "Services IT Professionnels - Support 24/7"
- **Solutions** : "Solutions Informatiques & Bureautiques"
- **Contact** : "Contactez nos Experts IT"

## 🔧 Outils Recommandés

1. **Canva** : Templates Open Graph gratuits
2. **Figma** : Design professionnel
3. **TinyPNG** : Compression sans perte
4. **ImageOptim** : Optimisation locale

## 📏 Spécifications Techniques

### Open Graph
- Dimensions : 1200x630px exactement
- Format : JPG (qualité 85%) ou PNG
- Poids : < 1MB recommandé
- Ratio : 1.91:1

### Favicons
- ICO pour la compatibilité
- PNG pour la qualité
- Multiples tailles pour tous les appareils

## 🚀 Intégration

Les images doivent être placées dans :
- \`public/images/\` pour les Open Graph
- \`public/\` pour les favicons

Elles seront automatiquement intégrées via le système SEO.`;

  const guidePath = path.join(__dirname, '../IMAGE_SEO_GUIDE.md');
  fs.writeFileSync(guidePath, guide);
  console.log('📚 Guide créé : IMAGE_SEO_GUIDE.md');
}

// Exécution du script
function optimizeImagesSEO() {
  console.log('🎯 Début de l\'optimisation des images SEO...\n');
  
  if (!checkImageOptimization()) {
    console.error('❌ Échec de la vérification des images');
    return;
  }
  
  generateImageManifest();
  generateHTMLImageTemplate();
  generateImageOptimizationGuide();
  
  console.log('\n✅ Optimisation des images SEO terminée !');
  console.log('\n📋 Prochaines étapes :');
  console.log('1. Créer les images manquantes selon le guide');
  console.log('2. Optimiser les images existantes');
  console.log('3. Vérifier les alt text sur toutes les images');
  console.log('4. Tester avec les outils de validation Facebook/Twitter');
  console.log('\n🔗 Outils de test :');
  console.log('- Facebook Debugger : https://developers.facebook.com/tools/debug/');
  console.log('- Twitter Card Validator : https://cards-dev.twitter.com/validator');
  console.log('- Google Rich Results Test : https://search.google.com/test/rich-results');
}

optimizeImagesSEO(); 