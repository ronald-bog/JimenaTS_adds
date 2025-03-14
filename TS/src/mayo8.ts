// Traspilado

// Utilizacion HTML script

// prompt

// Alert

// Tuplas

let tupla: [number, string] = [5, 'Europa'];
// acceso elementos
console.log(tupla[1]);
tupla[0] = 10;

//tupla.push(6); // error de Typescript

let tuplaR: readonly [number, string] = [5, 'hola'];
//tuplaR.push(6);
console.log(tuplaR);

// Uso de Tuplas con Destructuración

let tuplaD: [number, string, boolean] = [10, "Hola", true];
let [num, str, bool] = tuplaD;

console.log(num); // Imprime: 10
console.log(str); // Imprime: Hola
console.log(bool); // Imprime: true

//Tuplas con Rest Parameters, operador Rest, prograpacion o spread oprator 
let tuplaOR: [number, ...string[]] = [10, "Hola", "Mundo", 'Rest'];
console.log(tuplaOR); // Imprime: [10, "Hola", "Mundo"]


//? FUNCIONES

//* 1. Funciones Declarativas (Function Declarations): LAS MAS COMUNES, Son "hoisted" (elevadas). Esto significa que se pueden usar antes de su definición en el código.

// Definición de la función
//! void sin retorno sin parametros
function saludar() {
    console.log('hola Sofia');
}

//Llamada a la función
saludar();

/* 

let comprobacionV = saludar();

console.log(comprobacionV);

//! return con retorno sin parametros
function saludarR() {
    return 'Hola Sofia';
}

console.log(saludarR("Sofia"));

let comprobacionR = saludarR("Sofia");

console.log(comprobacionR);


// Definición de la función
//! void sin retorno con parametros
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

//Llamada a la función
console.log(saludar("Carlos")); // Output: Hola, Carlos
;

let comprobacionVP = saludar('rONALD');

console.log(comprobacionVP);

//! return con retorno con parametros
function saludarR(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludarR("Sofia"));

let comprobacionRP = saludarR("Sofia");

console.log(comprobacionRP); */
