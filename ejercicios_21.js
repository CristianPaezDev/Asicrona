// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

// Promise 1: Se resuelve después de 1 segundo
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1000); 
});

// Promise 2: Se resuelve después de 2 segundos
const promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(5), 2000); 
});

// Promise 3: Se resuelve después de 3 segundos
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(8), 3000); 
});

// Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promesas
Promise.allSettled([promise1, promise2, promise3])
    .then(function(results) {
        // results es un arreglo de objetos que describen el resultado de cada Promesa
        const sum = results.reduce((acc, curr) => {
            // Verifica si la Promesa se resolvió con éxito
            if (curr.status === 'fulfilled') {
                // Suma el valor resuelto de la Promesa al acumulador
                return acc + curr.value;
            } else {
                // En caso de que la Promesa haya sido rechazada, no sumamos nada
                return acc;
            }
        }, 0);
        console.log(`Todas las promesas se han resuelto. La suma de los valores es ${sum}.`);
    })
    .catch(function(error) {
        // Maneja cualquier error que ocurra durante el proceso
        console.error('Error:', error);
    });
