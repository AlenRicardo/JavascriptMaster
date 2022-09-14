'use strict'

//Parametros rest de resto, en el caso de agregar mas parametros
// de lo que la funcion necesita, para no perderlo se considera 
// resto. Y se agrega con ... puntos. como muestra en el tercer
// parametros de la siguiente funcion.

function ListadoFrutas(fruta1, fruta2, ...todas) {
    console.log(fruta1);
    console.log(fruta2);
    console.log(todas);
}

ListadoFrutas("Manzana", "Pera", "Melon", "Cambur");