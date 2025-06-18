# 🔧 Configuration Variables d'Environnement SEO

## Variables Requises pour le SEO

Créez un fichier `.env.local` à la racine avec ces variables :

```bash
# Google Analytics 4 (obligatoire pour le tracking)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager (optionnel mais recommandé)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Search Console (pour la vérification)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code

# Microsoft Bing (optionnel)
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-verification-code

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://cnbd.fr
NEXT_PUBLIC_SITE_NAME=CNBD

# Réseaux sociaux
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/cnbd
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/cnbd
NEXT_PUBLIC_TWITTER_HANDLE=@CNBD_official

# Contact
NEXT_PUBLIC_PHONE_MAIN=+33-1-43-62-16-03
NEXT_PUBLIC_PHONE_MOBILE=+33-6-67-36-02-80
NEXT_PUBLIC_EMAIL=contact@cnbd.fr

# Adresse
NEXT_PUBLIC_ADDRESS_STREET=64, allée de la main ferme
NEXT_PUBLIC_ADDRESS_CITY=Les Pavillons sous Bois
NEXT_PUBLIC_ADDRESS_POSTAL=93320
NEXT_PUBLIC_ADDRESS_REGION=Île-de-France
NEXT_PUBLIC_ADDRESS_COUNTRY=FR
```

## 📋 Configuration Étape par Étape

### 1. Google Analytics 4
1. Aller sur [Google Analytics](https://analytics.google.com/)
2. Créer une propriété pour cnbd.fr
3. Copier l'ID de mesure (G-XXXXXXXXXX)
4. L'ajouter dans `.env.local`

### 2. Google Tag Manager (Optionnel)
1. Aller sur [Google Tag Manager](https://tagmanager.google.com/)
2. Créer un conteneur pour cnbd.fr
3. Copier l'ID (GTM-XXXXXXX)
4. L'ajouter dans `.env.local`

### 3. Google Search Console
1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter cnbd.fr comme propriété
3. Choisir "Vérification par balise HTML"
4. Copier le code de vérification
5. L'ajouter dans `.env.local`

### 4. Microsoft Bing Webmaster
1. Aller sur [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Ajouter cnbd.fr
3. Utiliser la vérification par balise meta
4. Copier le code et l'ajouter dans `.env.local`

## 🔄 Après Configuration

1. Redémarrer le serveur de développement : `npm run dev`
2. Vérifier que les analytics fonctionnent
3. Tester avec les outils de développement du navigateur
4. Soumettre le sitemap à Google Search Console

## 🚀 Déploiement Production

N'oubliez pas d'ajouter ces variables sur votre plateforme de déploiement (Vercel, Netlify, etc.) ou dans votre serveur de production. 