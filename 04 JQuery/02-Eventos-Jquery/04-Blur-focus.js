$(document).ready(function() {
    
    //Evento focus
    var nombre = $('#nombre');
    nombre.focus(function() {
        $(this).css('border', '2px solid yellow');
    })

    //Evento blur
    nombre.blur(function() {
        $(this).css('border', '1px solid #ccc')
        //$(this).val() -> metodo que toma el valor anterior
        //$('#datos').text("Agregamos valor").show();
        $('#datos').text($(this).val()).show();
    })

})