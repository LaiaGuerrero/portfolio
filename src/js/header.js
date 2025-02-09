function toggleMenu() {
    const nav = document.querySelector('.navigation:not(.subheader)');
    const toggle = document.querySelector('.menu-toggle');
    const submenuBtn = document.querySelector('#btn-header-submenu');

    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        toggle.innerHTML = '✖';
        submenuBtn.style.zIndex = '-1'; // Ocultar el botón del submenú
    } else {
        toggle.innerHTML = '☰';
        submenuBtn.style.zIndex = '4'; // Restaurar el z-index del botón del submenú
    }
}

function toggleSubMenu() {
    const submenuNav = document.querySelector('.navigation.subheader');
    const toggle = document.querySelector('.Submenu-toggle');
    const menuBtn = document.querySelector('#btn-header-menu');

    submenuNav.classList.toggle('active');

    if (submenuNav.classList.contains('active')) {
        toggle.innerHTML = '✖';
        menuBtn.style.zIndex = '-1'; // Ocultar el botón del menú principal
    } else {
        toggle.innerHTML = '↓';
        menuBtn.style.zIndex = '4';
    }

    // Rellena dinámicamente el submenú si aún no tiene contenido
    if (!submenuNav.hasChildNodes()) {
        const ul = document.createElement('ul'); // Crear la lista contenedora
        const sections = document.querySelectorAll('.content-father');
        sections.forEach(section => {
            const li = document.createElement('li'); // Crear un elemento de lista
            const link = document.createElement('a'); // Crear el enlace
            link.href = `#${section.id}`;
            link.textContent = section.querySelector('h1')?.textContent || 'Sección';
            link.onclick = () => {
                submenuNav.classList.remove('active'); // Oculta el submenú al hacer clic
            };
            li.appendChild(link); // Añadir el enlace al elemento de lista
            ul.appendChild(li); // Añadir el elemento de lista al contenedor ul
        });
        submenuNav.appendChild(ul); // Añadir la lista completa al nav

        document.querySelector('.navigation.subheader ul').addEventListener('click', (e) => {
            document.querySelector('#btn-header-menu').style.zIndex = '4';
        });
    }
}