// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.

let promise = new Promise(function(resolve){
    setTimeout(() => resolve("Promise resuelta"), 3000)
})

promise.then(respuesta => console.log(respuesta))
