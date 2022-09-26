// El $ objeto jquery como tal
//Metodo .ready(function callback)
$(document).ready(function(){
    console.log("jQuery y la web cargados...");

    //Selectores de id de elementos
    var texto0 = $("#texto0");
    var texto1 = $("#texto1").css("background", "red")
                             .css("color", "white");

//Se puede crear o no la variable como acontinuación
    $("#texto2").css("background", "yellow")
                .css("color", "white");


    console.log(texto0);
})