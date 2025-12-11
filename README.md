# Portfolio - Kokou DENYO

Portfolio moderne et interactif développé avec Vue.js 3, Tailwind CSS et système de traduction bilingue (FR/EN).

## ✨ Fonctionnalités

- 🌐 **Traduction bilingue** - Français et Anglais avec persistance de la langue
- 📱 **Design responsive** - Mobile-first avec navigation adaptative
- 🎨 **UI moderne** - Design sombre avec accents dorés (#D4A574)
- ⚡ **Performance optimisée** - Vite pour un build rapide
- 🔄 **Composants réutilisables** - Architecture modulaire et maintenable
- 📊 **Données centralisées** - Toutes les informations dans un fichier JSON
- 🚀 **Déploiement automatique** - GitHub Actions déploie sur GitHub Pages à chaque push

## 🚀 Installation

```bash
npm install
```

## 📦 Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build

Créer une version de production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

## 👀 Preview

Prévisualiser la version de production :

```bash
npm run preview
```

## 🛠️ Technologies

- **Vue.js 3** - Framework JavaScript progressif avec Composition API
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Composables Vue** - Gestion de l'état et de la traduction

## 📁 Structure du Projet

```
Mon_portfolio/
├── src/
│   ├── components/      # Composants Vue réutilisables
│   ├── composables/     # Composables (usePortfolio)
│   ├── data/            # Données JSON (portfolio.json)
│   ├── App.vue          # Composant principal
│   └── main.js          # Point d'entrée
├── public/              # Fichiers statiques
└── package.json         # Dépendances
```

## 🌍 Traduction

Le système de traduction utilise :
- Un fichier JSON centralisé (`src/data/portfolio.json`)
- Un composable `usePortfolio` pour gérer la langue
- Persistance dans localStorage
- Sélecteur de langue dans le header

## 📝 Personnalisation

Toutes les données sont centralisées dans `src/data/portfolio.json`. Modifiez ce fichier pour :
- Mettre à jour vos informations personnelles
- Ajouter/modifier des projets
- Traduire les textes
- Personnaliser le contenu

## 👤 Auteur

**Kokou DENYO**
- 📧 Email : emmanuel.kouassi@email.com
- 💼 LinkedIn : [linkedin.com/in/emmanuel-kouassi](https://linkedin.com/in/emmanuel-kouassi)
- 🐙 GitHub : [github.com/emmanuel-kouassi](https://github.com/emmanuel-kouassi)
- 📍 Localisation : Lomé, Togo

## 🚀 Déploiement

Le projet est configuré avec GitHub Actions pour un déploiement automatique sur GitHub Pages.

### Activation

1. Allez dans `Settings` > `Pages` de votre repository
2. Sélectionnez `GitHub Actions` comme source
3. Le workflow se déclenchera automatiquement à chaque push sur `main`

Votre site sera disponible à : `https://emd-228.github.io/my-portfolio/`

Pour plus de détails, consultez [.github/DEPLOYMENT.md](.github/DEPLOYMENT.md)

## 📄 Licence

Ce projet est sous licence personnelle. Tous droits réservés.

