function S_GET(id) {
    var a = new RegExp(id + "=([^&#=]*)");
    try {
        const result = decodeURIComponent(a.exec(window.location.search)[1]);
        return result;
    } catch (error) {
        return '';
    }
}


function writeCardArticle(article) {
    document.write(`
    <div class="card" onclick="location.href='./index.html?page=article&id=${article.id}'">
        <img src="./assets/img/${article.thumbnail}">
        <div class="text">
            <h3 class="title" href="article.html?id=${article.id}">${article.title}</h3>
            <p class="meta">paru le: ${article.date} - ecris par: ${article.author}</p>
            <p class="acroch">${article.acroche}</p>
        </div>
    </div>
`);
}


function searchfunc(search) {
    document.body.innerHTML = `<meta http-equiv="refresh" content="0; url=./index.html?s=${search}">`;
}