'use strict'

window.addEventListener('load', () =>{
    
    //Timers
    var tiempo = setInterval(function () {
       console.log("Set interval ejecutado"); 

       var Encabezado = document.querySelector("#Lol");
       if (Encabezado.style.frontSize == "50px") {
            Encabezado.style.frontSize = "20px";
       } else {
            Encabezado.style.frontSize = "20px";
       }
    },200);

});