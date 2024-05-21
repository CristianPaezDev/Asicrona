let desde = parseInt(prompt("Ingresa el número con el que deseas comenzar"));
let hasta = parseInt(prompt("Ingresa el número con el que deseas concluir"));

function imprimirNumerosInterval(desde, hasta) {
    let intervalo = setInterval(() => {
        console.log(desde);
        if (desde === hasta) {
            clearInterval(intervalo);
        }
        desde++; 
    }, 1000);
}

imprimirNumerosInterval(desde, hasta);