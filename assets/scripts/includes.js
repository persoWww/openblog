let menuPages = '<a href="./index.html">accueil</a>';

for (let index = 0; index < pages.length; index++) {
    const element = pages[index];
    if (element.title != 'accueil') {
        const newElement = `<a href="./page.html?id=${element.id}">${element.title}</a>`;
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
    <a href="https://github.com/persoWww/openblog/tree/version_1.2">propulsé par openblog version_1.2</a>
</footer>
</body>
</html>`;