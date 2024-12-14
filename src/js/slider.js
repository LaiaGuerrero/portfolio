let scrollPosition = 0;
const slider = document.querySelector('.pattern-separator');
let images = Array.from(slider.children); // Array con las imágenes
const speed = 0.5; // Velocidad de desplazamiento

// Duplicamos las imágenes al principio
function duplicateImages() {
    const imagesClone = images.map(image => image.cloneNode(true)); // Clonamos todas las imágenes
    imagesClone.forEach(clone => slider.appendChild(clone)); // Añadimos las imágenes clonadas al final

    // Actualizamos el array de imágenes para incluir las duplicadas
    images = Array.from(slider.children);
}

// Llamamos a la función para duplicar las imágenes antes de iniciar la animación
duplicateImages();

function animate() {
    // Desplazamos el contenedor a la izquierda
    scrollPosition -= speed;
    slider.style.transform = `translateX(${scrollPosition}px)`;

    // Comprobamos el ancho de la primera imagen (la que se desplaza)
    const firstImage = images[0];
    const firstImageWidth = firstImage.offsetWidth + parseInt(getComputedStyle(firstImage).marginRight);

    // Si la primera imagen ha salido completamente del contenedor
    if (scrollPosition <= -firstImageWidth) {
        // Mover la primera imagen al final del contenedor
        slider.appendChild(firstImage);
        images.push(images.shift()); // Actualizamos el array de imágenes

        // Ajustamos la posición de desplazamiento para evitar que salte
        scrollPosition += firstImageWidth;
    }

    requestAnimationFrame(animate); // Llamada recursiva para mantener la animación continua
}

animate();
