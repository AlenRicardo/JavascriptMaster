'use strict'

// Plantillas de texto
var nombre = "Alen";
var apellido = "Ricardo";

var cadena = `
    <h1>Este es un titulo</h1>
    <p>Mi nombre es: ${nombre}</p>
    <p>Mi apellido es: ${apellido}</p>
`;

document.write(cadena);