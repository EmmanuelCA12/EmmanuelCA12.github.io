'use strict'


var categorias = ["Acción", "Terror", "Comedia", "Romance"];
var peliculas = ["Transformes", "El Aro", "Son como niños", "La dama y el vagabundo"];

var cine = [categorias, peliculas];
peliculas.sort();
peliculas.reverse();
var indice = peliculas.indexOf("King kong");
if (indice > -1) {
    peliculas.splice(indice,1);
}

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")

console.log(cadena_array);