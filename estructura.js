//Ex1
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
document.write("L'array aleatori és ====> " + array + "<br/>")
document.write("L'array ordenat és ====> " + array.sort() + "<br/>")
document.write("El primer valor de l'array és ====> " + array[0] + "<br/>")
document.write("L'últim valor de l'array és ====> " + array[4])
*/

//Ex2
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
    document.write(array)

let array2 = [45,35, ...array, ]
    document.write("<br/>" + basurilla)
*/

//Ex3
/*
const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5,6,7]
const numeros = array1.concat(array2);
const unicos = [];

document.write(numeros)

for(var i = 0; i < numeros.length; i++) {
    const elemento = numeros[i];
    if (!unicos.includes(numeros[i])) {
      unicos.push(elemento);
    }
  }

  document.write("<br/>" + unicos)
  */