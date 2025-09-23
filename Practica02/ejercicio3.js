const personas = [
    { nombre: "Ethan", edad: 25 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 },
];

//Busca a Luis, .find y utilizando destructuracion para ir directo a la variable nombre
const personaLuis = personas.find(({ nombre }) => nombre === "Luis");
console.log(personaLuis);

//En esta parte tambien use destructuracion para ir directo a nombre y edad. Usando .for each al inicio
//junto a personas para que busque en el arreglo personas.
personas.forEach(({ nombre, edad }) => console.log(nombre, "tiene", edad, "años"));

//Aqui usando arreglo en este caso (personas) con el .reduce para que reduzca todos los valores a uno solo 
//asi como el signo de "+" para hacer la suma de estos.
const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("La suma total de edades es:", totalEdades);
