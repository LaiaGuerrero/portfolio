// Seleccionar elementos del DOM
const filters = document.querySelectorAll('.project-filter .filter');
const projectCategories = document.querySelectorAll('.project-category');

// Función para mostrar la sección correspondiente al filtro seleccionado
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los filtros y secciones
        filters.forEach(f => f.classList.remove('active'));
        projectCategories.forEach(category => category.classList.remove('active'));

        // Añade la clase 'active' al filtro y sección correspondiente
        filter.classList.add('active');
        const categoryToShow = document.querySelector(`.${filter.dataset.filter}-project`);
        categoryToShow.classList.add('active');
    });
});
