// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function llamada(elemento){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${elemento}`);
            resolve(`Resultado de ${elemento}`)
        }, 1000)
    });
}

async function lista(lista){
    const resultados = [];
    for (const elemento of lista){
        const resultado = await llamada(elemento);
        resultados.push(resultado)
    }
    return resultados
}

const listelemt = ['Hola', 'Soy', 'Cristian', 'Chao'];

lista(listelemt).then(resultados => {
    setTimeout(() => {
        console.log(`Todos los elementos han sidos procesados`);
        console.log(resultados)
    }, 1000);
});