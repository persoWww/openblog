
# SETUP

 - dans le terminal:
    - `git clone git@github.com:persoWww/openblog.git` ou `git clone https://github.com/persoWww/openblog.git`
    - `git checkout version_1.0`

 - définir le title: dans /article.html et /index.html , écrire les balises titles dans les headers.
 - définir la photo en fond de bannière: /assets/img/banner.png
 - optionnel: redéfinir les variables dans /assets/styles/root.css

 # fonctionnement régulier

  - post d'un article: 
     - éditer /assets/scripts/data.js
     - thumbnail: /assets/img/thumbnails/idDeLArticle.extthumb

# note version 0.1 openblog (2022-05-21)
adaptation du modèle d'inspiration

# note version 1.0 (2022-05-21)
créations des variables css et du front system de thumbnails. ajoute la possibilitée d'ajouter du code (innerTEXT deviens innerHTML) dans les corps d'articles.