// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arr = [4, 5, 3, 6, 9];

function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

function multiplo(elemento) {
    return elemento % 3 === 0;
}

let resultado = find(arr, multiplo);
console.log(resultado);
