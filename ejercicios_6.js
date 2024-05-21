// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

let arr = [1, 2, 3, 4, 5];

function dos(numero){
    return numero % 2 === 0
}

function some(arr, numero){
    return arr.some(numero)
}

let seleccion = arr.filter(dos)

console.log(seleccion)

