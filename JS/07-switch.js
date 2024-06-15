'use strict'
//Switch

var edad=18;
var imprime=" ";

switch (edad) {
    case 18:
        imprime ="Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime ="ya eres un adulto";
        break;    
    case 40:
        imprime ="Ya estas ruco";
        break;
    case 75:
        imprime ="Ya muerete, desperdicias oxigeno";
        break;
    default:
        imprime ="Tu edad es neutra";
        break;
}
console.log(imprime);