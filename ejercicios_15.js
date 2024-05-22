// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let promise = new Promise(function(resolve, reject){
    setTimeout(() => reject("Promise rechazada"), 2000)
})

promise.catch(respuesta => console.log(respuesta))
