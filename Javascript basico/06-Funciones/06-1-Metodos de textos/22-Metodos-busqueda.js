'use strict'

var texto1 = "Este mensaje de prueba de";

// Metodos de busqueda

// indexOf(), busca la palabra "prueba", 1-1
var busqueda0 = texto1.indexOf("prueba"); //retorna un numero donde esta el caracter inicial
console.log(busqueda0);

// indexlastIndexOf(), busca la palabra "prueba", 1-1
var busqueda1 = texto1.lastIndexOf("prueba"); //retorna un numero con la ultima coincidencia
console.log(busqueda1);

// search(), es igual al IndexOf() 1-1
var busqueda2 = texto1.search("prueba"); //retorna un numero
console.log(busqueda2);

// match(), busca la palabra "prueba", 1-1
var busqueda3 = texto1.match("prueba"); // retorna un array con muchos datos de la concincidencia
console.log(busqueda3);

// match(), busca la palabra "prueba", 1-N, es una busqueda global
var busqueda4 = texto1.match(/prueba/g); // retorna un array cuando busca la misma palabra varias veces
console.log(busqueda4);

// Extraer valores

// substr(14,5), busca del caracter 14, los 5 letras siguientes, extrae ese valor
var busqueda5 = texto1.substr(14,5); //retorna un string con el valor extraido
console.log(busqueda5);

// charAt(44), busca el indice 44 y extrae solo 1 letra
var busqueda6 = texto1.charAt(14); //retorna un string de solo una letra
console.log(busqueda6);

// Busquedas con respuestas booleanas

// startsWith("prueba"), busca la palabra al inicio del string
var busqueda7 = texto1.startsWith("Este"); //retorna un true o false si cumple
console.log(busqueda7);

// endsWith("prueba"), busca la palabra al final del string
var busqueda8 = texto1.endsWith("de"); //retorna un true o false si cumple
console.log(busqueda8);

// includes("prueba"), busca exacta, es sencible a mayusculas
var busqueda9 = texto1.includes("de"); //retorna un true o false si cumple
console.log(busqueda9);