'use strict'

/*
Pida 6 números por pantalla y los meta en un array
Mostrar el array entero en el cuerpo de la pagina y en la consola.
Tambien tenemos que sacar el vector ordenado y mostrarlo
Invertir su orden y mostralo
Mostrar cuantos elementos tiene el array
Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que nos diga su posición
*/

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
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong>");
}