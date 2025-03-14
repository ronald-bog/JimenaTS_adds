
//* Funciones con Parámetros Predeterminados

function potencia(base: number, exponente: number = 2): number {
    return Math.pow(base, exponente);
}

//* Funciones Sobrecargadas

function combinar(a: number, b: number): number;
function combinar(a: string, b: string): string;
function combinar(a: any, b: any): any {
    return a + b;
}

let combinado1 = combinar(1, 2); // 3
let combinado2 = combinar("Hola, ", "Mundo"); // "Hola, Mundo"


//* desestructurar o desempaquetar un array, vemos este tema para entender como retornamos multiples valores en un funcion.

let array = [10, 20, 30];
let [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);
console.log(array);

//* Alcance de las variables.

let global = 'Global';
function globalF() {
    console.log(global);
}

globalF();

function accesoF() {
    let local = 'Dentro de la funcion';
}


//* Funciones con multiple retornos

function retornarValores(): [number, number] {
    const valor1: number = 1;
    const valor2: number = 2;
    return [valor1, valor2];
}

