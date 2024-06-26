'use strict'

//Eventos del ratón

var boton = document.querySelector("#boton");

function cambiarcolor(){
    var bg = boton.style.background;
    if(boton == "blue"){
        boton.style.background = "red";
    }else{
        boton.style.background = "blue";
    }
    return true;
}