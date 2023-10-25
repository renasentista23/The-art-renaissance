
// Define el total de imágenes en el carrusel
const totalImages = 3;

// Crea una función para mover el carrusel en la dirección dada por 'n'
function carouselSlide(n) {
// Actualiza el índice actual según el valor de 'n'
currentIndex = (currentIndex + n) % totalImages;

// Si el índice actual es negativo, ajusta a su valor positivo equivalente
if (currentIndex < 0) {
   currentIndex = totalImages + currentIndex;
}

// Obtén los elementos de las imágenes y botones
const images = document.querySelectorAll('.carousel img');
const buttons = document.querySelectorAll('.carousel button');

// Oculta todas las imágenes
images.forEach(img => img.style.display = 'none');

// Muestra la imagen actual y actualiza el botón activo
images[currentIndex].style.display = 'block';
buttons.forEach(button => button.classList.remove('active'));
buttons[currentIndex].classList.add('active');
}

// Llama a la función para mover el carrusel al índice inicial (0)
carouselSlide(0);