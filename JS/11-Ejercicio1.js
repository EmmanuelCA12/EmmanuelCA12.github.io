'use strict'
/*
Que pida dos números y que nos diga cual es el mayor y cual es el menor y si son iguales.
*/
var numero1 = prompt("Ingresa el primer número");
var numero2 = prompt("Ingresa el segundo número");

if (numero1 > numero2) {
    alert("El primer número "+numero1+" es mayor que el número "+numero2 );
}else if (numero1 < numero2) {
    alert("El segundo número "+numero2+" es mayor que el número "+numero1);
}else if (numero1 == numero2) {
    alert("Los dos números son iguales");
}