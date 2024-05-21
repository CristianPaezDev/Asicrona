// . Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

function takeWhile(arr, callback) {
  let resultado = [];

  for (const element of arr) {
    if (!callback(element)) {
      break;
    }
    resultado.push(element);
  }

  return resultado;
}

let arr = [1, 2, 3, 4, 5, 6];
let isOdd = (num) => num % 2 !== 0;

let takeArray = takeWhile(arr, isOdd);
console.log(takeArray);
