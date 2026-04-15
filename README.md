# Trail Côtelettes — Site web

Site one-page pour l'association **Trail Côtelettes** — trail de 15 km à Thorey-Sous-Charny, Côte-d'Or (21).

- 📅 Samedi 30 mai 2026 — première édition
- 🌐 Inscriptions : [Miles Republic](https://fr.milesrepublic.com/event/cotelettes-15542)
- 📧 Contact : cotelettestrail@gmail.com
- 📷 [Instagram](https://www.instagram.com/cotelettes_trail/) · [Facebook](https://www.facebook.com/profile.php?id=61588005159588)

## Stack

HTML5 · CSS3 · JavaScript vanilla · pas de build step.

## Déploiement

Hébergé sur **Netlify** avec déploiement automatique : chaque push sur la branche `main` déclenche un redéploiement.

```bash
# Mettre à jour le site en production
git add .
git commit -m "Description de la modif"
git push
```

## Structure

```
site/
├── index.html          ← Page principale
├── styles.css          ← Styles (Nunito + DM Serif Display)
├── script.js           ← Nav active, burger mobile, formulaire contact
└── assets/
    ├── logo.jpg
    ├── cotelette-icon.jpeg
    └── partners/       ← Logos des partenaires
```
