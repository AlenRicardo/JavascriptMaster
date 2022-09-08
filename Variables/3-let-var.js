'use stric'
// Hay 3 maneras de declarar una variable LET y VAR
// let es depediendo del bloque es mas limitado
// var es una variable global tiene menos limitaciones

// Prueba con VAR
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero);

// Prueba de LET

var texto = "Inicial";
console.log(texto);

if (true) {
    var texto = "Dentro del if";
    console.log(texto); //valor 50
}

console.log(texto);