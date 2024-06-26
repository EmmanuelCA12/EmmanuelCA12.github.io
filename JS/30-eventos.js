'use strict'

//Eventos del ratón

var boton = document.querySelector("#boton");

function cambiarcolor(){
    console.log("Hola bebé");
    var bg = boton.style.background;
    if(boton == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    return true;
}
var boton = document.querySelector("#boton");
boton.addEventListener('click', function () {
    cambiarcolor();
});