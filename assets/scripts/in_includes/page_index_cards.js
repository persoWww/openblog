if (theSearch === '') {
    for (let index = 0; index < articles.length; index++) {
        const element = articles[index];
        writeCardArticle(element);
    }
} else {
    let selectedArticles = [];
    for (let index = 0; index < articles.length; index++) {
        const element = articles[index];
        if (element.title.indexOf(theSearch) != -1 ||
            element.author.indexOf(theSearch) != -1 ||
            element.acroche.indexOf(theSearch) != -1 ||
            element.content.indexOf(theSearch) != -1) {
            selectedArticles.push(element);
        }
    }
    for (let index = 0; index < selectedArticles.length; index++) {
        const element = selectedArticles[index];
        writeCardArticle(element);
    }
}