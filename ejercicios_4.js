// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"

let arr = [1, 2, 3, 4, 5]

function filtrar (arr, subir){
    return arr.filter(subir)
}

let subir = filtrar(arr, (par) => par % 2 === 0);

console.log(arr)
console.table(subir)
