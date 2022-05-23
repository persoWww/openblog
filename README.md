
# SETUP

 - dans le terminal avec git:
    - `git clone git@github.com:persoWww/openblog.git` ou `git clone https://github.com/persoWww/openblog.git`
    - `git checkout version_1.3`
 - ou sans passer par le terminal: téléchargez `https://github.com/persoWww/openblog/archive/refs/heads/version_1.3.zip`

 - définir le title: dans `/article.html`, `/page.html` et `/index.html` , écrire les balises titles dans les headers.
 - définir la photo en fond de bannière: `/assets/img/banner.png`
 - définir la favicon: `/assets/img/icone.png`
 - optionnel: redéfinir les variables dans `/assets/styles/root.css`

 # fonctionnement régulier

  - post d'un article: 
     - éditer `/assets/scripts/data.js` => contenu page acceueil = page dont le title est accueil.
     - thumbnail: `/assets/img/thumbnails/cheminEtNomDansData`

# note version 0.1 openblog (2022-05-21)
adaptation du modèle d'inspiration

# note version 1.0 (2022-05-21)
créations des variables css et du front system de thumbnails. ajoute la possibilité d'ajouter du code (innerTEXT deviens innerHTML) dans les corps d'articles.

# note version 1.1 (2022-05-21)
 - thumbnail des articles sur les pages articles
 - création système pages:
    - const dans data.js
    - fichier `page.html`

# note version 1.2 (2022-05-22)
 - ajout de la possibilités de modif la favicon.
 - création champ de recherche pour les articles
 - the_content pour la page d'accueil
 - les thumbnails des articles doivent être noté dans data car pouvoir être réutilisé.

 # notes version 1.3 (2022-05-23)
 - [x] link vers index réecrites pour utilisation hors server.
 - [x] suppression de `assets/ico` pour tout mettre dans img.
 - [x] création d'un fichier de variables js pour les url d'images logo & banner => dans les variables `root.css`
 - [x] mise en place d'un logo dans la banière , avec une var associé dans `root.css`
 - [x] revoir l'agencement des fichiers scripts
 - [x] content de index au dessus des cards?
 - [x] quand search, pas de content dans index.
 - [x] augmenter les variables dans `root.css`, par ex menu droite-centre-gauche, border sur les cards,...
 - [x] cards entièrement cliqubles.
 - [x] pour les img/ico d'origines: remplacer par des images dont on es sur qu'elles sont libre de droit (créer une ico/ambiance propre)
 - [x] thumbnails dans data écrits a partir de img pour géré les dossiers soit-même et éviter les doublons

 # notes en préévision de la 1.4
 - [ ] voir création catégories/tags pour les articles avec menu
 - [ ] voir responsive menu/header
 - [ ] voir pour passer les fichiers `index.html`, `article.html` et `page.html` sur 1 seule fichier pour centraliser les données du header.