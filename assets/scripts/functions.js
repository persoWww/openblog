document.getElementById('entersearch').addEventListener('click', () => {
    console.log('coucou');
    const searchstring = document.getElementById('contentsearch').value;
    searchfunc(searchstring);
});

function searchfunc(search) {
    document.body.innerHTML = `<meta http-equiv="refresh" content="0; url=./index.html?s=${search}">`;
}
