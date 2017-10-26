document.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        document.getElementById('image__container').style.left = '0';
    }
    else {
        document.getElementById('image__container').style.left = '-670';
    }
}