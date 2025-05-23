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

