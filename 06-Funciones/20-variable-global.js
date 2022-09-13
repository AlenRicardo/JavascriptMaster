'use strict'

function HolaMundo() {
    var variable_interna = "Esta variable fue creada dentro de la función";

    console.log(variable_interna);
}

var variable_externa = "Este mensaje es externo";

// console.log(variable_interna);
console.log(variable_externa);
HolaMundo();