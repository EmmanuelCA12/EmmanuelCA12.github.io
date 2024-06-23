'use strict'

// dom - Document object mode
function modificaciones(colores, fondo) {
    var colores = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");
    caja.style.color = colores;
    caja.style.background = fondo;
}
modificaciones();
var caja = document.getElementById("Micaja");

console.log(caja);