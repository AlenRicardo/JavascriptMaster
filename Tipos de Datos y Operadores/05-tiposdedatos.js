'use stric'

// Operadores
var numero1 = 7; //Sin comillas es un numero
var numero2 = 12;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var div = numero1 / numero2;
var resto = numero1 % numero2;

console.log("El resultado de la operacion es "+suma);
console.log("El resultado de la operacion es "+resta);
console.log("El resultado de la operacion es "+multi);
console.log("El resultado de la operacion es "+div);
console.log("El resultado de la operacion es "+resto);

// Tipos de Datos
var numero_entero = 44; //Numero entero
var cadena_texto = "Hola como estas"; //String
var verdadedero_falso = true; //Valor booleano true false o 0 1.
var numero_falso = "33.4"; // No es un numero es string por las comillas

// Funciones para convertir datos a otro. 
Number(numero_falso); //Converite un string a numero
parseInt(numero_falso); // Convierte de string a numero entero sin decimales
parseFloat(numero_falso); // Convierte de string a numero con decimales
String(numero_entero); // Convierte de numero a string

// Detectar el tipo de dato
console.log(typeof numero_entero); //numero entero
console.log(typeof cadena_texto); //cadena de texto string
console.log(typeof verdadedero_falso); //booleano
console.log(typeof numero_falso); // string