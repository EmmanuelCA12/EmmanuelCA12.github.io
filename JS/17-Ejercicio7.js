'use strict'

//Tabla de multiplicar de un número ingresado por el usuario

var numero = parseInt(prompt("¿De que número quieres la tabla? ", 1));

document.write("<h1>Tabla del "+numero+"</h1>");
for (var i = 1; i <= 10 ; i++) {
    document.write(i+" X "+numero+" = "+(i*numero)+ "<br/>");
    
}

//Todas las tablas de Multiplicar
for (var j = 1; j <=10 ; j++) {
    document.write("<h1>Tabla del "+j+"</h1>");
    for (var i = 1; i <= 10 ; i++) {
        document.write(i+" X "+j+" = "+(i*j)+ "<br/>");
    }
}