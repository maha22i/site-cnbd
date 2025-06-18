const fs = require('fs');
const path = require('path');

console.log('🔍 Validation SEO Complète - CNBD');
console.log('=====================================\n');

class SEOValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.successes = [];
    this.outDir = path.join(__dirname, '../out');
  }

  // Ajouter un résultat
  addResult(type, message, details = '') {
    const result = { message, details, timestamp: new Date().toISOString() };
    
    switch (type) {
      case 'error':
        this.errors.push(result);
        console.log(`❌ ${message}`);
        if (details) console.log(`   ${details}`);
        break;
      case 'warning':
        this.warnings.push(result);
        console.log(`⚠️  ${message}`);
        if (details) console.log(`   ${details}`);
        break;
      case 'success':
        this.successes.push(result);
        console.log(`✅ ${message}`);
        if (details) console.log(`   ${details}`);
        break;
    }
  }

  // Vérifier la structure des fichiers
  checkFileStructure() {
    console.log('\n📁 Vérification de la structure des fichiers...');
    
    // Vérifier le dossier out
    if (!fs.existsSync(this.outDir)) {
      this.addResult('error', 'Dossier out/ manquant', 'Exécutez npm run build d\'abord');
      return false;
    }
    this.addResult('success', 'Dossier out/ trouvé');

    // Vérifier les fichiers SEO essentiels
    const requiredFiles = [
      'sitemap.xml',
      'robots.txt',
      'index.html',
      'build-manifest.json'
    ];

    requiredFiles.forEach(file => {
      const filePath = path.join(this.outDir, file);
      if (fs.existsSync(filePath)) {
        this.addResult('success', `${file} présent`);
      } else {
        this.addResult('error', `${file} manquant`, `Fichier requis pour le SEO`);
      }
    });

    return true;
  }

  // Vérifier le sitemap.xml
  checkSitemap() {
    console.log('\n🗺️ Vérification du sitemap.xml...');
    
    const sitemapPath = path.join(this.outDir, 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      this.addResult('error', 'sitemap.xml manquant');
      return;
    }

    try {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      
      // Vérifier le contenu XML
      if (sitemapContent.includes('<?xml')) {
        this.addResult('success', 'Sitemap XML valide');
      } else {
        this.addResult('error', 'Sitemap XML malformé');
      }

      // Compter les URLs
      const urlMatches = sitemapContent.match(/<url>/g);
      const urlCount = urlMatches ? urlMatches.length : 0;
      
      if (urlCount > 0) {
        this.addResult('success', `${urlCount} URLs trouvées dans le sitemap`);
      } else {
        this.addResult('warning', 'Aucune URL trouvée dans le sitemap');
      }

      // Vérifier les URLs hreflang
      if (sitemapContent.includes('hreflang')) {
        this.addResult('success', 'Attributs hreflang présents (bon pour i18n)');
      } else {
        this.addResult('warning', 'Attributs hreflang manquants');
      }

    } catch (error) {
      this.addResult('error', 'Erreur lecture sitemap.xml', error.message);
    }
  }

  // Vérifier robots.txt
  checkRobots() {
    console.log('\n🤖 Vérification du robots.txt...');
    
    const robotsPath = path.join(this.outDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      this.addResult('error', 'robots.txt manquant');
      return;
    }

    try {
      const robotsContent = fs.readFileSync(robotsPath, 'utf8');
      
      // Vérifications essentielles
      if (robotsContent.includes('Sitemap:')) {
        this.addResult('success', 'Référence au sitemap présente');
      } else {
        this.addResult('error', 'Référence au sitemap manquante');
      }

      if (robotsContent.includes('User-agent: *')) {
        this.addResult('success', 'Directive User-agent globale présente');
      } else {
        this.addResult('warning', 'Directive User-agent globale manquante');
      }

      if (robotsContent.includes('Allow: /')) {
        this.addResult('success', 'Autorisation d\'indexation présente');
      } else {
        this.addResult('warning', 'Autorisation d\'indexation explicite manquante');
      }

    } catch (error) {
      this.addResult('error', 'Erreur lecture robots.txt', error.message);
    }
  }

  // Vérifier les métadonnées des pages principales
  checkMetadata() {
    console.log('\n📋 Vérification des métadonnées...');
    
    const pagesChecked = ['index.html', 'en/index.html'];
    
    pagesChecked.forEach(page => {
      const pagePath = path.join(this.outDir, page);
      if (!fs.existsSync(pagePath)) {
        this.addResult('warning', `Page ${page} non trouvée`);
        return;
      }

      try {
        const content = fs.readFileSync(pagePath, 'utf8');
        const pageName = page === 'index.html' ? 'Accueil FR' : 'Accueil EN';
        
        // Vérifier les métadonnées essentielles
        const checks = [
          { pattern: /<title>(.+?)<\/title>/, name: 'Title' },
          { pattern: /<meta[^>]+name="description"[^>]+content="([^"]+)"/, name: 'Description' },
          { pattern: /<meta[^>]+name="keywords"[^>]+content="([^"]+)"/, name: 'Keywords' },
          { pattern: /<meta[^>]+property="og:title"[^>]+content="([^"]+)"/, name: 'Open Graph Title' },
          { pattern: /<meta[^>]+property="og:description"[^>]+content="([^"]+)"/, name: 'Open Graph Description' },
          { pattern: /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/, name: 'Open Graph Image' },
          { pattern: /<meta[^>]+name="twitter:card"[^>]+content="([^"]+)"/, name: 'Twitter Card' },
          { pattern: /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/, name: 'Canonical URL' }
        ];

        checks.forEach(check => {
          const match = content.match(check.pattern);
          if (match) {
            this.addResult('success', `${check.name} présent (${pageName})`);
          } else {
            this.addResult('error', `${check.name} manquant (${pageName})`);
          }
        });

        // Vérifier Schema.org JSON-LD
        if (content.includes('application/ld+json')) {
          this.addResult('success', `Schema markup présent (${pageName})`);
        } else {
          this.addResult('warning', `Schema markup manquant (${pageName})`);
        }

      } catch (error) {
        this.addResult('error', `Erreur lecture ${page}`, error.message);
      }
    });
  }

  // Vérifier les images
  checkImages() {
    console.log('\n🖼️ Vérification des images...');
    
    const publicDir = path.join(__dirname, '../public');
    const requiredImages = [
      'logo-cnbd.png',
      'favicon.ico',
      'france.png',
      'anglais.png'
    ];

    requiredImages.forEach(image => {
      const imagePath = path.join(publicDir, image);
      if (fs.existsSync(imagePath)) {
        this.addResult('success', `Image ${image} présente`);
      } else {
        this.addResult('warning', `Image ${image} manquante`);
      }
    });

    // Vérifier les images Open Graph
    const ogImages = [
      'images/og-image-home.jpg',
      'images/og-image-services.jpg',
      'images/og-image-solutions.jpg'
    ];

    ogImages.forEach(image => {
      const imagePath = path.join(publicDir, image);
      if (fs.existsSync(imagePath)) {
        this.addResult('success', `Image OG ${image} présente`);
      } else {
        this.addResult('warning', `Image OG ${image} manquante`, 'Créez ces images pour améliorer le partage sur les réseaux sociaux');
      }
    });
  }

  // Vérifier la performance
  checkPerformance() {
    console.log('\n⚡ Vérification des optimisations de performance...');
    
    const indexPath = path.join(this.outDir, 'index.html');
    if (!fs.existsSync(indexPath)) {
      this.addResult('error', 'index.html non trouvé pour vérification performance');
      return;
    }

    try {
      const content = fs.readFileSync(indexPath, 'utf8');
      
      // Vérifications de performance
      const perfChecks = [
        { pattern: /preload/, name: 'Ressources préchargées', type: 'success' },
        { pattern: /dns-prefetch/, name: 'DNS Prefetch activé', type: 'success' },
        { pattern: /loading="lazy"/, name: 'Lazy loading images', type: 'success' },
        { pattern: /defer|async/, name: 'Scripts optimisés', type: 'success' }
      ];

      perfChecks.forEach(check => {
        if (content.match(check.pattern)) {
          this.addResult(check.type, check.name);
        } else {
          this.addResult('warning', `${check.name} manquant`);
        }
      });

    } catch (error) {
      this.addResult('error', 'Erreur vérification performance', error.message);
    }
  }

  // Générer le rapport final
  generateReport() {
    console.log('\n📊 RAPPORT SEO FINAL');
    console.log('====================');
    
    const total = this.errors.length + this.warnings.length + this.successes.length;
    const score = Math.round((this.successes.length / total) * 100);
    
    console.log(`\n🎯 Score SEO: ${score}%`);
    console.log(`✅ Succès: ${this.successes.length}`);
    console.log(`⚠️  Avertissements: ${this.warnings.length}`);
    console.log(`❌ Erreurs: ${this.errors.length}`);

    // Recommandations basées sur le score
    if (score >= 90) {
      console.log('\n🏆 Excellent ! Votre site est très bien optimisé pour le SEO.');
    } else if (score >= 70) {
      console.log('\n👍 Bon travail ! Quelques améliorations mineures possibles.');
    } else if (score >= 50) {
      console.log('\n⚠️  Des améliorations sont nécessaires pour un meilleur SEO.');
    } else {
      console.log('\n🚨 Attention ! Des corrections importantes sont requises.');
    }

    // Sauvegarder le rapport
    const report = {
      date: new Date().toISOString(),
      score: score,
      total: total,
      results: {
        successes: this.successes,
        warnings: this.warnings,
        errors: this.errors
      },
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.outDir, 'seo-validation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Rapport détaillé sauvegardé : out/seo-validation-report.json`);

    return score >= 70; // Retourne true si le score est acceptable
  }

  // Générer des recommandations
  generateRecommendations() {
    const recommendations = [];
    
    if (this.errors.length > 0) {
      recommendations.push('Corriger toutes les erreurs critiques identifiées');
    }
    
    if (this.warnings.length > 5) {
      recommendations.push('Traiter les avertissements pour améliorer le score SEO');
    }
    
    recommendations.push('Configurer Google Search Console et soumettre le sitemap');
    recommendations.push('Créer les images Open Graph manquantes');
    recommendations.push('Tester régulièrement avec Lighthouse et PageSpeed Insights');
    recommendations.push('Surveiller les Core Web Vitals');
    
    return recommendations;
  }

  // Exécuter toutes les validations
  runFullValidation() {
    console.log('🚀 Démarrage de la validation SEO complète...\n');
    
    if (!this.checkFileStructure()) {
      console.log('\n❌ Validation interrompue : structure de fichiers invalide');
      return false;
    }
    
    this.checkSitemap();
    this.checkRobots();
    this.checkMetadata();
    this.checkImages();
    this.checkPerformance();
    
    return this.generateReport();
  }
}

// Exécuter la validation
const validator = new SEOValidator();
const success = validator.runFullValidation();

console.log('\n🔗 Liens utiles pour tester votre SEO :');
console.log('• Google Search Console: https://search.google.com/search-console');
console.log('• Google Rich Results Test: https://search.google.com/test/rich-results');
console.log('• Facebook Debugger: https://developers.facebook.com/tools/debug/');
console.log('• Twitter Card Validator: https://cards-dev.twitter.com/validator');
console.log('• PageSpeed Insights: https://pagespeed.web.dev/');

process.exit(success ? 0 : 1); 