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
},
{
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
},
{
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
            <li>Dans la const articles, rajoutez un objet article: <pre><code class="language-javascript">
{
    title: '',
    thumbnail: '',
    id: '',
    date: '',
    author: '',
    acroche: '',
    content: \`\`,
},</code><pre></li>
            <li>title: titre de l'article</li>
            <li>thumbnail: adresse de l'image (la partie après <code class="language-bash">./assets/img/</code>)</li>
            <li>champ id: n'importe quoi du moment qu’il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)</li>
            <li>date: (facultatif) à titre indicatif (a priori, le dernier posté doit être mis en haut, si toutefois vous souhaitez qu'il soit le plus visible). utilisé le format que vous souhaitez (recommander: yyyy-mm-jj), en tout cas utiliser si possible toujours le même.</li>
            <li>author: auteur, facultatif, à titre indicatif</li>
            <li>acroche: (facultatif) le texte de chapeau, afficher en haut de page et dans les cards de présentation.</li>
            <li>content: contenu de l'article. vous pouvez y inséré tout ce qui peut être inséré dans un document HTML: HTML, CSS, JavaScript. Si usage de backquotes, échapper avec un antislash.</li>
        </ul>
    <h2>poster une page</h2>
    <ul>
        <li>ouvrez le fichier <code class="language-bash">./data/pages.js</code></li>
        <li>Dans la const pages, rajoutez un objet article: <pre><code class="language-javascript">
{
    title: '', 
    id: '',
    date: '',
    author: '',
    content: \`\`,
},</code><pre></li>
        <li>title: titre de la page</li>
        <li>id: n'importe quoi du moment qu’il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)</li>
        <li>date: (facultatif) à titre indicatif (a priori, le dernier posté doit être mis en haut, si toutefois vous souhaitez qu'il soit le plus visible). utilisé le format que vous souhaitez (recommander: yyyy-mm-jj), en tout cas utiliser si possible toujours le même.</li>
        <li>author: auteur, facultatif, à titre indicatif</li>
        <li>content: contenu de la page. vous pouvez y inséré tout ce qui peut être inséré dans un document HTML: HTML, CSS, JavaScript. Si usage de backquotes, échapper avec un antislash.</li>
    </ul>
    <p><b>note:</b> le title accueil est un mot clef pour désigner le contenu de la page d'accueil</p>`,
},
{
    title: `liens vers autre chose que des pages du blog dans le menu`,
    thumbnail: 'banner.jpg',
    id: "SD3554",
    date: "2022-05-24",
    author: "dev",
    acroche: "créer des liens dans le menu vers des articles ou des pages extérieurs au sites (ou des media du site...)",
    content: `<p>Chaque pages crée un lien dans le menu. dans le contenu de page, vous pouvez mettre une redirection, comme suit:</p>
    <pre><code class="language-javascript">content: \`&lt;meta http-equiv="refresh" content="0; url=https://github.com/persoWww/frontblog/tree/version_1.5"&gt;\`,</code></pre>
    <p>Ainsi, vous pouvez créer des liens vers n'importe quel URL. Pour des liens internes au site (articles, pdf, images, videos,...) il est conseillé de mettre des liens relatif.</p>`,
},
{
    title: `colorisation syntaxique de openblog`,
    thumbnail: 'banner.jpg',
    id: "DF4587996",
    date: "2022-05-24",
    author: "dev",
    acroche: "utilisation de la colorisation syntaxique",
    content: `<p>le blog par défaut contient un systeme de colorisation syntaxique (voir <a href="https://prismjs.com/">prism.js</a>). voici le type de code html pour l'utiliser en mode bloc:</p>

    <pre><code class="language-markup">&lt;pre>&lt;code class="language-votreLanguage"&gt;votre code&lt;/code&gt;&lt;/pre&gt;</code></pre>
    <p>Et en mode inline:</p>
    <code class="language-markup">&lt;code class="language-votreLanguage"&gt;votre code&lt;/code&gt;</code>
    <p>voici la liste des languages:</p>
    <pre><code class="language-php">
class="markup" (HTML)
class="language-css"
class="language-clike"
class="language-javascript"
class="language-bash"
class="language-docker"
class="language-json"
class="language-json5"
class="language-markdown"
class="language-markup-templating"
class="language-mermaid"
class="language-mongodb"
class="language-php"
class="language-plsql"
class="language-scss"
class="language-sql"
    </code></pre>`,
},  ];