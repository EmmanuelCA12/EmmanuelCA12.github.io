'use strict'

// dom - Document object mode
function modificaciones(colores, fondo) {
    var colores = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");
    

    caja.style.color = colores;
    caja.style.backgroundColor = fondo;
}
var caja = document.getElementById("Micaja").innerHTML;
modificaciones();


console.log(caja);