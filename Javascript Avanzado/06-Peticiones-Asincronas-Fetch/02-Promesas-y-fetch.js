'use strict'

var div_usuarios = document.querySelector("#usuarios");

var div_janet = document.querySelector("#janet");

getUsuarios()
.then(data=> data.json()) 
.then(users => {
    ListadoUsuarios(users.data); 

    return getJanet();
})
.then(data => data.json())
.then(user => {
    mostrarJanet(user.data);

    return getInfo();
})
.then(data => {
    console.log(data);
})
//Capturando error en las promesas
.catch(error => {
    alert("Error en la peticiones "+error);
})

function getUsuarios() {
    return fetch('https://reqres.in/api/users?') //Llamada, peticion
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2') //Llamada, peticion
}

//Creando una promesa video separado -------------------------------------------------------

function getInfo() {
    
    var profesor = {
        nombre: "Alen Ricardo",
        apellido: "Peñaloza",
        url: "www.alenricardo.com"
    };
    
        //Creando una promesa desde cero
        return new Promise((resolve, reject) => {
            var profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != "string" || profesor_string == " ") return reject('Error');

            return resolve(profesor_string);
            //Continuamos en la linea 18, para encadenar esta promesa creada en las otras
        });
    
}
//------------------------------------------------------------------------------------------
    
function ListadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i+" "+user.first_name +" "+user.last_name;
            div_usuarios.append(nombre);
    
            document.querySelector(".cargando").style.display = "none";
        });        
}

function mostrarJanet(user) {
    console.log(user)
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name +" "+user.last_name;
        avatar.src = user.avatar;

        //Se puede estilizar el avatar con .with .heght para dar un tamaño

        div_janet.append(nombre);
        div_janet.append(avatar);


        document.querySelector(".cargando").style.display = "none";
}