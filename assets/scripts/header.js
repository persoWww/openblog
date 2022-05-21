let menuPages = '<a href="index.html">accueil</a>';

for (let index = 0; index < pages.length; index++) {
    const element = pages[index];
    const newElement = `<a href="./page.html?id=${element.id}">${element.title}</a>`;
    menuPages = menuPages+newElement;
}


let header = `
<div id="bandeau" onclick="location.href='./'">
    <h1>${document.title}</h1>
</div>
<div class="menu">${menuPages}</div>
<div id="homecontent">`;