// dernier article en haut

const articles = [
    {
        title:"notes de la version 1.1 de freesoft.net",
        extthumb:'png',
        id:"52100gh124r",
        date:"2022-05-21",
        author:"dev",
        acroche:"détails de version, setup, tâches courantes",
        content:`<pre>
        # SETUP
        
         - dans le terminal:
            - 'git clone git@github.com:persoWww/openblog.git' ou 'git clone https://github.com/persoWww/openblog.git'
            - 'git checkout version_1.1'
        
         - définir le title: dans '/article.html', '/page.html' et '/index.html' , écrire les balises titles dans les headers.
         - définir la photo en fond de bannière: '/assets/img/banner.png'
         - définir la favicon: '/assets/ico/icone.png'
         - optionnel: redéfinir les variables dans '/assets/styles/root.css'
        
         # fonctionnement régulier
        
          - post d'un article: 
             - éditer '/assets/scripts/data.js'
             - thumbnail: '/assets/img/thumbnails/idDeLArticle.extthumb'
        
        # note version 0.1 openblog (2022-05-21)
        adaptation du modèle d'inspiration
        
        # note version 1.0 (2022-05-21)
        créations des variables css et du front system de thumbnails. ajoute la possibilitée d'ajouter du code (innerTEXT deviens innerHTML) dans les corps d'articles.
        
        # note version 1.1 (2022-05-21)
         - thumbnail des articles sur les pages articles
         - création systeme pages:
            - const dans data.js
            - fichier 'page.html'</pre>`,
    },
];

const pages = [
    {
        title: 'a propos',
        id: '201f45',
        date: '2022-05-21',
        author: 'dev',
        content: `ceci est une page.`,
    },
];