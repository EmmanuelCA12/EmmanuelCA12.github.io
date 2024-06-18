'use srtict'

//Parametros de rest y spread

function listado_frutas (fruta1, fruta2, ...frutas_mixtas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(frutas_mixtas);
}
listado_frutas("Naranja", "Manzana", "Sandia", "Pera","Melon", "Coco");