document.getElementById('entersearch').addEventListener('click', () => {
    console.log('coucou');
    const searchstring = document.getElementById('contentsearch').value;
    searchfunc(searchstring);
});