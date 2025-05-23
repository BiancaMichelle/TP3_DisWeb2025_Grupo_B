<<<<<<< HEAD
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const boton = document.getElementById("boton");

// Calculadora de descuentos
document.addEventListener("DOMContentLoaded", function() {
    const formDescuento = document.getElementById("form-descuento");
    const selectJuego = document.getElementById("juego");
    const inputPorcentaje = document.getElementById("porcentaje");
    const resultadoDiv = document.getElementById("resultado-descuento");

    if (formDescuento) {
        formDescuento.addEventListener("submit", function(e) {
            e.preventDefault();
            const precio = parseFloat(selectJuego.selectedOptions[0].dataset.precio);
            const porcentaje = parseFloat(inputPorcentaje.value);
            const precioFinal = calcularDescuento(precio, porcentaje);
            resultadoDiv.textContent = `Precio final de "${selectJuego.value}" con ${porcentaje}% de descuento: $${precioFinal.toFixed(2)} USD`;
        });
    }
});

function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}


function manejarClickBoton() {
    alert("¡Hiciste clic!");
}

function inicializarEventos() {
    boton.addEventListener("click", manejarClickBoton);
}

inicializarEventos();

console.log(calcularDescuento(100, 10));
console.log(calcularDescuento(250, 20));
console.log(calcularDescuento(80, 5));
=======
// Punto 2: Función que retorne el mensaje
function generarMensaje(nombre, asunto) {
    return `Gracias ${nombre} por contactarnos sobre ${asunto}. Te responderemos pronto.`;
}

// Asociar el envío del formulario a la función
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("asunto").value;
    // Llamar a la función y mostrar el mensaje en consola
    const mensaje = generarMensaje(nombre, asunto);
    console.log(mensaje);
    // alert(mensaje); para despues mostrar enn pantalla
    this.reset();
});

>>>>>>> form
