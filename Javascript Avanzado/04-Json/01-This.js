'use strict'

window.addEventListener('load', function() {
    
    //Este ejercicio probamos el this
    var input = document.querySelector("#caja");

    input.addEventListener('focus', function() {
       console.log("Paso el mouse por el input");
       confirm.log(this);
       //Podemos observar que es igual que poner el nombre input
       this.style.background = "red"; 
       //Probaremos la manera normal, input y this funcionan similar
       input.style.color = "white";

       //Conclusion esto funciona siempre que este despues de la llamada del query selector
    });

})