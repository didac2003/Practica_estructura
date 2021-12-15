//Ex6
const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2)
}
const dividir = (num1,num2) => {
    return parseInt(num1) / parseInt(num2)
}
const multiplicar = (num1,num2) => {
    return parseInt(num1) * parseInt(num2)
}

//Ex6
function clicSuma () {
    //Ex10setTimeout(num1, 5000)
    let num1 = prompt("Primer número per sumar")
    let num2 = prompt("Segon número per sumar")
    res = sumar(num1,num2)
    document.getElementById("mostrar").innerHTML = "El resultat és " + res
}
function clicRestar () {
    let num1 = prompt("Primer número per restar")
    let num2 = prompt("Segon número per restar")
    res = restar(num1,num2)
    document.getElementById("mostrar").innerHTML = "El resultat és " + res
}
function clicDividir () {
    let num1 = prompt("Primer número per dividir")
    let num2 = prompt("Segon número per dividir")
    res = dividir(num1,num2)
    document.getElementById("mostrar").innerHTML = "El resultat és " + res
}
function clicMultiplicar () {
    let num1 = prompt("Primer número per multiplicar")
    let num2 = prompt("Segon número per multiplicar")
    res = multiplicar(num1,num2)
    document.getElementById("mostrar").innerHTML ="El resultat és " + res
}

/*
//Ex7
function pasarRatoli () {
    document.getElementById("nom").innerHTML = "Fet per Dídac Gros"
}
function deixarRatoli () {
    document.getElementById("nom").innerHTML = " "
}
*/

//Ex8
/*
let angle = 90;
function rotacio() {
    document.getElementById("imatge").setAttribute("style", "transform: rotate(" + angle + "deg)");
    angle += 90
}
*/

//Ex9
/*
function obrirVideo () {
    window.open(url="https://www.youtube.com/watch?v=RCA3EfKUJMw")
}
*/