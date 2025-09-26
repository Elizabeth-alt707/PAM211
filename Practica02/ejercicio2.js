const productos = [
    { nombre: "Laptop", precio: 13000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 4000 }
];

const nombres = productos 
//uso de .filter para que rrecorra todo el arreglo, asi como la condición 
// de precio > 1000 quien dectectara solo los productos que cumplan con ese requisito.
.filter (({ precio }) => precio > 1000 )
//.map quien devuelve un nuevo arreglo con el resultado.
.map (({nombre}) => nombre);

console.log(nombres);