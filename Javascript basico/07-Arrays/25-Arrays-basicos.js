'use strict'

// Array, Arreglos, Matrices
// Array indices 0        1          2         3
var nombres = ["Paola", "Aslen", "Paolianny", "Alen"];

var lenguajes = new Array("php", "js", "go", "Java");

// Muestra el array con todo los valores
console.log(nombres);

// Muestra cada indice por individual
console.log(nombres[2]);

// Saber la longitud de un array
var longitud = nombres.length;

// consultar por alerta valores relacionados al array
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce un numero correcto menor que " +nombres.length);
}else{
    alert("El usuario selecciono: "+nombres[elemento]);
}

// Como recorrer un array con for
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for (var i = 0; i < nombres.length; i++) {
    document.write("<li>"+nombres[i]+"</li>");
}

document.write("</ul>");
