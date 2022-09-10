'use stric'

// Switch
// Crearemos una calculadora
var edad = 18;
var imprime = "";

switch (edad) {
    case 12:
        console.log("Tienes 12");
        imprime = "Opcional"
    break;
            
    case 18:
        console.log("Tienes 18");
        imprime = "Opcional 2"
    break;
                
    case 30:                
        console.log("Tienes 30");
        imprime = "Opcional 3"
    break;

    default:
        console.log("Nada");
        imprime = "Opcional 4"
        break;
}

console.log(imprime);

// Se puede imprimir dentro o fuera como se muestra en la opcional que es una adición