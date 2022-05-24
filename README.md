# a propos

ce petit projet a pour visé de pouvoir autant servir de **"blog" ultra-light** sur un server http (**sans back**) que servir à créer une interface de bloc-note, de présentation, de documentation, sous la forme d'un simple dossier que l'on ouvre avec un navigateur (clique droit sur ./index.html => ouvrir avec => votre navigateur) **en dehors de tout serveur**. Du fait qu'il n'utilise pas de code back, les articles s'écrivent dans une variable javascript, à même le fichier. L'utilisation de ce projet nécessite donc de ne pas avoir des bouttons à la vue de quelques lignes de codes, mais ne nécessite pas non-plus de maitrisé javaScript.

# SETUP

 - dans le terminal avec git:
    - `git clone git@github.com:persoWww/frontblog.git` ou `git clone https://github.com/persoWww/frontblog.git`
    - `git checkout version_1.4`
 - ou sans passer par le terminal: téléchargez `https://github.com/persoWww/frontblog/archive/refs/heads/version_1.4.zip`

 - définir le title: dans `./index.html` , écrire la balises titles dans le headers: &lt;title&gt;votre titre&lt;/title&gt;
 - définir la favicon: `./assets/img/icone.png`
 - optionnel: redéfinir les variables dans `./settings/root.css` et `./settings/settings.js`
    - pour les images de fonds de bannières et l'icone, pointez vers des fichiers que vous ajoutez dans `/assets/img/`

# fonctionnement régulier

  - post d'un article: 
     - éditer `./data/pages.js` et `./data/articles.js` => contenu page accueil = page dont le title est accueil.
        - champ id: n'importe quoi du moment qu’il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)
        - date et author: optionnel
     - thumbnail: `/assets/img/cheminEtNomDansData` (vous pouvez les classer dans des dossiers/sous-dossiers)

# colorisation syntaxique

prism.js : languages compatibles: (HTML = markup)

markup+css+clike+javascript+bash+docker+json+json5+markdown+markup-templating+mermaid+mongodb+php+plsql+scss+sql

&lt;pre>&lt;code class="language-votreLanguage"&gt;votre code&lt;/code&gt;&lt;/pre&gt;

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

 # notes de la version 1.4 (2022-05-24)
 - [x] voir pour passer les fichiers `index.html`, `article.html` et `page.html` sur 1 seule fichier pour centraliser les données du header. => header et footer ne seraient plus des includes?
    - [x] passer la totalitée des contents en variables js.
 - [x] voir pour setup plus userFriendly (meilleur doc, meilleur guidage, commentaires, chemins vers les fichiers à modifier)
 - [x] augmenter les var dans `root.css` => *justify-content du menu*, *margin/padding du content*, sticky or not du header, du menu, visibility du search, ...
 - [x] création settings.js => *nbr de post sous les articles*,.

# notes en prévision de la v 1.5
 - [x] scission de data en fichiers multiples
 - [ ] voir création catégories/tags pour les articles avec menu
 - [x] voir responsive menu/header
 - [ ] settings.js => nbr de post dans page accueil, activ/désactive thumbnails pour articles.
 - [ ] voir notation markdown, colorisation syntaxe, scroll gestion