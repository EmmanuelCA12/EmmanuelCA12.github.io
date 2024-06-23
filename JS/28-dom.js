'use strict'

//Conseguir elementos con ID concreto
// dom - Document object mode
function modificaciones(colores, fondo) {
    var colores = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");
    

    caja.style.color = colores;
    caja.style.backgroundColor = fondo;
}
var caja = document.getElementById("Micaja");
modificaciones();

//Conseguir elemento por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var seccion = document.querySelector(#miselección);
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);
//Conseguir elementos por su clase css

console.log(caja);