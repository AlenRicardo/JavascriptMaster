'use strict'

console.log("Parte 2"); 
//Seleccionando elementos por ID ****************************
var micaja = document.getElementById("micaja")

//Seleccionando elementos por su etiqueta *******************
var todosLosDivs = document.getElementsByTagName("div");
//muestra un array de html con todos los div que tiene el documento
console.log(todosLosDivs);
//Para acceder a uno de los div es muy similar a como se trabaja en un array
//textContent sirve para ver el valor del texto que contiene
var texto = todosLosDivs[8].textContent;
console.log(texto);
//innerHTML sirve para ver el contenido de un di y para modificarlo
var texto2 = todosLosDivs[9].innerHTML = "Cambie los valores de box 2 desde el array de divs";
console.log(texto2);

//Seleccionando miseccion del DOM que ya esta creada
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);
//Recorriendo un divs y imprimiendo sus valores de texto en nuevos dovs creados en section
for (const valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

//append es agregar algo despues de algo. al final
//prepend es agregar algo al inicio de algo. Al inicio

//Seleccionando elementos por su clase **********************
var classRojos = document.getElementsByClassName("rojo");
//Para seleccionar todo los elementos debo recorrer el array de clasesrojas
for (const valor in classRojos) {
    if (classRojos[valor].className == "rojo") {
        const element = classRojos[valor].style.background = "red";
    }
}

//Seleccionando query selector puedes seleccionar mas de un resultado
//Crea un array de todas las clases llamadas rojo
var divsRojos = document.querySelectorAll(".rojo");
console.log(divsRojos);
//selecciona solo 1 el primero que consigue
var divsPrueba = document.querySelector('.rojo');
console.log(divsPrueba);

//Mas información en la siguiente pagina web
// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll