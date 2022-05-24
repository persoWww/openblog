// dernier article en haut

const articles = [{
    title: `notes de la version ${settings.version} de openblog`,
    thumbnail: 'banner.jpg',
    id: "52100gh124r",
    date: "2022-05-24",
    author: "dev",
    acroche: "détails de version, setup, tâches courantes",
    content: `<pre>
# SETUP

- dans le terminal avec git:
    - 'git clone git@github.com:persoWww/openblog.git' ou 'git clone https://github.com/persoWww/openblog.git'
    - 'git checkout version_${settings.version}'
- ou sans passer par le terminal: téléchargez 'https://github.com/persoWww/openblog/archive/refs/heads/version_${settings.version}.zip'

- définir le title: dans './index.html' , écrire la balises titles dans le headers: &lt;title&gt;votre titre&lt;/title&gt;
- définir la photo en fond de bannière: './assets/img/banner.png'
- définir la favicon: './assets/img/icone.png'
- optionnel: redéfinir les variables dans './settings/root.css'

# fonctionnement régulier

    - post d'un article: 
    - éditer './data/data.js' => contenu page acceueil = page dont le title est accueil.
        - champ id: n'importe quoi du moment qqu'il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)
        - date et author: optionnel
    - thumbnail: '/assets/img/cheminEtNomDansData' (vous pouvez les classer dans des dossiers/sous-dossiers)
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