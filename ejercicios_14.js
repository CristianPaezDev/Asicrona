// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function espere(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Operacion completada"), 1000)
    })

    let result = await promise

    alert(result)
}
espere()