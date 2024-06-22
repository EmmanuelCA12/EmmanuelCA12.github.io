'use strict'

/*
Pida 6 números por pantalla y los meta en un array
Mostrar el array entero en el cuerpo de la pagina y en la consola.
Tambien tenemos que sacar el vector ordenado y mostrarlo
Invertir su orden y mostralo
Mostrar cuantos elementos tiene el array
Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que nos diga su posición
*/
function mostrarArray (elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    numeros.forEach((elementos, index) => {
    document.write("<li>"+elementos+"</li>");
});
    document.write("</ul>");
}

//var numeros = new Array (6);
//Pedir los números
var numeros = [];
for(var i=0; i<=5; i++){
    //numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0))); 
}
//Mostrar un array por la consola
console.log(numeros);
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenados");

//Invertir y mostrar
numeros.reverse(function(a,b){return b-a});
mostrarArray(numeros, "invertido");

//Elementos del array
document.write("<h1>El Array tiene "+numeros.length+"</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1) {
    document.write("<hr><h1>ENCONTRADO</h1></hr>");
    document.write("<hr><h1>Posición de la busqueda: "+posicion+"</h1></hr>");
}else{
    document.write("<hr><h1>NO ENCONTRADO</h1></hr>");
}

