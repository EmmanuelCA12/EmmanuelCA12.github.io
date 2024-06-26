'use strict'

window.addEventListener('load', () =>{
    
    //Timers
    var tiempo = setInterval(function () {
       console.log("Set interval ejecutado"); 

       var Encabezado = document.querySelector("img");
       if (Encabezado.style.frontSize == "200px") {
            Encabezado.style.frontSize = "500px";
       } else {
            Encabezado.style.frontSize = "200px";
       }
    },200);

});