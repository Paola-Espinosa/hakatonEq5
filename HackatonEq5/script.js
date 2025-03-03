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