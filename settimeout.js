// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde = parseInt(prompt("Ingresa el número con el que deseas comenzar"));
let hasta = parseInt(prompt("Ingresa el número con el que deseas concluir"));

function imprimirNumerosTimeout(desde, hasta) {
    function imprimir(numero) {
        console.log(numero); 
        if (numero < hasta) { 
            setTimeout(() => imprimir(numero + 1), 1000); 
        }
    }
    imprimir(desde); 
}

imprimirNumerosTimeout(desde, hasta);
