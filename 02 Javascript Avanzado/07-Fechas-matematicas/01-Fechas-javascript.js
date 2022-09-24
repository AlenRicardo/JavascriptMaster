'use stritc'

//Metodos Date(), te da la fecha
var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var segundos = fecha.getSeconds();

var textHora = `
    El año es: ${year}
    el mes es: ${mes}
    el dia es: ${dia}
    el hora es: ${hora}
    el segundos es: ${segundos}
`;

console.log(textHora);