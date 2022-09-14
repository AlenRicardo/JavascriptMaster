'use strict'

var nombres = ["Alen", "Ricardo", "Peñaloza", "Jimenez"];

// Metodo de busqueda, find(), agregando una funcion dentro de find
// retorna el valor buscado
var busqueda = nombres.find(function(nomb){
    return nomb == "Ricardo";
});
console.log(busqueda);

// Esta es la misma que la anterior pero con una función 
// retorna el valor buscado
var busqueda1 = nombres.find(nomb => nomb == "Ricardo");
//Cuando quieres poner funcion flecha, no necesario poner el return.
console.log(busqueda1);

// Esta es la misma que la anterior pero con el metoso findIndex()
// Retorna el indice encontrado
var busqueda2 = nombres.findIndex(nomb => nomb == "Ricardo");
console.log(busqueda2);

//Esta es la misma que la anterior pero buscando numeros
var precios = [12, 23, 32, 13, 20];
var busqueda3 = precios.some(pre => pre >= 20); //numero mayo o igual que 20
console.log(busqueda3);
//retorna booleano, true o false
