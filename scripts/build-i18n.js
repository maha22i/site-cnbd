const fs = require('fs');
const path = require('path');

console.log('🚀 Build Expert CNBD - Configuration i18n professionnelle');
console.log('📋 FR à la racine (/), EN sur /en/');

async function buildI18nStructure() {
  const outDir = path.join(__dirname, '../out');
  const frDir = path.join(outDir, 'fr');
  const enDir = path.join(outDir, 'en');
  
  try {
    // Vérifications préliminaires
    if (!fs.existsSync(outDir)) {
      throw new Error('❌ Dossier out/ non trouvé. Le build Next.js a-t-il réussi ?');
    }
    
    if (!fs.existsSync(frDir)) {
      throw new Error('❌ Dossier out/fr/ non trouvé. Vérifiez la configuration i18n.');
    }
    
    console.log('📁 Restructuration pour FR à la racine...');
    
    // Fonction pour copier récursivement
    function copyRecursiveSync(src, dest) {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      
      if (isDirectory) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach(function(childItemName) {
          copyRecursiveSync(
            path.join(src, childItemName),
            path.join(dest, childItemName)
          );
        });
      } else {
        fs.copyFileSync(src, dest);
      }
    }
    
    // Fonction pour corriger les liens dans un fichier HTML
    function fixLinksInFile(filePath) {
      if (!fs.existsSync(filePath) || !filePath.endsWith('.html')) {
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remplacer les liens /fr/ par / (pour les pages françaises à la racine)
      content = content.replace(/href="\/fr\//g, 'href="/');
      content = content.replace(/src="\/fr\//g, 'src="/');
      
      // Garder les liens /en/ intacts - ils sont déjà corrects
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    // Fonction pour traiter récursivement tous les fichiers HTML
    function processHtmlFiles(dir, isRoot = false) {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Ne pas traiter les dossiers fr/ et en/ à la racine
          if (isRoot && (item === 'fr' || item === 'en')) {
            return;
          }
          processHtmlFiles(itemPath, false);
        } else if (item.endsWith('.html')) {
          fixLinksInFile(itemPath);
        }
      });
    }
    
    // Étape 1: Copier tout le contenu français vers la racine
    console.log('📂 Copie du contenu français vers la racine...');
    const frItems = fs.readdirSync(frDir);
    
    frItems.forEach(item => {
      const srcPath = path.join(frDir, item);
      const destPath = path.join(outDir, item);
      
      // Éviter d'écraser les dossiers _next, en, etc.
      if (!fs.existsSync(destPath) || item.endsWith('.html')) {
        copyRecursiveSync(srcPath, destPath);
      }
    });
    
    // Étape 2: Corriger les liens dans tous les fichiers HTML à la racine
    console.log('🔧 Correction des liens internes...');
    processHtmlFiles(outDir, true);
    
    // Étape 3: Corriger aussi les liens dans les pages anglaises
    if (fs.existsSync(enDir)) {
      console.log('🇬🇧 Correction des liens dans les pages anglaises...');
      processHtmlFiles(enDir, false);
    }
    
    // Étape 4: Supprimer le dossier fr/ temporaire
    console.log('🗑️  Nettoyage du dossier /fr temporaire...');
    function removeRecursiveSync(dirPath) {
      if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
          const curPath = path.join(dirPath, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            removeRecursiveSync(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(dirPath);
      }
    }
    removeRecursiveSync(frDir);
    
    // Étape 5: Créer un manifest de build
    const manifest = {
      buildDate: new Date().toISOString(),
      structure: {
        defaultLanguage: 'fr',
        availableLanguages: ['fr', 'en'],
        paths: {
          french: '/',
          english: '/en/'
        }
      },
      optimization: {
        staticExport: true,
        i18nStructure: 'root-french-prefixed-english',
        seoOptimized: true
      }
    };
    
    fs.writeFileSync(
      path.join(outDir, 'build-manifest.json'), 
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('✅ Build i18n expert terminé avec succès !');
    console.log('🎯 Structure finale :');
    console.log('   📂 / (racine) → Contenu français');
    console.log('   📂 /en/ → Contenu anglais');
    console.log('   🔗 Navigation entre langues fonctionnelle');
    console.log('   📊 Manifest créé : build-manifest.json');
    
  } catch (error) {
    console.error('❌ Erreur lors de la restructuration i18n:', error.message);
    process.exit(1);
  }
}

// Exécution du script
buildI18nStructure(); 