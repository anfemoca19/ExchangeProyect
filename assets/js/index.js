const animatedImage = document.getElementById("animated-image");

let rotation = 0; // Ángulo de rotación inicial

function rotateImage() {
  rotation += 10; // Incrementa el ángulo de rotación en grados
  animatedImage.style.transform = `rotate(${rotation}deg)`; // Aplica la transformación
}

// Inicia la animación utilizando setInterval
setInterval(rotateImage, 1); // Cambia la imagen cada 100 milisegundos (10 FPS)