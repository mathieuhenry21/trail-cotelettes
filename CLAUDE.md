# Trail Côtelettes — Site web

## Contexte

Site one-page de l'association qui organise le **Trail Côtelettes**, trail de 15 km à **Thorey-Sous-Charny** (Côte-d'Or, 21). Première édition : samedi 30 mai 2026.

- Email contact : `cotelettestrail@gmail.com`
- Inscriptions : https://fr.milesrepublic.com/event/cotelettes-15542
- Instagram : https://www.instagram.com/cotelettes_trail/
- Facebook : https://www.facebook.com/profile.php?id=61588005159588

## Site en production

**→ https://côtelettes.com**

- Hébergement : Netlify (plan Free), connecté à ce repo GitHub
- **Chaque `git push` sur `main` redéploie automatiquement le site** (≈ 30 s)
- DNS : géré chez Wix (registrar du domaine)
  - A `@` → `75.2.60.5` (load balancer Netlify)
  - CNAME `www` → `<nom-du-site>.netlify.app`
- HTTPS : Let's Encrypt via Netlify, renouvellement auto

## Stack

- HTML5 / CSS3 / JavaScript vanilla — **aucun framework, aucun build step**
- Fonts : Nunito + DM Serif Display (Google Fonts)
- Images hero / infos : Unsplash (libres de droit)
- Formulaire contact et bouton « Devenir partenaire » → `mailto:` (pas de backend)

## Structure

```
.
├── CLAUDE.md           ← Ce fichier (contexte pour Claude Code)
├── README.md
├── index.html          ← Toute la page (sections : hero, infos, programme, partenaires, contact)
├── styles.css          ← Styles
├── script.js           ← Nav active, burger mobile, formulaire contact
└── assets/
    ├── logo.jpg
    ├── cotelette-icon.jpeg   ← Icône des cartes programme
    └── partners/             ← Logos partenaires (cliquables dans la section partenaires)
```

## Prévisualiser en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Publier une modification

```bash
git add .
git commit -m "Description de la modif"
git push
```

Vérifier ensuite sur https://côtelettes.com (ou dans Netlify → Deploys).

## Règles pour les modifications

- Garder le site statique : pas de framework, pas de dépendance npm, pas d'étape de build.
- Tester le rendu mobile (burger menu, cartes, partenaires) avant de pousser.
- Ajouter un partenaire : déposer le logo dans `assets/partners/`, puis dupliquer un bloc partenaire existant dans `index.html` (lien + `alt`).
- Ne jamais committer de mot de passe, clé API ou donnée personnelle : tout ce qui est dans ce repo est publié sur le site.

## Coûts

| Poste | Coût |
|---|---|
| Hébergement Netlify (Free) | 0 € |
| Certificat HTTPS | 0 € |
| Nom de domaine (Wix) | ~15-20 €/an au renouvellement |

## Ressources

- Netlify : https://app.netlify.com
- Domaines Wix : https://www.wix.com/my-account/domains
- Vérif DNS : https://dnschecker.org
