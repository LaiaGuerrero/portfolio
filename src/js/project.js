// Detectar secciones y actualizar el índice
const sections = document.querySelectorAll('.content-father');
const navLinks = document.querySelectorAll('.content-index a');
const designProcessBlock = document.getElementById('design-process-block');
const introRight = document.querySelector('.intro-right');
const introLeft = document.querySelector('.intro-left');
const contentContent = document.querySelector('.content-content');
const contentRowGap = parseInt(window.getComputedStyle(contentContent).getPropertyValue('row-gap'));


window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight + contentRowGap;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});