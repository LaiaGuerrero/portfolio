const sections = document.querySelectorAll('.content-father');
const navLinks = document.querySelectorAll('.content-index a');
const subheader = document.querySelector('.header-item.subheader');
const subheaderText = document.querySelector('#current-section-text');
const designProcessBlock = document.getElementById('design-process-block');
const introRight = document.querySelector('.intro-right');
const introLeft = document.querySelector('.intro-left');

subheader.style.display = 'none';

function setSideDesignProccesBlock()
{
    if (window.innerWidth <= 700) {
        introRight.appendChild(designProcessBlock);
    } else {
        introLeft.appendChild(designProcessBlock);
    }
}

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
        subheader.style.display = 'none';
    }
});

window.addEventListener('load', () => {
    setSideDesignProccesBlock();
});

window.addEventListener('resize', () => {
    setSideDesignProccesBlock();
});
