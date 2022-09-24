'use strict'

try {
    var year = 2000;
    alert(yea);
} catch (error) {
    alert("Ha ocurrido un error en el codigo: "+error);
}

try {
    //Aqui dejas todo el codigo que puede llegar a fallar
} catch (error) {
    //puedes poner un alert y console.log para que muestre el error, con el parametro "error".
    //console.log(error);
    //alert(error);
}