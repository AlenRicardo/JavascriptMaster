$(document).ready(function() {
    //Selectores del etiquetas
    var parrafos = $('p');

    parrafos.dblclick(function() {
       $(this).removeClass("zebra"); 
    });

    parrafos.click(function() {
        if ($(this).hasClass('zebra')) {
            alert("Probando el metodo hasClass, si tiene la clase zebra");
        }else{
            alert("No tiene la clase zebra");
        }
    })
})