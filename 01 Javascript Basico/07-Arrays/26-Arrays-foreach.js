'use strict'

// Array, Arreglos, Matrices
// Array indices 0        1          2         3
var nombres = ["Paola", "Aslen", "Paolianny", "Alen"];

// array foreach
// elemento es el valor de es ciclo, valor individual
// index indice del elemento (opcional)
// array, es el array original pero se puede usar dentro del foreach (opcional)
nombres.forEach((element, index, array) => {
    document.write("<li>"+element+" - "+index+"</li>");
    console.log(array);
});