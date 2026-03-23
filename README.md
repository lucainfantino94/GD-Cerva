# Grupo Desportivo de Cerva — Site oficial

Site web officiel du **Grupo Desportivo de Cerva**, club de football de Cerva, Portugal.

## Structure

```
GD-Cerva/
├── index.html          → Page d'accueil (actualités + prochains matchs)
├── equipe.html         → Équipe & joueurs
├── calendrier.html     → Calendrier & résultats
├── galerie.html        → Galerie photos
├── contact.html        → Contact & localisation
├── css/
│   └── style.css       → Styles globaux
├── js/
│   └── main.js         → Menu mobile + lightbox galerie
└── images/
    └── logo.png        → Logo du club (à ajouter)
```

## Comment modifier le contenu

### Ajouter des joueurs (`equipe.html`)
Copie-colle un bloc `.player-card` et remplis les infos :
```html
<div class="player-card">
  <img src="images/nom-joueur.jpg" alt="Nom du joueur">
  <div class="player-info">
    <div class="player-number">#7</div>
    <div class="player-name">Prénom Nom</div>
    <div class="player-pos">Ailier</div>
  </div>
</div>
```

### Ajouter des matchs (`calendrier.html`)
Pour un prochain match :
```html
<div class="match-item">
  <div>
    <div class="match-teams">GD Cerva vs Adversaire</div>
    <div class="match-info">Date · Heure · Lieu</div>
  </div>
  <span class="match-score upcoming">Em breve</span>
</div>
```

Pour un résultat :
```html
<tr>
  <td>Date</td>
  <td>GD Cerva vs Adversaire</td>
  <td>2 - 1</td>
  <td>Casa</td>
  <td><span class="badge badge-win">V</span></td>
</tr>
```
Badges disponibles : `badge-win` (victoire), `badge-loss` (défaite), `badge-draw` (nul)

### Ajouter des photos (`galerie.html`)
1. Place tes photos dans le dossier `images/`
2. Remplace les placeholders par :
```html
<img src="images/ma-photo.jpg" alt="Description" onclick="openLightbox(this)">
```

### Mettre à jour le logo
Place ton logo dans `images/` sous le nom `logo.png` (ou `logo.jpg`).
Si c'est un JPG, change dans tous les fichiers HTML :
```html
<img src="images/logo.jpg" alt="Logo GD Cerva">
```

### Mettre à jour le plan Google Maps (`contact.html`)
1. Va sur [maps.google.com](https://maps.google.com)
2. Cherche "Campo Municipal de Cerva"
3. Clique sur "Partilhar" → "Incorporar um mapa"
4. Copie l'URL dans l'attribut `src` de l'`<iframe>`

## Déploiement sur GitHub Pages

```bash
git add .
git commit -m "Mise à jour du site"
git push origin main
```

Le site sera en ligne sur : `https://TON_USERNAME.github.io/GD-Cerva/`

Pour activer GitHub Pages :
1. Va sur ton repo GitHub
2. Settings → Pages
3. Source : `main` branch → `/` (root)
4. Save
