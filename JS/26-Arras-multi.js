'use strict'

/*
var categorias = ["Acción", "Terror", "Comedia", "Romance"];
var peliculas = ["Transformes", "El Aro", "Son como niños", "La dama y el vagabundo"];

var cine = [categorias, peliculas];
*/
var indice = peliculas.indexOf("King kong");
if (indice > -1) {
    peliculas.splice(indice,1);
}

var peliculas_string = peliculas.join();

var cadena = "Terror";

console.log(peliculas_string);