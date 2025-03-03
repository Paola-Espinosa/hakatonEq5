// Obtener el modal
var modal = document.getElementById("loginModal");
// Obtener el botón que abre el modal
var btn = document.querySelector(".btn-iniciar-sesion");
// Obtener el elemento <span> que cierra el modal
var span = document.querySelector(".close");
// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}
// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}
//Carrusel
let index = 0;  // Variable para controlar la imagen actual

// Mostrar la imagen inicial
mostrarImagen(index);

// Función para mostrar la imagen basada en el índice
function mostrarImagen(n) {
    let imagenes = document.querySelectorAll(".imagen");
    
    // Asegurarse de que todas las imágenes estén ocultas
    imagenes.forEach(imagen => {
        imagen.classList.remove("activa");  // Quitamos la clase activa de todas
    });

    // Mostrar la imagen actual (añadimos la clase activa)
    imagenes[n].classList.add("activa");
}

// Función para cambiar de imagen
function cambiarImagen(n) {
    let imagenes = document.querySelectorAll(".imagen");
    
    // Modificar el índice de la imagen actual
    index += n;

    // Si llegamos al final, volver al inicio
    if (index >= imagenes.length) {
        index = 0;
    }

    // Si llegamos al inicio, ir al final
    if (index < 0) {
        index = imagenes.length - 1;
    }

    // Mostrar la imagen correspondiente
    mostrarImagen(index);
}