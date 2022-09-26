$(document).ready(function() {

    //Agregando clases a los parrafos(p) y enlaces(a)
    $('p, a').addClass("margen");
    
    //Buscar Elementos dentro del DOM cuando hay muchos valores
    var busqueda = $('caja').find(".prueba");
    console.log(busqueda);

    //Buscar saliendo de una etiqueta a otra, saiendo de la etiqueta caja
    var busqueda = $('caja').eq(0).parent().parent().parent().find(".prueba");

    //Como es una busqueda dentro del ID caja, devuelve un array de valores
    // eq(0), es el numero del array que va devolver.
    //parent(), si fuera un terminal seria como cd.. , volver atras
    //find, es el metodo de buscar
})