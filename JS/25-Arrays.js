'use strict'

//Arrays, Arreglos, Matrices, etc.
var nombre = "Emmanuel";
var nombres = ["Emmanuel Calzada", "Hector Garcia", "Virginia", "Rosa Isela"];

var lenguajes = new Array("PHP","JS","Go", "Java", "HTML", "Phyton");

console.log(nombres);
console.log(lenguajes);

var elemento = parseInt(prompt("Ingresa el dato que valor que deseas buscar:", 0));
alert(lenguajes[elemento]);