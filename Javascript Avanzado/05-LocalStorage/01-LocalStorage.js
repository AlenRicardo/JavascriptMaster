'use strict'

window.addEventListener('load', function() {
    
    //LocalStorage
    //Es una memoria del navegador que podemos acceder
    
    //Comprobar que el localstorage existe y trabaja en el navegador
    if(typeof(Storage) !== 'undefined'){
        console.log("LocalStorage disponible");
    }else{
        console.log("El LocalStorage es incompatible");
    }

    //Guardar un elemento al LocalStorage
    localStorage.setItem("titulo", "Curso de Javascript");

    //Obtener un elemento del localstorage
    console.log(localStorage.getItem("titulo"));

    //Mostrar en el DOM
    document.querySelector("#micaja").innerHTML = localStorage.getItem('titulo');

    // creamos un Json para guardar en localStorage
    var usuario = {
        nombre: "Alen Ricardo",
        email: "alenricardo@alenricardo.com",
        web: "alenricardo.com"
    }

    //El localstorage no trabajo JSON por eso de debe agregar el siguiente metodo
    //JSON.stringify(usuario)
    //Enviar este JSON -> localstorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    //Localstorage -> JSON
    var userjs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userjs);
    //Agregandolo en el DOM
    document.querySelector("#micaja").append(" "+userjs.web+" - "+userjs.nombre);

    //Limpiar el Localstorage solo 1
    localStorage.removeItem("usuario");
    
    //Limpiar todo el localstorage
    localStorage.clear();
});