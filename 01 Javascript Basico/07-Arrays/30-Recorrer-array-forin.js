'use strict'

var nombres = ["Alen", "Ricardo", "Peñaloza", "Jimenez"];

// el nomb seria el indice
//nombres seria el array completo
for (const nomb in nombres) {
        const element = nombres[nomb];
        console.log(element);
}