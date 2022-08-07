window.addEventListener('load', () => {
    setTimeout(() => {
        $('.loading').css('display', 'none');
    }, 0000)
})

function startup() {
    // do
}

function toggleNav() {
    var menu = document.getElementById('menu')
    if (menu.style.display === "block") {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}