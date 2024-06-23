'use strict'

// dom - Document object mode
function modificaciones(colores, fondo) {
    var colores = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");
    
    var caja = document.getElementById("Micaja");

    caja.style.color = colores;
    caja.style.backgroundColor = fondo;
}
modificaciones();


console.log(caja);