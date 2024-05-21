// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

function dropWhile(arr, callback) {
  let resultado = []
  let foundFalse = false

  for (let element of arr) {
    if (!foundFalse && !callback(element)) {
      foundFalse = true
    }
    if (foundFalse) {
      resultado.push(element)
    }
  }

  return resultado
}

const arr = [50, 10, 20, 30, 40, 5]
const multiplo10 = (x) => x % 10 === 0

const final = dropWhile(arr, multiplo10)
console.log(final)