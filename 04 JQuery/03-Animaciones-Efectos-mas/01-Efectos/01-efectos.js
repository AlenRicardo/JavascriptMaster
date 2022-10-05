$(document).ready(function() {
    //Efectos en jquery

    //hide(), metodo de ocultar
      //fadeIn(), metodo igual a ocultar solo lo hace devanecido
    //show(), metodo para mostrar
      //faceOut(), metodo igual a ocultar solo lo hace devanecido
        //show('fast') velocidad de mostrar
        //show('normal') velocidad de mostrar

    //fadeTo('slow', 0.8), desaparece con opacidad se muestra
    //fadeTo('slow', 0.1), desaparece con opaciddad se oculta



    //Dejamo la caja oculta desde el inicio
    $('#caja').hide();
    $('#ocultar').hide();

    $('#mostrar').click(function() {
        $('#caja').show();
        $('#mostrar').hide();
        $('#ocultar').show();
    });
    
    $('#ocultar').click(function() {
        $('#caja').hide();
        $('#ocultar').hide();
        $('#mostrar').show();
    })

    $('#todoenuno').click(function() {
        //toggle(), metodo de mostrar y oculpa junto
        //fadeToggle(), otro metodo
        //slideToggle(), desplegable
        //slideUp(), muestra
        //slideDown(), oculta
        $('#micaja').toggle('fast'); 
    })
})