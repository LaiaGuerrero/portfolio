// Detectar secciones y actualizar el índice
const sections = document.querySelectorAll('.content-father');
const navLinks = document.querySelectorAll('.content-index a');
const subheader = document.querySelector('.header-item.subheader');
const subheaderText = document.querySelector('#current-section-text');

subheader.style.display = 'none';

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    if (currentSection) {
        // Mostrar el subheader y actualizar el texto
        //check if is a mobile device
        if (window.innerWidth <= 700) {
            subheader.style.display = 'flex';
        }
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
                subheaderText.textContent = link.textContent;
            }
        });
    } else {
        // Ocultar el subheader si no hay sección visible
        subheader.style.display = 'none';
    }
});
