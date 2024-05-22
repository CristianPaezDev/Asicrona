// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.


(async () => {
    try {
        let response = await fetch('ejercicios_23.json');
        let data = await response.json();

        const filtro = data.filter(item => item.name.startsWith('s'));

        if (filtro.length === 0) {
            throw new Error('No se encontraron nombres que comiencen con "s"');
        }

        console.log(filtro);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
