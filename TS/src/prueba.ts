//console.log();
//1. Instalacion de Node
//2. Instalacion de Typescript
//3. Instalacion ts-node
//4. Pruebas iniciales
//5. Ejecuciones
//6. Configuracion compilador tsc -init
//7. Variables y tipos

/* TIPOS JS
number*
string*
boolean*
null* // vimo inicilizacion y tipados string y number ************
const *

undefined*
object
function

TIPOS TS
any*
unknown*
never*
arrays*
tuplas
union
Enums!

TIPOS INFERIDOS
*/



let nombre: string = 'Jimena'

const CONSTANTE: string = 'hola'


type MiTupla = readonly [number, string];

let tuplaExistente: MiTupla = [2, "3"];

let miVariable = (a: number) => a + 1;

function suma() { 1 + 3 };

console.log(typeof suma);




//variable ? console.log("verdadero") : console.log("falso")

// function bucleInfinito(): never {
//     while (true) {
//         console.log("procesando")
//     }
// }

// bucleInfinito();

// let ids: string | number;
// ids = 22

// enum items {
//     primero = 'uno',
//     segundo = 'dos',
//     tercero = 'tres',
//     cuarto = 'cuatro4'
// }

// //console.log(items.cuarto); // Output: cuatro

// let numeros = [1, 2, 3];

// // for (let x of numeros) {
// //     console.log(`Numero: ${x}`)
// // }

// let i = 0;
// while (i <= 5) {
//     console.log('iteracion: ' + (i + 1));
//     i++
// }

// interface Lang {
//     name: string;
//     year?: number;
//     description: Function;
// }

// let javascript: Lang = {
//     name: 'javascript',
//     year: 1995,
//     description: function () {
//         console.log(this.name)
//     }
// }

// javascript.description();


//test jimena
let valJime: number = 100;

let valCaracter;
valCaracter = "";

let primerNombre: string;
primerNombre = 'Carlos Arturo'

let variableConfim: boolean = true;


//valJime1 = 200

let boolean;
boolean = true;

let interrogante = false;

let cantidad = 1001;
console.log(primerNombre)

console.log("Bienvenida");

console.log(valCaracter);
console.log(boolean);
console.log(interrogante);
console.log(cantidad);
console.log(primerNombre);

//null
let nombreNull = null;

console.log(typeof interrogante);
console.log(typeof cantidad);

// undefinded

let varible2 = undefined;
console.log(typeof varible2);

//any
let loQueSea: any = 24364;

// unknown
// never
console.log(variableConfim);

// Variable(let) = puede cambiar
// Constante(const) = NOOO va a cambiar, es fijo
// No dejes variables sin usar en tu codigo
// Variable nunca va a cambiar, cambiale la declaracion const.

let numeroUno: number = 20;
const DIRECCION: string = 'Sur';

console.log();


let miArray: string[] = ['gato', 'perro', 'pez', 'loro'];
//   indices              0       1      2      3
//console.log(miArray[0]);
//console.log(miArray);
//miArray.push('oso');
//console.log(miArray);

let newArray: string[] = [];
console.log(newArray);

newArray.push('mora');
console.log(newArray);

newArray.push('banano');
console.log(newArray);

newArray.push('pera');
console.log(newArray);

newArray.push('manzana', 'melon', 'mandarina');
console.log(newArray);

let fruta = newArray.pop();
console.log(newArray);
console.log(fruta);

newArray.splice(1, 3, 'carro');
console.log(newArray);

let primerNombre1: String = 'Carlos Arturo'
// indices                  0123456789111
//                                    012                      
//console.log(primerNombre1[5])
console.log(primerNombre1.length);

console.log(primerNombre1.charAt(7));
console.log(primerNombre1[7])

let name5: String = 'jimena';
console.log(name5.toUpperCase());
let name6: String = name5.toLowerCase();
console.log(name6);

let msj1: string = "Hola";
let msj2: string = "mundo";
console.log(msj1.concat("-", msj2));

// const a = 1
// const b = '1'

// console.log(a == b);

