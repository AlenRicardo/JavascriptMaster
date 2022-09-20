'use strict'

//Evento Load, este evento es aparte ya que ejecuta todo para poder podenr el script de primero
window.addEventListener('load', function() {
    


// Eventos de raton

//Prueba de click
//Este es una mala praxis, por que esta uniendo codigo de html y javascrip
var boton = document.querySelector("#boton");


function cambiarColor() {
    //Comprobar que llegas a la funcion
    console.log("Me has dado click");

    if(boton.style.background == "green") {
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #css";
    return true;
}

//Este es un mejor procedimiendo --------------------------
var boton1 = document.querySelector("#boton1");

//Metodos de escucha del raton

//addEventListener('click');
//llama a una funcion de callback
boton.addEventListener('click', function(){
    cambiarColor();
});

//Evento doble click
boton.addEventListener('dbclick', function(){
    cambiarColor();
});

//Mouse Over, cuando pasas por encima de objeto
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//Mouse out, cuando sales del objeto
boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});


}); //Final del evento loao