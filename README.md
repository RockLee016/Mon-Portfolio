# Portfolio Personnel - Site Web

Portfolio professionnel moderne et responsive pour développeur web & mobile full-stack.

## Caractéristiques

- 🎨 Design moderne avec dégradé bleu → violet
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ⚡ Performance optimisée
- ♿ Accessible (WCAG)
- 🌐 Contenu en français
- 🎭 Animations fluides et micro-interactions

## Structure du Site

1. **Accueil** - Hero section avec présentation
2. **À propos** - Parcours et expérience professionnelle
3. **Compétences** - Technologies et outils maîtrisés
4. **Expérience** - Timeline des expériences professionnelles
5. **Projets** - Portfolio de projets personnels
6. **Contact** - Formulaire de contact et liens sociaux

## Technologies Utilisées

- HTML5 sémantique
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript vanilla (ES6+)
- Google Fonts (Poppins)
- Font Awesome (icônes)

## Installation et Utilisation Locale

### Prérequis

Aucun prérequis nécessaire. Le site est un site statique HTML/CSS/JS pur.

### Lancement local

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/votre-portfolio.git
cd votre-portfolio
```

2. Ouvrez le fichier `index.html` dans votre navigateur, ou utilisez un serveur local :

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Puis ouvrez http://localhost:8000
```

**Avec Node.js (http-server) :**
```bash
npx http-server -p 8000
```

**Avec PHP :**
```bash
php -S localhost:8000
```

## Personnalisation

### 1. Remplacer les placeholders

Recherchez et remplacez les placeholders suivants dans `index.html` :

- `{{NOM_PRENOM}}` - Votre nom et prénom
- `{{PHOTO_URL}}` - Chemin vers votre photo de profil
- `votre.email@example.com` - Votre adresse email
- `votre-username` - Votre nom d'utilisateur GitHub
- `votre-profil` - Votre profil LinkedIn

### 2. Ajouter votre photo

Remplacez le fichier `assets/img/profile-placeholder.jpg` par votre propre photo.

### 3. Ajouter votre CV

Placez votre CV au format PDF dans le dossier racine sous le nom `cv.pdf`.

### 4. Mettre à jour les projets

Dans la section `#projects` du fichier `index.html`, modifiez les trois projets d'exemple avec vos propres projets.

### 5. Personnaliser les couleurs

Dans `assets/css/styles.css`, modifiez les variables CSS dans `:root` :

```css
:root {
    --bg: #0f1724;              /* Couleur de fond principale */
    --accent: #1e3a8a;          /* Couleur d'accent (bleu) */
    --accent-purple: #6b21a8;   /* Couleur d'accent (violet) */
    /* ... autres variables */
}
```

## Déploiement sur GitHub Pages

### Méthode 1 : Via les paramètres du repository

1. Poussez votre code sur GitHub :
```bash
git add .
git commit -m "Initial commit - Portfolio site"
git branch -M main
git remote add origin https://github.com/votre-username/votre-portfolio.git
git push -u origin main
```

2. Allez dans les paramètres de votre repository GitHub
3. Dans la section "Pages" (menu de gauche)
4. Sous "Source", sélectionnez la branche `main` et le dossier `/ (root)`
5. Cliquez sur "Save"
6. Votre site sera accessible à `https://votre-username.github.io/votre-portfolio/`

### Méthode 2 : Via la branche gh-pages

1. Créez et déployez sur la branche `gh-pages` :
```bash
git add .
git commit -m "Initial commit - Portfolio site"
git checkout -b gh-pages
git push -u origin gh-pages
```

2. Allez dans les paramètres de votre repository
3. Dans la section "Pages", la branche `gh-pages` devrait être automatiquement détectée
4. Votre site sera accessible à `https://votre-username.github.io/votre-portfolio/`

### Mise à jour du site

Pour mettre à jour votre site après des modifications :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push origin main  # ou gh-pages selon votre configuration
```

Les changements seront automatiquement déployés par GitHub Pages (peut prendre 1-2 minutes).

## Structure des Fichiers

```
portfolio/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── styles.css      # Styles CSS
│   ├── js/
│   │   └── main.js         # JavaScript
│   └── img/
│       └── profile-placeholder.jpg  # Photo de profil
├── cv.pdf                  # Votre CV (à ajouter)
└── README.md               # Ce fichier
```

## Fonctionnalités JavaScript

- Menu hamburger responsive pour mobile
- Défilement fluide vers les sections
- Mise en évidence automatique du menu selon la section visible
- Animations au défilement (fade-up)
- Validation du formulaire de contact
- Barres de compétences animées

## Support Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Opera (dernière version)

## Accessibilité

Le site respecte les bonnes pratiques d'accessibilité :
- Contraste des couleurs conforme WCAG
- Navigation au clavier
- Attributs ARIA pour les éléments interactifs
- Textes alternatifs pour les images
- HTML sémantique

## Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## Contact

Pour toute question, contactez-moi via le formulaire de contact sur le site ou par email.

---

Créé avec ❤️ pour un portfolio professionnel moderne
