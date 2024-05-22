// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

const filtrar = x => x.name === "Correccion-evaluacion";

(async () => {
    let response = await fetch('ejercicios_17.json');
    let user = await response.json();

    let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
    let usuariogithub = await respuestaGithub.json()

    // usuariogithub.forEach(element => {
    //     if (element.name === "Evaluacion"){
    //         console.log(element)
    //     }
    // })

    let data = usuariogithub.filter(filtrar)
    console.log(data)
    // console.log(usuariogithub)
})();