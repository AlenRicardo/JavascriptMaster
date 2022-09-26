$(document).ready(function() {
    
    //Seleccionando clases
    var parrafo = $(".parrafo0").css("background","green");

    //Maneras de imprimir clases
    console.log(parrafo);
    console.log(parrafo.eq(1));

    //Otra manera de asignarles cambios a un objetos del DOM
    var otroparrafo = $(".parrafo1");
    otroparrafo.css("background", "red")
               .css("color", "white");

    //Cree una clases sin borde para ver cual considera 
    $(".sin_borde").click(function() {
        //metodo addClass agrego una clase existente en el body html
        //y tomo el selector this
        $(this).addClass('zebra')
    })
})