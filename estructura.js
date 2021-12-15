//Ex1
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
document.write("L'array aleatori és ====> " + array + "<br/>")
document.write("L'array ordenat és ====> " + array.sort() + "<br/>")
document.write("El primer valor de l'array és ====> " + array[0] + "<br/>")
document.write("L'últim valor de l'array és ====> " + array[4])
*/

//Ex2
let array = Array.from({length: 5}, () => Math.floor(Math.random() *5))
    document.write(array)

    let basurilla = [45,35, ...array, ]