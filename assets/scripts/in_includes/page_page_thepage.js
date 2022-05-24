function S_GET(id) {
    var a = new RegExp(id + "=([^&#=]*)");
    return decodeURIComponent(a.exec(window.location.search)[1]);
}
const theId = S_GET("id");
const theIndex = pages.findIndex((pages) => pages.id == theId);
const theArticleObject = pages[theIndex];
console.log(theArticleObject);
document.getElementById('theTitle').innerText = theArticleObject.title;
document.getElementById('theContent').innerHTML = theArticleObject.content;