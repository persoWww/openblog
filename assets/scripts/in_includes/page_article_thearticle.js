const theId = S_GET("id");
const theIndex = articles.findIndex((articles) => articles.id == theId);
const theArticleObject = articles[theIndex];
console.log(theArticleObject);
document.getElementById('theTitle').innerText = theArticleObject.title;
document.getElementById('theMeta').innerText = `paru le: ${theArticleObject.date} - ecris par: ${theArticleObject.author}`;
document.getElementById('theAcroch').innerText = theArticleObject.acroche;
document.getElementById('theContent').innerHTML = theArticleObject.content;
document.getElementById('theThumbnail').style.backgroundImage = `url('./assets/img/${theArticleObject.thumbnail}')`;