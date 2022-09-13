'use strict'

// Funcion scundaria dentro de calculadora
function suma(valor1, valor2) {
    return (valor1+valor2);
}

// Funcion scundaria dentro de calculadora
function resta(valor1, valor2) {
    return (valor1-valor2);
}

// Función principal de calculadora con 2 funciones secundarias resta y suma
function calculadora(valor1, valor2, operacion) {
    if (operacion == suma) {
        return suma(valor1, valor2);
    }else{
        return resta(valor1, valor2);
    }
}

// Este es el llamado de las funciones
console.log(calculadora(1, 2, resta));