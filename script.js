// Funcionalidad 1: Añadir al carrito
const botonesCarrito = document.querySelectorAll(".add-cart");

botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("Producto añadido al carrito correctamente.");
    });
});

// Funcionalidad 2: Botón ir arriba
const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
