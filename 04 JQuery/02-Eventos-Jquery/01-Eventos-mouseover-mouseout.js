$(document).ready(function() {
    
    //Eventos de MouseOver y MouseOut
    var caja = $('#caja');

    //Evento mouseover es señalar el objeto
    caja.mouseover(function() {
        $(this).css('background', 'red')
    })

    //Evento mouseout salir del objeto
    caja.mouseout(function() {
        $(this).css('background', 'green')
    })

})