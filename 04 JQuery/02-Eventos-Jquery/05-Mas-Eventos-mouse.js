$(document).ready(function() {
   var evento = $("#eventos");

   //Cuando presionas el boton del mouse
    evento.mousedown(function() {
        $(this).css('background', 'Red');
    })

   //Cuando sueltas el boton del mouse
    evento.mouseup(function() {
        $(this).css('background', 'green');
    })

    var limpiar = $("#limpiar");
    limpiar.mouseup(function() {
        //Mando la solicitud a  por que es su nombre
        evento.css('background', 'white');
    })

    //mousemove captura el movimiento del raton,
    $(document).mousemove(function() {
        console.log(event.clientX);
        console.log(event.clientY);
        var sigueme = $('#sigueme');
        sigueme.css('left', event.clientX)
               .css('top', event.clientY);
    })
   
});