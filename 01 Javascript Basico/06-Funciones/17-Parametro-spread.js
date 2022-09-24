'use strict'

// Este ejemplo es la continuación de parametros rest anterior.
// Se le agrega la los ... puntos para indicar que es individual los valores

function ListadoFrutas(fruta1, fruta2, ...todas) {
    console.log(fruta1);
    console.log(fruta2);
    console.log(todas);
}

var frutas = [ "Limon", "Tomate" ]
// Este solo agregaria el array al inicio
ListadoFrutas( frutas ,"Manzana", "Pera", "Melon", "Cambur");

// Este ejemplo agregaria valor por individual (spread)
ListadoFrutas( ...frutas ,"Manzana", "Pera", "Melon", "Cambur");