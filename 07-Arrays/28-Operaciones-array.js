'use strict'

var nombres = ["Paola", "Paolianny", "Aslen", "Alen"];

// Agregar un valor al array
nombres.push("the batman");

var elemento = prompt("Introduce tu nombre: ");

do{
    elemento = prompt("Introduce tu nombre: ");
    nombres.push(elemento);
}while (elemento != "ACABAR");

// Elimina el elemento del ultimo array
nombres.pop();
console.log(nombres);

// Eliminar un elemento del array
var indice = pelicula.indexOf('Gran torino');
if(indice > -1){ //-1 significa que no consiguio el resultado
    nombres.splice(indice, 1); //El consiguio el resultado y retorna un array sin ese valor
}

// Convertir un array -> String
var nombres_string = nombres.join();
console.log(nombres_string);

// Convertir un string -> String
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);