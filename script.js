function isDarkTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

window.onload = function() {
    window.isDarkTheme = isDarkTheme();
    if(window.isDarkTheme) {
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }

    document.querySelector('.btn-theme').addEventListener('click', event => {
        if(document.body.classList.contains('dark')){
            document.body.classList.remove('dark');
        }else{
            document.body.classList.add('dark');
        }
    }, {passive: true});
};