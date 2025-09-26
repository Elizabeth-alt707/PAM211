function Api() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");     
        }, 5000); //Temporizador 5 segundos
    });
}

async function obtenerDatos() {
    console.log("El API se está cocinando...");
    const resultado = await Api(); 
    //await se espera la respuesta
    console.log(resultado);
}

obtenerDatos();
