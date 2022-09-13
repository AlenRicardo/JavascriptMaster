'use strict'

// Este ejemplo es igual al anterior solo se cambio a funcion flecha

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    
    // Dentro de la funcion principa se hace la llamada a la funcion
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// En la llamada se agrega 2 funciones anonimas y son callback
console.log(sumame(4,5, dato => {
    console.log("la Suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2))
}
));