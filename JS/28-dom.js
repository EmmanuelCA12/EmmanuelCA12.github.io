'use strict'

// dom - Document object mode
var colores = prompt("Brinda un color para el texto");
var fondo = prompt("Ingresa un color para el fondo");
function modificaciones(colores, fondo) {
    caja.style.color = colores;
    caja.style.background = fondo;
}
modificaciones();
var caja = document.getElementById("Micaja");

console.log(caja);