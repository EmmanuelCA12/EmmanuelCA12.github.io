'use strict'

/*
Hacer un programa que nos diga si un número es par o impar y tiene que tener un ventana que pida el número, 
comprobar si el número es valido, en caso contrario que pida el número otra vez.
*/

var numero = parseInt(prompt("Ingresa un número: ", 0));


while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un número: ", 0));
}
if (numero % 2 == 0) {
    alert("Es número par");
}else{
    alert("Es impar");
}