'use strict'

// JSON Notacion de objetos de Javascript


// Crear una Json
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

console.log(pelicula);
// Como acceder a sus propiedades
console.log(pelicula.titulo);

// Asi se cambia los valores
pelicula.titulo = "Batman";

console.log(pelicula);

//Array de peliculas
var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

//Este es el Json dentro de un array y se puede crear esta relacion
console.log(peliculas);

//Buscamos el div ya creado en el DOM se llama micaja
var micaja = document.querySelector("micaja");
//Recorrer el array con el json dentro, creando los elementos en la pagina web
for (const indice in peliculas) {
    if (Object.hasOwnProperty.call(peliculas, indice)) {
        // const element = peliculas[indice];

        //En cada iteracion crearemos un elemento parrafo
        var p = document.createElement("p");
        p.append(peliculas[indice].titulo +" - "+ peliculas[indice].year);
        micaja.append(p);

    }
}