'use strict'

window.addEventListener('load', () => {
    
    // Timers
    // Metodo setInternal para ver los timers 
    //Ejecuta esta funcion por ciclos de 3 segundos se mostrara un mensaje en la consola
    var tiempo = setInterval(function() {
        console.log("Set interval ejecutado");
        if (document.querySelector(".timers").style.fontSize == "50px") {
            document.querySelector(".timers").style.fontSize = "10px";
        }else{
            document.querySelector(".timers").style.fontSize = "50px";
        }
    }, 3000);

    var tiempo0 = setTimeout(function() {
        console.log("Aqui se ejecuta el timeout que solo lo hace una vez")
    }, 5000);

    var reloj = document.querySelector("#reloj");
    reloj.addEventListener('click', function() {
        alert("Has parado el reloj");
        clearInterval(tiempo);
        //Es el nombre de la funcion (linea 8 esta hoja)
    });

    //setInterval es para iniciar el timpe
    //clearInterval es para detener un reloj

})