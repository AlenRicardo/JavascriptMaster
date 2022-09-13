'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre) {
    return "La pelicula es "+nombre;
}

// Funciones callback 
// Es una funcion que se ejecuta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    
    // Dentro de la funcion principa se hace la llamada a la funcion
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// En la llamada se agrega 2 funciones anonimas y son callback
console.log(sumame(4,5, function(dato){
    console.log("la Suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2))
}
));