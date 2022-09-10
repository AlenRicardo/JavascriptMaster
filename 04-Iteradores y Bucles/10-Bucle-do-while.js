'use strict'

// Bucle do while
// Primero ejecuta un bloque de codigo y despues prueba la condicional

var year = 15;


do {
    console.log("solo cuando el valor sea diferente a 20");
    year++;

    
    // Break
    if (year == 18) {
        break;
    }

} while (year <= 20);