'use strict'

/*
Hacer un programa que muesre todos lo números que hay entre dos números ingresados por el usuario
*/

var numero1 = parseInt(prompt("Ingresa el primer número", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número", 0));

    document.write("<h1>De "+numero1+" a "+numero2+" hay estos números: </h1>");
for (let i = numero1; i <= numero2; i++) {
    document.write(i+"<br/>");
    
}