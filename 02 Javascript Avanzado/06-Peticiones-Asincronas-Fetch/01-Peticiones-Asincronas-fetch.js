'use strict'

// fetch o peticiones asincronas, 
//es un metodo nuevo que hace consultas a API o backend mejor que ajax
//haremos consultas api a un servidor en la nube, reqres.in

//Array donde se guardaran los datos recibidos por la API
var usuarios = [];

//Buscamos el div de usuarios para enviarlo los valores creados
var div_usuarios = document.querySelector("#usuarios");

// Metodo fetch (ajax), fetch hace consultas ajax
fetch('https://reqres.in/api/users?') //Promesa / peticion / llamada
    //Metodo then y dentro tiene(funcion callback)
    .then(data=> data.json()) //.json(), recibe el valor y lo convierte a json
    //then(funcion calback)
    .then(users => {
        usuarios = users.data; //los datos recibidos lo pasa al array usuarios / Este dato se puede resumir mas.
        ListadoUsuarios(usuarios); //Primer metodo // Si usaramos como parametro users.data ahorramos codigo

    });
    
//Creamos un metodo para poder usar la misma promesa y tener varias peticiones dentro de una promesa
function ListadoUsuarios(usuarios) {
        //Recorremos el array de json con el metodo .map(funcion callback)
        usuarios.map((user, i) => {
            //Creamos el elemento h2, para nombre
            let nombre = document.createElement('h2');
            nombre.innerHTML = i+" "+user.first_name +" "+user.last_name;
            div_usuarios.append(nombre);
    
            //El HTML pusimos un span con clase cargando, para quitarlo usamos lo siguiente
            document.querySelector(".cargando").style.display = "none";
        });        
}