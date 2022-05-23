
# SETUP

 - dans le terminal:
    - `git clone git@github.com:persoWww/openblog.git` ou `git clone https://github.com/persoWww/openblog.git`
    - `git checkout version_1.2`

 - définir le title: dans `/article.html`, `/page.html` et `/index.html` , écrire les balises titles dans les headers.
 - définir la photo en fond de bannière: `/assets/img/banner.png`
 - définir la favicon: `/assets/ico/icone.png`
 - optionnel: redéfinir les variables dans `/assets/styles/root.css`

 # fonctionnement régulier

  - post d'un article: 
     - éditer `/assets/scripts/data.js` => contenu page acceueil = page dont le title est accueil.
     - thumbnail: `/assets/img/thumbnails/idDeLArticle.extthumb`

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

 # notes en prévision de la 1.3
 - suppression de `assets/ico` pour tout mettre dans img.
 - création d'un fichier de variables js pour les url d'images favicon et banner `settings.js`
 - mise en place d'un logo dans la banière , avec une var associé dans `settings.js`
 - revoir l'agencement des fichiers scripts
 - voir création catégories/tags pour les articles avec menu
 - voir responsive menu/header