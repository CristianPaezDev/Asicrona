// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arr = [4, 5, 3, 6, 9];

function posicion(numero) {
  return numero % 2 === 0
}
let mostrar = arr.find(posicion)

console.log(mostrar)