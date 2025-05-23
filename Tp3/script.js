const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const boton = document.getElementById("boton");

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

    const textarea = document.getElementById('miTextarea');
    const contador = document.getElementById('contador');

    if (textarea && contador) {
        textarea.addEventListener('input', () => {
            const longitud = textarea.value.length;
            contador.textContent = `${longitud} caracter${longitud !== 1 ? 'es' : ''}`;
        });
    }

    const elemento = document.getElementById('caja');
    if (elemento) {
        elemento.addEventListener('mouseover', () => {
            elemento.style.backgroundColor = 'blue';
        });

        elemento.addEventListener('mouseout', () => {
            elemento.style.backgroundColor = 'rgb(209, 204, 204)';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const asunto = document.getElementById("asunto").value;

        const mensaje = generarMensaje(nombre, asunto);
        console.log(mensaje);

        this.reset();
    });

    function generarMensaje(nombre, asunto) {
        return `Gracias ${nombre} por contactarnos sobre ${asunto}. Te responderemos pronto.`;
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
