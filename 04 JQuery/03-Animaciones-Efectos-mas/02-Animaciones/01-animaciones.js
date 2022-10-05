$(document).ready(function() {
    //Animaciones Jquery
    
    //Probando la conexion con los documentos
    //alert("hola");s

    //Metodo animate()
    $('#animame').click(function() {
        $('#caja').animate({marginLeft: '500px',
                            fontSize: '40px',
                            height: '110px',
                            }, 'slow')
                .animate({
                    borderRadius: '900px',
                    marginTop: '80px'
                }, 'slow')
                .animate({
                    borderRadius: '0px',
                    marginLeft: '0px'
                }, 'slow')
                .animate({
                    borderRadius: '100px',
                    marginTop: '0px'
                }, 'slow')
                            ;
    });

    $('#call').click(function() {
        $('#texto').hide('slow', function() {
            console.log("Este mensaje sera enviado a la consola al terminar la animacion")
            alert("Termino la animación")
        })
    })
});