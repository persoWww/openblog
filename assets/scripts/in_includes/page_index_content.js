const theSearch = S_GET("s");
console.log(theSearch);
if (theSearch === '') {
    const accueilContent = pages.findIndex((pages) => pages.title === 'accueil');
    const pageAccueilObject = pages[accueilContent];
    document.write(pageAccueilObject.content)
}