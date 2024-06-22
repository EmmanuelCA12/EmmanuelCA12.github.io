'use strict'

// dom - Document object mode
function modificaciones(color, fondo) {
    var color = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");
    caja.style.color(color);
    caja.style.background(fondo);
}

var caja = document.getElementById("Micaja");

console.log(caja);