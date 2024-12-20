const progressBar = document.querySelector('.progress-bar');
progressBar.style.width = '0%';

// Secciones relevantes
const firstSection = document.querySelector('#the-challenge');
const lastSection = document.querySelector('#learnings');

// Recalcula el rango al cargar y redimensionar
function updateProgressRange() {
    const start = firstSection.offsetTop; // Inicio de la primera sección
    const end = lastSection.offsetTop + lastSection.offsetHeight; // Fin de la última sección

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY; // Desplazamiento actual

        // Limitar el cálculo dentro del rango de las secciones
        if (scrollTop < start) {
            progressBar.style.width = '0%';
        } else if (scrollTop >= end) {
            progressBar.style.width = '100%';
        } else {
            // Calcular el porcentaje basado en el rango
            const percentage = ((scrollTop - start) / (end - start)) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    });
}

// Ejecuta la función al cargar y redimensionar
updateProgressRange();
window.addEventListener('resize', updateProgressRange); // Recalcula en caso de cambios de tamaño
