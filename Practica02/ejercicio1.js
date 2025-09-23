 const persona = {
     nombre: "Lizzy Orozco",
     edad: 20,
     direccion: {
        ciudad: "Qro",
        pais: "MX"
     }

 };
 const { nombre, edad, direccion: { ciudad }} = persona;
 console.log (" Mi nombre " + nombre + " tengo " + edad + " años y vivo en " + ciudad + ".");