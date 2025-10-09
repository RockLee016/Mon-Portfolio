# Guide de Déploiement - GitHub Pages

Ce guide détaille comment déployer votre portfolio sur GitHub Pages.

## Prérequis

- Un compte GitHub
- Git installé sur votre machine
- Votre portfolio personnalisé (placeholders remplacés)

## Étape 1 : Préparation du Repository

### 1.1 Créer un nouveau repository sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"New"** ou **"+"** en haut à droite
3. Nommez votre repository :
   - Pour un site personnel : `votre-username.github.io` (remplacez `votre-username` par votre nom d'utilisateur GitHub)
   - Pour un projet : `portfolio` ou `mon-portfolio`
4. Choisissez **Public** (obligatoire pour GitHub Pages gratuit)
5. Ne cochez PAS "Initialize with README"
6. Cliquez sur **"Create repository"**

### 1.2 Initialiser Git localement

```bash
# Naviguez vers le dossier de votre projet
cd chemin/vers/votre/portfolio

# Initialisez Git (si pas déjà fait)
git init

# Ajoutez tous les fichiers
git add .

# Faites votre premier commit
git commit -m "Initial commit - Portfolio professionnel"

# Renommez la branche en 'main' (si nécessaire)
git branch -M main

# Ajoutez le repository distant
git remote add origin https://github.com/votre-username/votre-repository.git

# Poussez votre code
git push -u origin main
```

## Étape 2 : Configuration de GitHub Pages

### Méthode A : Déploiement depuis la branche main (Recommandé)

1. Allez sur votre repository GitHub
2. Cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"** :
   - Sélectionnez la branche : **main**
   - Sélectionnez le dossier : **/ (root)**
5. Cliquez sur **"Save"**

Votre site sera accessible à :
- Repository nommé `username.github.io` : `https://username.github.io/`
- Autre nom de repository : `https://username.github.io/nom-du-repository/`

### Méthode B : Déploiement avec GitHub Actions (Avancé)

Pour un déploiement automatique avec build Vite :

1. Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Dans les paramètres GitHub Pages, sélectionnez **"GitHub Actions"** comme source

## Étape 3 : Mise à Jour du Site

Pour mettre à jour votre portfolio après des modifications :

```bash
# Ajoutez vos modifications
git add .

# Créez un commit
git commit -m "Mise à jour : description des changements"

# Poussez vers GitHub
git push origin main
```

GitHub Pages mettra automatiquement à jour votre site (1-2 minutes).

## Étape 4 : Configuration d'un Domaine Personnalisé (Optionnel)

### 4.1 Acheter un domaine

Achetez un domaine chez un registrar (Namecheap, Google Domains, OVH, etc.)

### 4.2 Configurer les DNS

Ajoutez ces enregistrements DNS chez votre registrar :

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: votre-username.github.io
```

### 4.3 Configurer GitHub Pages

1. Dans les paramètres GitHub Pages
2. Section **"Custom domain"**
3. Entrez votre domaine : `votredomaine.com`
4. Cochez **"Enforce HTTPS"** (après propagation DNS)
5. Sauvegardez

La propagation DNS peut prendre 24-48 heures.

## Dépannage

### Le site ne s'affiche pas correctement

**Problème :** Les liens vers les assets ne fonctionnent pas

**Solution :** Si votre repository n'est PAS nommé `username.github.io`, vous devez configurer la base URL dans `vite.config.ts` :

```typescript
export default defineConfig({
  base: '/nom-de-votre-repository/',
  // ... reste de la config
});
```

Puis rebuild :
```bash
npm run build
git add dist/
git commit -m "Fix: Update base URL"
git push
```

### Erreur 404 sur GitHub Pages

**Problème :** Page 404 après déploiement

**Solutions :**
1. Vérifiez que le fichier `index.html` est bien à la racine du dossier sélectionné
2. Attendez 2-3 minutes après la première configuration
3. Videz le cache de votre navigateur (Ctrl+Shift+R)

### Les modifications ne s'appliquent pas

**Problème :** Le site ne se met pas à jour

**Solutions :**
1. Vérifiez que vos commits ont bien été poussés : `git log --oneline`
2. Attendez 2-3 minutes pour la propagation
3. Videz le cache du navigateur
4. Vérifiez l'onglet "Actions" sur GitHub pour voir si le build a réussi

### Images ne se chargent pas

**Problème :** Les images ne s'affichent pas

**Solutions :**
1. Vérifiez les chemins des images dans `index.html`
2. Assurez-vous que les fichiers image sont bien dans le repository
3. Vérifiez la casse des noms de fichiers (sensible sur les serveurs)

## Vérifications Finales

Avant de déployer, vérifiez :

- ✅ Tous les placeholders `{{}}` sont remplacés
- ✅ Votre photo de profil est ajoutée
- ✅ Votre CV PDF est présent
- ✅ Les liens email, GitHub, LinkedIn sont corrects
- ✅ Les projets personnels sont à jour
- ✅ Le site est testé localement : `npm run dev`
- ✅ Le build fonctionne : `npm run build`

## Commandes Utiles

```bash
# Tester le site localement
npm run dev

# Builder le site
npm run build

# Prévisualiser le build
npm run preview

# Voir l'historique Git
git log --oneline

# Annuler le dernier commit (garde les modifications)
git reset --soft HEAD~1

# Voir les fichiers modifiés
git status
```

## Support

Si vous rencontrez des problèmes :

1. Consultez la [documentation GitHub Pages](https://docs.github.com/pages)
2. Vérifiez l'onglet "Actions" sur GitHub pour les logs d'erreur
3. Consultez les [forums GitHub Community](https://github.community)

---

Bon déploiement ! 🚀
