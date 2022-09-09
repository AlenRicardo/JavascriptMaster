'use stric'

// Condicional  IF
var edad1 = 30;
var edad2 = 12;

// En esta condicion es si o no
if (edad1 > 17) {
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

// Condicional anidado, if dentro de otro if
var consola = "xbox";
var juegos = 5;

if (consola == "xbox") {
    if (juegos > 0) {
        var comentario = "tiene "+ juegos + " juegos";
    }else{
        var comentario = "no tiene juegos";
    }
    console.log("Tiene una xbox y "+comentario);
}

// Condicional de else if
if (consola == "play") {
    console.log("Tiene una Play");
} else if(consola == "nintendo"){
    console.log("Tiene una consola de Nintendo");
}else{
    console.log("Tiene una Xbox")
}

// Operadores Relacionales
// Mayor >
// Menor <
// Mayor o igual >=
// Menor o igual <=
// Igual ==
// Distinto !=

// Operadores logicos
// AND(Y) &&
if (consola == "xbox" && juegos > 0) {
    console.log("Tiene una xbox con "+ juegos + " juegos");
}

// OR(O) ||
if (consola == "xbox" || juegos == 0) {
    console.log("Tiene cosas de consola");
}

// Negación ! o diferente
if (consola != "play") {
    console.log("No tiene play")
}