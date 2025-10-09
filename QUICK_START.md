# Guide de Démarrage Rapide

Bienvenue ! Ce guide vous aidera à personnaliser et déployer votre portfolio en quelques étapes simples.

## 🎯 Checklist de Personnalisation

### 1. Informations Personnelles

Ouvrez `index.html` et remplacez :

- [ ] `{{NOM_PRENOM}}` → Votre nom complet (7 occurrences)
- [ ] `votre.email@example.com` → Votre email
- [ ] `https://github.com/votre-username` → Votre profil GitHub (3 occurrences)
- [ ] `https://linkedin.com/in/votre-profil` → Votre profil LinkedIn (3 occurrences)

**Astuce :** Utilisez la fonction "Rechercher et Remplacer" (Ctrl+H) de votre éditeur !

### 2. Photo de Profil

- [ ] Remplacez `assets/img/profile-placeholder.jpg` par votre photo
- [ ] Format recommandé : 400x400px, JPG ou PNG
- [ ] Gardez le même nom ou mettez à jour le chemin dans `index.html` ligne 60

### 3. CV

- [ ] Ajoutez votre CV au format PDF
- [ ] Nommez-le `cv.pdf` et placez-le à la racine du projet
- [ ] Ou modifiez le lien dans `index.html` (lignes 51 et 314)

### 4. Projets Personnels

Dans `index.html`, section `#projects` (lignes 224-289), mettez à jour les 3 cartes projet :

Pour chaque projet, modifiez :
- [ ] Icône (classe Font Awesome)
- [ ] Nom du projet
- [ ] Description
- [ ] Technologies utilisées
- [ ] Lien GitHub

### 5. Expériences Professionnelles (Optionnel)

Section `#experience` (lignes 177-222) :
- [ ] Mettez à jour les dates précises
- [ ] Ajoutez ou supprimez des tâches selon votre expérience
- [ ] Ajustez les titres de poste si nécessaire

### 6. Compétences (Optionnel)

Section `#skills` (lignes 91-175) :
- [ ] Ajustez les niveaux des barres de compétences (width: X%)
- [ ] Ajoutez ou supprimez des technologies
- [ ] Mettez à jour les technologies en apprentissage

## 🚀 Test Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez http://localhost:5173 dans votre navigateur.

## ✅ Avant de Déployer

- [ ] Tous les `{{placeholders}}` sont remplacés
- [ ] Votre photo est en place
- [ ] Votre CV est ajouté
- [ ] Les liens sociaux fonctionnent
- [ ] Les projets sont à jour
- [ ] Test local réussi : `npm run dev`
- [ ] Build réussi : `npm run build`

## 📤 Déploiement GitHub Pages

### Méthode Simple (5 minutes)

```bash
# 1. Créer un repository sur GitHub
#    Nommez-le : votre-username.github.io

# 2. Initialiser et pousser
git init
git add .
git commit -m "Initial commit - Mon portfolio"
git branch -M main
git remote add origin https://github.com/votre-username/votre-username.github.io.git
git push -u origin main

# 3. Activer GitHub Pages
#    GitHub.com → Votre repo → Settings → Pages
#    Source : main branch, / (root)
#    Save
```

Votre site sera disponible à : `https://votre-username.github.io`

Pour plus de détails, consultez [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Personnalisation Avancée

### Changer les Couleurs

Dans `assets/css/styles.css`, lignes 1-10 :

```css
:root {
    --bg: #0f1724;              /* Fond principal */
    --accent: #1e3a8a;          /* Couleur accent bleu */
    --accent-purple: #6b21a8;   /* Couleur accent violet */
    /* ... */
}
```

### Ajouter une Section

1. Copiez une section existante dans `index.html`
2. Modifiez l'ID et le contenu
3. Ajoutez un lien dans le menu de navigation
4. Les animations se feront automatiquement !

### Modifier les Animations

Dans `assets/css/styles.css`, recherchez `@keyframes` pour personnaliser les animations.

## 📚 Ressources

- [Documentation complète](./README.md)
- [Guide de déploiement détaillé](./DEPLOYMENT.md)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com)
- [Pexels (photos)](https://www.pexels.com)

## 🐛 Problèmes Courants

### Les images ne s'affichent pas localement

**Solution :** Utilisez `npm run dev` au lieu d'ouvrir directement `index.html`

### Le build échoue

**Solution :**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Les changements ne s'appliquent pas sur GitHub Pages

**Solution :**
1. Attendez 2-3 minutes
2. Videz le cache : Ctrl+Shift+R
3. Vérifiez que le commit a été poussé : `git log`

## 💡 Conseils

- **Testez toujours localement** avant de déployer
- **Faites des commits réguliers** avec des messages clairs
- **Gardez les sections concises** pour une meilleure lisibilité
- **Optimisez vos images** (max 500 Ko chacune)
- **Testez sur mobile** avec les outils développeur du navigateur

## 🎓 Prochaines Étapes

Après le déploiement :

1. [ ] Partagez le lien sur LinkedIn
2. [ ] Ajoutez l'URL dans votre CV
3. [ ] Testez sur différents navigateurs et appareils
4. [ ] Configurez un domaine personnalisé (optionnel)
5. [ ] Ajoutez Google Analytics (optionnel)

---

**Besoin d'aide ?** Consultez la [documentation complète](./README.md) ou le [guide de déploiement](./DEPLOYMENT.md).

Bonne chance avec votre portfolio ! 🎉
