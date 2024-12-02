// script.js

// Seleccionar el título
const title = document.getElementById('halloween-title');

// Función para animar las letras
function animateText() {
    const text = title.textContent; // Obtener el texto del título
    title.textContent = ''; // Limpiar el texto original

    // Crear un span para cada letra
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;

        // Añadir animación personalizada
        span.style.display = 'inline-block';
        span.style.animation = `float 2s ease-in-out infinite ${index / 10}s`;

        title.appendChild(span);
    });
}

// Definir la animación en CSS con JavaScript
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}`;
document.head.appendChild(style);

// Iniciar la animación
animateText();
