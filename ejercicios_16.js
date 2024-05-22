// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(0), 1000)
  }).then(function (resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(resultado + 2) }, 1000)
        console.log(`${resultado} + 2 = ${resultado + 2}`)
    })
  }).then(function (resultado) {
    return new Promise((resolve, reject) => {

      console.log(`${resultado} + 8 = ${resultado + 8}`)
      setTimeout(() => { resolve(resultado + 8) }, 1000)
    })
  }).then(function (resultado) {
    return new Promise((resolve, reject) => {
  
      console.log(`${resultado} + 3 = ${resultado + 3}`)

      setTimeout(() => { resolve(resultado + 3) }, 1000)
    })
  }).then(function (resolve) {
    console.log(`El resultado es de ${resolve}`)
  })