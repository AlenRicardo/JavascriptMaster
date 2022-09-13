'use strict'

// Funciones de reemplazo
var numero = 20;
var texto1 = "Este curso es de Javascript";

// replace("esto", "ESTE"), busca de y reemplaza ese valor por el siguiente
var valor0 = texto1.replace("Javascript", "PHP"); //retorna una string con el valor reemplazado
console.log(valor0);

// slice(14), busca el indice 14 de la candena extrae todo a partir de ese valor
var valor1 = texto1.slice(14); //retorna un string con los valores despues del indice 14
console.log(valor1);

// slice(14, 22), busca el indice 14 de la candena extrae todo a partir de ese valor hasta el 22
var valor2 = texto1.slice(14, 22); //retorna un string con los valores despues del indice 14 hasta el 22
console.log(valor2);

// split(" "), corta el string en el valor, en este caso crea un array y cada valor esta creado por el espacio (coleccion de string separados por el separador asignado)
var valor3 = texto1.split(" "); //retorna un array con los valores por separados por el valor " ", en este caso es el espacio
console.log(valor3);

// trim(), elimina los espacios por delante y por detras
var valor4 = texto1.trim(); //retorna un string sin espacios por delante ni por detras