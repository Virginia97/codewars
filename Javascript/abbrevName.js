/*
Escribe una función para convertir un nombre en iniciales. Este kata toma estrictamente dos palabras con un espacio entre ellas.

La salida debe ser de dos letras mayúsculas con un punto que las separe.

Debe tener un aspecto como este:

Sam Harris = S.H
Patrick Feeney = P.F

Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
*/


function abbrevName(name) {
    let array = name.split(" ");
    let nombre = array[0][0];
    let apellido = array[1][0];
    return nombre.toUpperCase() + "." + apellido.toUpperCase();
}


console.log(abbrevName("sam harris"))
console.log(abbrevName("Patrick Fenney"))
console.log(abbrevName("Jonathan wildemer"))
console.log(abbrevName("virginia sanchez"))