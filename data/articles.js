// dernier article en haut

const articles = [{
    title: `a propos de openblog`,
    thumbnail: 'banner.jpg',
    id: "52100gh124r",
    date: "2022-05-24",
    author: "dev",
    acroche: "Avant propos, présentation",
    content: `
    <h3>a propos</h3>
    <p>
        ce petit projet a pour visé de pouvoir autant servir de <b>"blog" ultra-light</b> sur un server http (<b>sans back</b>), que servir à créer une interface de bloc-note, de présentation, de documentation, sous la forme d'un simple dossier que l'on ouvre avec un navigateur (clique droit sur ./index.html => ouvrir avec => votre navigateur) <b>en dehors de tout serveur</b>. Du fait qu'il n'utilise pas de code back, les articles s'écrivent dans une variable javascript, à même le fichier. L'utilisation de ce projet nécessite donc de ne pas avoir des bouttons à la vue de quelques lignes de codes, mais ne nécessite pas non-plus de maitrisé javaScript.
    </p>
    <a href="./index.html?page=article&id=SD4520GG32"><h1>get started!</h1></a>`,
},{
    title: `set-up de openblog`,
    thumbnail: 'banner.jpg',
    id: "SD4520GG32",
    date: "2022-05-24",
    author: "dev",
    acroche: "procédure d'installation, personnalisation",
    content: `
    <ul>
        <li>dans le terminal avec git:
            <ul>
                <li><code class="language-bash">git clone git@github.com:persoWww/frontblog.git</code> ou <code class="language-bash">git clone https://github.com/persoWww/frontblog.git</code></li>
                <li><code class="language-bash">git checkout version_${settings.version}</code></li>
            </ul>
        </li>
        <li>ou sans passer par le terminal: téléchargez <code class="language-bash">https://github.com/persoWww/frontblog/archive/refs/heads/version_${settings.version}.zip</code></li>
        <li>définir le title: dans <code class="language-bash">./index.html</code> , écrire la balises titles dans le headers: &lt;title&gt;votre titre&lt;/title&gt;</li>
        <li>définir la favicon: <code class="language-bash">./assets/img/icone.png</code></li>
        <li>optionnel: redéfinir les variables dans <code class="language-bash">./settings/root.css</code> et <code class="language-bash">./settings/settings.js</code></li>
        <li>pour les images de fonds de bannières et l'icone, pointez vers des fichiers que vous ajoutez dans <code class="language-bash">/assets/img/</code></li>
    </ul>
<a href="./index.html?page=article&id=G120236G"><h1>postez des pages et des articles</h1></a>`,
},{
    title: `opérations régulières de openblog`,
    thumbnail: 'banner.jpg',
    id: "G120236G",
    date: "2022-05-24",
    author: "dev",
    acroche: "Ajoutez un article, une page, contenu de la page d’accueil",
    content: `
    <h2>poster un article</h2>
        <ul>
            <li>ouvrez le fichier <code class="language-bash">./data/articles.js</code></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    <h2>poster une page</h2>
    <pre><code class="language-markdown">
 - post d'un article: 
    - éditer \`./data/pages.js\` et \`./data/articles.js\` => contenu page accueil = page dont le title est accueil.
    - champ id: n'importe quoi du moment qu’il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)
    - date et author: optionnel
    - thumbnail: \`/assets/img/cheminEtNomDansData\` (vous pouvez les classer dans des dossiers/sous-dossiers)
</code></pre>`,
},{
    title: `colorisation syntaxique de openblog`,
    thumbnail: 'banner.jpg',
    id: "DF4587996",
    date: "2022-05-24",
    author: "dev",
    acroche: "utilisation de la colorisation syntaxique",
    content: `
    
    <pre><code class="language-markdown">
# colorisation syntaxique

prism.js : languages compatibles: (HTML = markup)

markup+css+clike+javascript+bash+docker+json+json5+markdown+markup-templating+mermaid+mongodb+php+plsql+scss+sql

&lt;pre>&lt;code class="language-votreLanguage"&gt;votre code&lt;/code&gt;&lt;/pre&gt;</code></pre>`,
},{
    title: `liens externes et vers articles dans le menu`,
    thumbnail: 'banner.jpg',
    id: "SD3554",
    date: "2022-05-24",
    author: "dev",
    acroche: "créer des liens dans le menu vers des articles ou des pages extérieurs au sites (ou des media du site...)",
    content: ``,
},  ];