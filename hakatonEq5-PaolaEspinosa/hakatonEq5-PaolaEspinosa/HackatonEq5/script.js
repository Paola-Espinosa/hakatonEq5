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
document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const carritoLista = document.getElementById("carrito");
    const totalElement = document.getElementById("total");
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            const producto = boton.parentElement;
            const nombre = producto.querySelector(".card-title").textContent;
            const precio = parseFloat(producto.querySelector(".card-text:nth-child(3)").textContent.replace("Precio: $", ""));
            carrito.push({ nombre, precio });

            actualizarCarrito();
        });
    });

    vaciarCarritoBtn.addEventListener("click", () => {
        carrito.length = 0;
        actualizarCarrito();
    });

    function actualizarCarrito() {
        carritoLista.innerHTML = "";
        let total = 0;
        carrito.forEach((item) => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
            carritoLista.appendChild(li);
            total += item.precio;
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
});
