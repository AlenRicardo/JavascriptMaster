$(document).ready(function() {
    
    //Evento Hover es un resumen mas rapido del mouseover y mouseout
    //Hover
    function cambiaRojo() {
        $(this).css('background', 'red');
    }

    function cambiaVerde() {
        $(this).css('background', 'green');
    }

    var micaja = $('#micaja');

    micaja.hover(cambiaRojo, cambiaVerde);
})