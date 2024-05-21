// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

let arr = [3, 4, 5, 6, 9];

function esMultiploDeTres(numero) {
    return numero % 3 === 0;
}

function every(arr, callback) {
    return arr.every(callback);
}

let resultado = every(arr, esMultiploDeTres);
console.log(resultado);
