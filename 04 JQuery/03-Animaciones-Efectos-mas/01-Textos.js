$(document).ready(function() {
    
    //Muestra una lista de datos conseguidos por el etiqueta a
    $('a').each(function(indice) {
        console.log($(this));
    });

    // igual al anterior solo entra dentro del atributo
    //Imprime el valor interno del atributo.
    $('a').each(function(indice) {
        console.log($(this).attr("href"));
    });

    //Incrutarlo en en el body de la pagina
    // metodo text(), agrega un valor al misma etiqueta a
    $('a').each(function(indice) {
        var that = $(this);
        var enlace = $(that).attr("href");
        that.text(enlace);
    });

    // Aplicando funciones de Javascrip en Jquery se puede hacer
    console.log($('a').length);

    //--------------------------------------------------

    reloadLinks();
    //Al precionar el boton
    $('#add_button')
    .remoteAttr('disabled') //quitar atributos de una etiqueta
    .click(function() {
        //Capturaremos su valor
        console.log($('#add_link').val());
        //Vamos a agregarla a la lista creada li  con id="menu"
        //El metodo html(), agrega un valor pero no lo agrega debemos agregarlo
        // $('#menu').html('<li><a href="'+$('#add_link').val()+'" </a></li>');
        //Por cambiamos html() -> 
        //append() agrega al final de la lista, 
        //prepend() agrega al inicio de la lista,
        //before() agrega en el elemento antes de ese elemento. fuera de la lista 
        $('#menu').append('<li><a href="'+$('#add_link').val()+'" </a></li>');
        //Borramos el input
        $('#add_link').val("");
        reloadLinks();
    })


    function reloadLinks() {
        $('a').each(function(indice) {
            var that = $(this);
            var enlace = $(that).attr("href");

            //Agregarle atributos
            that.attr('target', '_blank')
            that.text(enlace);
        });
    }

});