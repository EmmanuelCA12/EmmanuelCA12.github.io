'use strict'; // Agregar comillas alrededor de 'use strict';

// Función para modificar estilos
function modificaciones() {
    var colores = prompt("Brinda un color para el texto");
    var fondo = prompt("Ingresa un color para el fondo");

    var caja = document.getElementById("Micaja");
    caja.style.color = colores;
    caja.style.backgroundColor = fondo;

    // Crear un hr después de modificar los estilos
    var hr = document.createElement("hr");
    caja.parentNode.appendChild(hr); // Asumiendo que caja tiene un padre adecuado
}

// Llamar a la función modificaciones para aplicar estilos
modificaciones();

// Obtener todos los divs y agregar su contenido a un nuevo párrafo en la sección
var todosLosDivs = document.getElementsByTagName("div");
var seccion = document.querySelector('#misección'); // Corregir selector con comillas
var hr = document.createElement("hr");

// Convertir HTMLCollection a array para poder iterar correctamente
Array.from(todosLosDivs).forEach(function(div) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(div.textContent);
    parrafo.appendChild(texto);
    seccion.appendChild(parrafo);
});

seccion.appendChild(hr);

//Conseguir elementos por su clase CSS
var divsrojos = document.getElementsByClassName("rojo");
var divsamarillos = document.getElementsByClassName("amarillo");
for (var i = 0; i < divsamarillos.length; i++) {
    divsamarillos[i].style.backgroundColor = "white";
}


var div;
for(div in divsrojos){
    if (divsrojos[div].className == "rojo") {
        divsrojos[div].style.backgroundColor = "red";
    }
}

//Query selector
var id =document.querySelector("#Encabezado");
console.log(id)
