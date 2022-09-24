'use strict'

window.addEventListener('loal', function() {
    
    
    //Metodos de teclado
    var input = document.querySelector("#campo_nombre");
    
    //Focus
    input.addEventListener('focus', function() {
        console.log("[Focus] Estas dentro del input");
    });
    
    //Blur
    input.addEventListener('blur' ,function() {
        console.log("[blur] Estas fuera del input")
    });
    
    //Keydown
    //string (convirte los datos de entrada en string)
    //fromCharCode(event.keycode) captura las teclas usadas
    input.addEventListener('keydown', function() {
        console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));
    })
    
    //Keypress
    input.addEventListener('keypress', function() {
        console.log("[keypress] Estas haciendo keypress", String.fromCharCode(event.keyCode));
    })

    //Keyup
    input.addEventListener('keyup', function() {
    console.log("[keyup] Estas haciendo keyup");
    })

});