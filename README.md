# 🎄 Liste de Noël 2026

La liste de Noël 2026 de Louis : une page statique (`index.html`), sans build ni dépendances.

## Lancer en local

Prérequis : `make` et `python3` (déjà présents sur macOS).

```bash
make serve        # http://localhost:8000
make open         # lance le serveur et ouvre le navigateur
make serve PORT=3000   # changer de port
```

`make help` liste toutes les commandes. `Ctrl+C` pour arrêter le serveur.

## Structure

```
.
├── index.html          # squelette de la page
├── css/
│   └── style.css       # tous les styles
├── js/
│   ├── items.js        # 🎁 la liste des cadeaux : c'est ici qu'on ajoute / modifie
│   ├── visuals.js      # illustrations SVG de chaque cadeau
│   ├── render.js       # génération des sections et du récap
│   ├── animations.js   # animations au scroll, carte holographique
│   ├── countdown.js    # compte à rebours jusqu'à Noël
│   ├── snow.js         # neige en canvas
│   └── music.js        # lecture de la musique
├── audio/
│   └── all-i-want-for-christmas-is-you.mp3
├── Makefile
└── README.md
```

Les scripts sont de simples `<script defer>` chargés dans cet ordre (pas de build ni de modules).
Ils partagent leurs constantes globales : par exemple `render.js` lit `ITEMS` et `VISUALS`.
