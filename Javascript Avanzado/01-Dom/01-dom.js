'use strict'

//Usando el DOM, document objet model

//Hemos creado en index.html un div con el id "micaja", aqui lo selecionamos
var micaja0 = document.getElementById("micaja");
console.log(micaja0);

// Si queremos obtener el html dentro de la caja
var micaja1 = document.getElementById("micaja1").innerHTML;
console.log(micaja1);

// Si queremos editar el html interno es de la siguiente manera
var micaja2 = document.getElementById("micaja2");
var cambio = micaja2.innerHTML = "¡He cambiado el html de mi caja!"
console.log(cambio);

// Si queremos cambiar los styles 
var micaja3 = document.getElementById("micaja3");
var style = micaja3.style.background = "red";

// Cambiamos style de padding
var micaja4 = document.getElementById("micaja4");
var padding = micaja4.style.padding = "20px";

// Cambiamos style color
var micaja5 = document.getElementById("micaja5");
var color = micaja5.style.color = "red";

//creamos una funcion para cambiar color de la caja segun el usuario
//Puedes ejecutar en consola la funcion cambiaColor("yellow");
function cambiaColor(color) {
    micaja3.style.background = color;
}

//Podemos agregar clases a los div o elementos del DOM
var micaja6 = document.getElementById("micaja6");
var clase = micaja6.className = "Hola hola2";
console.log(micaja6);

//Una manera diferente de seleccionar un elementos del DOM es con
//seleccionar id es #
//seleccionar clase es .
var selecionando = document.querySelector("#micaja7");
console.log(selecionando);