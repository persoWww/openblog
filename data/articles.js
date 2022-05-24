// dernier article en haut

const articles = [{
    title: `notes de la version ${settings.version} de openblog`,
    thumbnail: 'banner.jpg',
    id: "52100gh124r",
    date: "2022-05-24",
    author: "dev",
    acroche: "détails de version, setup, tâches courantes",
    content: `
    <h3>a propos</h3>
    <p>
        ce petit projet a pour visé de pouvoir autant servir de <b>"blog" ultra-light</b> sur un server http (<b>sans back</b>), que servir à créer une interface de bloc-note, de présentation, de documentation, sous la forme d'un simple dossier que l'on ouvre avec un navigateur (clique droit sur ./index.html => ouvrir avec => votre navigateur) <b>en dehors de tout serveur</b>. Du fait qu'il n'utilise pas de code back, les articles s'écrivent dans une variable javascript, à même le fichier. L'utilisation de ce projet nécessite donc de ne pas avoir des bouttons à la vue de quelques lignes de codes, mais ne nécessite pas non-plus de maitrisé javaScript.
    </p>
    
    <pre><code class="language-markdown"># a propos

ce petit projet a pour visé de pouvoir autant servir de **"blog" ultra-light** sur un server http
(**sans back**) que servir à créer une interface de bloc-note, de présentation, de documentation,
sous la forme d'un simple dossier que l'on ouvre avec un navigateur (clique droit sur ./index.html
=> ouvrir avec => votre navigateur) **en dehors de tout serveur**. Du fait qu'il n'utilise pas de
code back, les articles s'écrivent dans une variable javascript, à même le fichier. L'utilisation de
ce projet nécessite donc de ne pas avoir des bouttons à la vue de quelques lignes de codes, mais
ne nécessite pas non-plus de maitrisé javaScript.

# SETUP

- dans le terminal avec git:
- \`git clone git@github.com:persoWww/frontblog.git\` ou \`git clone https://github.com/persoWww/frontblog.git\`
- \`git checkout version_${settings.version}\`
- ou sans passer par le terminal: téléchargez \`https://github.com/persoWww/frontblog/archive/refs/heads/version_${settings.version}.zip\`

- définir le title: dans \`./index.html\` , écrire la balises titles dans le headers: &lt;title&gt;votre titre&lt;/title&gt;
- définir la favicon: \`./assets/img/icone.png\`
- optionnel: redéfinir les variables dans \`./settings/root.css\` et \`./settings/settings.js\`
- pour les images de fonds de bannières et l'icone, pointez vers des fichiers que vous ajoutez dans \`/assets/img/\`

# fonctionnement régulier

- post d'un article: 
    - éditer \`./data/pages.js\` et \`./data/articles.js\` => contenu page accueil = page dont le title est accueil.
    - champ id: n'importe quoi du moment qu’il n'y en a pas 2 identiques (+1 à chaque fois, code alphanumérique aléatoire...)
    - date et author: optionnel
    - thumbnail: \`/assets/img/cheminEtNomDansData\` (vous pouvez les classer dans des dossiers/sous-dossiers)

# colorisation syntaxique

prism.js : languages compatibles: (HTML = markup)

markup+css+clike+javascript+bash+docker+json+json5+markdown+markup-templating+mermaid+mongodb+php+plsql+scss+sql

&lt;pre>&lt;code class="language-votreLanguage"&gt;votre code&lt;/code&gt;&lt;/pre&gt;</code></pre>`,
}, ];