let menuPages = '<a href="./index.html">accueil</a>';

for (let index = 0; index < pages.length; index++) {
    const element = pages[index];
    if (element.title != 'accueil') {
        const newElement = `<a href="./index.html?page=page&id=${element.id}">${element.title}</a>`;
        menuPages = menuPages + newElement;
    }
}


let header = `
<div id="bandeau" onclick="location.href='./index.html'">
    <div id="bandeau__ico"></div>
    <h1>${document.title}</h1>
</div>
<div class="search">
    <input type="text" id="contentsearch"><button id="entersearch">recherche</button>
</div>
<div class="menu">${menuPages}</div>
<div id="homecontent">`;

const footer = `</div>
<footer>
    <a href="https://github.com/persoWww/openblog/tree/version_${settings.version}">propulsé par openblog version_${settings.version}</a>
</footer>
</body>
</html>`;

let page_index = `<p class="articleContent">
<script src="./assets/scripts/in_includes/page_index_content.js"></script>
</p>
<div class="parentcard">
<script src="./assets/scripts/in_includes/page_index_cards.js"></script>
</div>`;

let cardInArticle = `
<h2 class="titleOfLastArticles">Derniers articles:</h2>
<div class="parentcard">
<script src="./assets/scripts/in_includes/page_article_cards.js"></script>
</div>`;
if (settings.nbrPostUnderArticles === 0) {
    cardInArticle = ``;
}

let page_article = `<div id="theThumbnail"></div>
<h1 id="theTitle"></h1>
<p class="meta" id="theMeta"></p>
<p class="articleAcroch" id="theAcroch"></p>
<p class="articleContent" id="theContent"></p>
${cardInArticle}
<script src="./assets/scripts/in_includes/page_article_thearticle.js"></script>
`;

let page_page = `<h1 id="theTitle"></h1>
<p class="articleContent" id="theContent"></p>
<script src="./assets/scripts/in_includes/page_page_thepage.js"></script>
`;