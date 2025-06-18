# 🚀 Guide de Build CNBD - Configuration Expert

## 📋 Aperçu

Ce projet utilise une configuration i18n professionnelle avec :
- **Français à la racine** (`/`) pour le SEO optimal
- **Anglais sur `/en/`** pour la version internationale
- Build automatique et optimisé pour OVH

## 🛠️ Commandes de Build

### Build Complet (Recommandé)
```bash
npm run build
```
Exécute le build Next.js + restructuration i18n automatique

### Build par Étapes
```bash
# Nettoyer les anciens builds
npm run clean

# Build Next.js uniquement
npm run build:next

# Restructuration i18n uniquement (après build:next)
npm run build:i18n

# Déploiement complet
npm run deploy
```

### Prévisualisation Locale
```bash
npm run preview
```
Build + serveur local pour tester

## 📁 Structure Générée

```
out/
├── index.html              # Page d'accueil française
├── contact/                # Pages françaises à la racine
├── services/
├── solutions/
├── en/                     # Version anglaise
│   ├── index.html
│   ├── contact/
│   └── services/
├── _next/                  # Assets Next.js
├── images/
├── .htaccess              # Configuration Apache
└── build-manifest.json    # Info du build
```

## 🌐 URLs Finales

- `cnbd.fr/` → Site français (défaut)
- `cnbd.fr/contact/` → Contact français
- `cnbd.fr/en/` → Site anglais
- `cnbd.fr/en/contact/` → Contact anglais

## 🔧 Optimisations Incluses

### Performance
- ✅ Compression GZIP
- ✅ Cache des ressources statiques
- ✅ Optimisation des images
- ✅ Minification CSS/JS

### SEO
- ✅ Français à la racine pour le marché principal
- ✅ URLs propres et canoniques
- ✅ Redirections 301 pour /fr/ → /

### Sécurité
- ✅ Headers de sécurité
- ✅ Protection XSS
- ✅ Content Security Policy
- ✅ Blocage des fichiers sensibles

## 📤 Déploiement sur OVH

1. **Build local**
   ```bash
   npm run deploy
   ```

2. **Upload via FileZilla**
   - Transférer tout le contenu de `out/` vers `/www/`
   - Le `.htaccess` sera automatiquement inclus

3. **Activation SSL** (Interface OVH)
   - Hébergements → SSL → Activer Let's Encrypt
   - Décommenter les lignes HTTPS dans `.htaccess`

## 🐛 Dépannage

### Problème : "Dossier out/fr/ non trouvé"
**Solution :** Le build Next.js a échoué
```bash
npm run clean
npm run build:next
```

### Problème : "Scripts/build-i18n.js non trouvé"
**Solution :** Créer le dossier scripts
```bash
mkdir -p scripts
npm run build
```

### Problème : Site affiche encore /fr/ dans l'URL
**Solution :** Vider le cache navigateur ou mode incognito

## 📊 Monitoring

Après chaque build, consultez `build-manifest.json` pour :
- Date du build
- Structure générée
- Optimisations appliquées

## 🔄 Workflow de Développement

1. **Développement** : `npm run dev`
2. **Test local** : `npm run preview`
3. **Déploiement** : `npm run deploy` + upload

## 📞 Support

En cas de problème :
1. Vérifier les logs de build
2. Consulter `build-manifest.json`
3. Tester avec `npm run preview`

---

🎯 **Configuration Expert par CNBD Tech Team** 