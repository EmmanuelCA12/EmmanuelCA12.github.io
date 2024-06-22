'use strict'


var categorias = ["Acción", "Terror", "Comedia", "Romance"];
var peliculas1 = ["Transformes", "El Aro", "Son como niños", "La dama y el vagabundo"];
var peliculas2 = ["Transformes", "El Aro", "Son como niños", "La dama y el vagabundo"];

var cine = [categorias, peliculas2, peliculas1];
peliculas1.sort();
peliculas2.reverse();

console.log(peliculas1);
console.log(peliculas2);
var indice = peliculas1.indexOf("King kong");
if (indice > -1) {
    peliculas1.splice(indice,1);
}

var peliculas1_string = peliculas1.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")

console.log(cadena_array);