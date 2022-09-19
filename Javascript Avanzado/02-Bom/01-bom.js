'use strict'

// BOM - Browser Objet Model

// Window.innerHeight muestra el ancho del la ventana del navegador
console.log(window.innerHeight+" Altura");

// Window.innerWidth muestra la altura del la ventana del navegador
console.log(window.innerWidth+" Ancho");

// screen.height muestra el ancho de la ventana el navegador
console.log(screen.height+" Altura");

// screen.width muestra la altura de la ventana del navegador
console.log(screen.width+" Ancho");

// window.location Devuelve un array con todos los elementos del URL.
console.log(window.location);
// Obtienes la URL
console.log(window.location.href);

// Manera de utilizarlo como redireccionador creando una function
function pagina(url) {
    window.location.href = url;
}

//Aqui llama la funcion para redirigir la funcion
// pagina("https://www.google.com")

// Abre una ventana adicional al navegador
function abrirVentana(url) {
    window.open(url,"","width=400,height=200");
}