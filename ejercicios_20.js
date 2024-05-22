// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1000); 
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(5), 2000); 
});

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(8), 3000); 
});

Promise.all([promise1, promise2, promise3])
    .then(function(values) {
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        console.log(`Todas las promesas se han resuelto. La suma de los valores es ${sum}.`);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
