# Guide de Déploiement GitHub Pages

## 🚀 Activation de GitHub Pages

Pour activer le déploiement automatique sur GitHub Pages :

1. **Aller dans les paramètres du repository**
   - Cliquez sur `Settings` dans votre repository GitHub
   - Dans le menu de gauche, cliquez sur `Pages`

2. **Configurer la source**
   - Sous "Source", sélectionnez `GitHub Actions`
   - Le workflow se déclenchera automatiquement à chaque push sur `main`

3. **Vérifier le déploiement**
   - Allez dans l'onglet `Actions` de votre repository
   - Vous verrez le workflow "Deploy to GitHub Pages" s'exécuter
   - Une fois terminé, votre site sera disponible à :
     `https://emd-228.github.io/my-portfolio/`

## 📝 Notes importantes

- Le workflow se déclenche automatiquement à chaque push sur la branche `main`
- Le build prend généralement 1-2 minutes
- La première fois, vous devez activer GitHub Pages dans les paramètres
- L'URL de votre site sera : `https://[votre-username].github.io/my-portfolio/`

## 🔧 Configuration Vite

Le fichier `vite.config.js` est configuré avec le base path `/my-portfolio/` pour la production.
Si vous changez le nom du repository, mettez à jour cette valeur dans `vite.config.js`.

## 🐛 Dépannage

Si le déploiement échoue :
1. Vérifiez les logs dans l'onglet `Actions`
2. Assurez-vous que GitHub Pages est activé dans les paramètres
3. Vérifiez que les permissions du workflow sont correctes (elles le sont par défaut)

