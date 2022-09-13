'use strict'

// Declarando un numero
var numero1 = 20;
var numero2 = 100;

// Cuando los parametros no se logran asignar a todos puedes darle alguno por defecto
suma(numero1, numero2);

// En la descripción de los parametros agregamos los valores encontrados. de no tenerlo tiene uno por defecto
function suma(valor1, valor2 = 50, mostrar = "Vacio") {
    console.log("El valor de la suma es "+ (valor1+valor2));
    console.log("el valor adicional es "+mostrar);
}