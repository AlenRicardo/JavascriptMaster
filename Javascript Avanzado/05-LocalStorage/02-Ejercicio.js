'use strict'

var formulario = document.querySelector("#formpeliculas");

//Evento submit
formulario.addEventListener("submit", function() {
    //Toma los valores el input, lo busca y los guarda en titulo
    var titulo = document.querySelector("#inputpeliculas").value;

    //Para que no agrege valores vacios
    if (titulo.length >= 1) {
        //Agrega a localstorage
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculaslist");

//Recorrer el localstorage
for (const i in localStorage) {

    if (typeof localStorage[i] == "string") {
        var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
    }

}

// Formulario de borrar pelicula

var formulariob = document.querySelector("#formBorrarPeliculas");

//Evento submit
formulariob.addEventListener("submit", function() {
    //Toma los valores el input, lo busca y los guarda en titulo
    var titulo = document.querySelector("#inputBorrarPeliculas").value;

    //Para que no agrege valores vacios
    if (titulo.length >= 1) {
        //Agrega a localstorage
        localStorage.removeItem(titulo);
    }
});
