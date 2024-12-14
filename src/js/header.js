function toggleMenu() {
    const nav = document.querySelector('.navigation');
    const toggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        toggle.innerHTML = '✖';
    } else {
        toggle.innerHTML = '☰';
    }
}

