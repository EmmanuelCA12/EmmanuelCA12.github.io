'use strict'

//Calculadora

var numero1 = parseInt(prompt("Ingresa el primer número:", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número:", 0)); 

while (numero1 < 0 || numero2 < 0 || isNaN(numero2) || isNaN(numero1)) {
    var numero1 = parseInt(prompt("Ingresa el primer número:", 0));
    var numero2 = parseInt(prompt("Ingresa el segundo número:", 0)); 
}

var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+ 
"la resta es: "+(numero1-numero2)+"<br/>"+
"La multiplciación es: "+(numero1*numero2)+"<br/>"+
"La division es: "+(numero1/numero2)+"<br/>";

var resultadoCMD = "La suma es: "+(numero1+numero2)+"\n"+ 
"la resta es: "+(numero1-numero2)+"\n"+
"La multiplciación es: "+(numero1*numero2)+"\n"+
"La division es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);