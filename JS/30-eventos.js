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
    return;
}

// Click
var boton = document.querySelector("#boton");
boton.addEventListener('click', function () {
    cambiarcolor();
   // alert("¡Auch!, no tan fuerte xD");
});

//MouseOver
boton.addEventListener('mouseover', function () {
   boton.style.background = "yellow"; 
});

//MouseOut
boton.addEventListener('mouseout', function () {
    boton.style.background = "#ccc";
});

//Focus
var input = document.querySelector("#Campo_nombre");
input.addEventListener('focus', function () {
    console.log("Estas dentro de mi");
});
//Blur
input.addEventListener('blur', function () {
    console.log("Estas fuera de mi");
});
//KeyDown
input.addEventListener('keydown', function (event) {
    console.log("Pulsaste la tecla", String.fromCharCode(event.keyCode));
});
//Keyprees
input.addEventListener('keypress', function (event) {
    console.log("Tecla precionada", String.fromCharCode(event.keyCode));
});
//Keyup
input.addEventListener('keyup', function (event) {
    console.log("Tecla soltada", String.fromCharCode(event.keyCode));
});