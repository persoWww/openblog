let menuPages = '<a href="index.html">accueil</a>';

for (let index = 0; index < pages.length; index++) {
    const element = pages[index];
    if (element.title != 'accueil') {
        const newElement = `<a href="./page.html?id=${element.id}">${element.title}</a>`;
        menuPages = menuPages+newElement;
    }
}


let header = `
<div id="bandeau" onclick="location.href='./'">
    <h1>${document.title}</h1>
</div>
<div class="search">
    <input type="text" id="contentsearch"><button id="entersearch">recherche</button>
</div>
<div class="menu">${menuPages}</div>
<div id="homecontent">`;


function S_GET(id){
    var a = new RegExp(id+"=([^&#=]*)");
    try {
        const result = decodeURIComponent(a.exec(window.location.search)[1]);
        return result;
    } catch (error) {
        return '';
    }
}


function writeCardArticle(article) {
    document.write(`
    <div class="card">
        <img src="./assets/img/thumbnails/${article.thumbnail}">
        <div class="text">
            <a class="title" href="article.html?id=${article.id}">${article.title}</a><br>
            <p class="meta">paru le: ${article.date} - ecris par: ${article.author}</p>
            <p class="acroch">${article.acroche}</p>
        </div>
    </div>
`);
}