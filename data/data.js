// dernier article en haut

const articles = [{
    title: "notes de la version 1.3 de openblog",
    thumbnail: 'banner.jpg',
    id: "52100gh124r",
    date: "2022-05-21",
    author: "dev",
    acroche: "détails de version, setup, tâches courantes",
    content: `<pre>
    # SETUP

    - dans le terminal:
       - 'git clone git@github.com:persoWww/openblog.git' ou 'git clone https://github.com/persoWww/openblog.git'
       - 'git checkout version_1.3'
    - ou sans passer par le terminal: téléchargez 'https://github.com/persoWww/openblog/archive/refs/heads/version_1.3.zip'
   
    - définir le title: dans '/article.html', '/page.html' et '/index.html' , écrire les balises titles dans les headers.
    - définir la photo en fond de bannière: '/assets/img/banner.png'
    - définir la favicon: '/assets/img/icone.png'
    - optionnel: redéfinir les variables dans '/assets/styles/root.css'
   
    # fonctionnement régulier
   
     - post d'un article: 
        - éditer '/assets/scripts/data.js' => contenu page acceueil = page dont le title est accueil.
        - thumbnail: '/assets/img/thumbnails/cheminEtNomDansData'
   </pre>`,
}, ];

const pages = [{
        title: 'a propos',
        id: '201f45',
        date: '2022-05-21',
        author: 'dev',
        content: `<b>ceci</b> est une page.`,
    },
    {
        title: 'accueil', // le title accueil est un mot clef pour désigner le contenu de la page d'accueil
        id: 'ds2037p4',
        date: '2022-05-22',
        author: 'dev',
        content: `hello! ceci est le contenu de la page d'accueil`,
    },
];