'use strict'

// Transformaciðon de textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "Es segundo mensaje";

var dato0 = numero.toString();
var dato1 = texto1.toUpperCase();
var dato2 = texto2.toUpperCase();

console.log(dato0);
console.log(dato1);
console.log(dato2);

// typeof es para saber el tipo de dato
console.log(typeof dato0);

// Calcular la longitud
var nombre = "Hola";
console.log(nombre.length);

// Concatenar texto
var textoTotal1 = texto1+" "+texto2;
var textoTotal2 = texto1.concat(" "+texto2);
console.log(textoTotal1);
console.log(textoTotal2);