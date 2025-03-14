
let numero: number = 0;

if (numero > 0) {
    console.log('el numero es positivo')
} else {
    console.log('el numero es negativo')
}

let edad: number = 18;

if (edad >= 18) {
    console.log("la persona es mayor de edad");
}
else {
    console.log("la persona no es mayor de edad");
}
//Expresion ternaria  condicion / operador? /     true  /   el otro caso:  /   false
let mensaje:String = edad >= 18 ? "la persona es mayor de edad" : "la persona no es mayor de edad";
//Expresion ternaria=   condicion ? valor si true : valor si false;

console.log(edad >= 18 ? "la persona es mayor de edad" : "la persona no es mayor de edad");

let numeroB: number = 0;

if (numeroB > 0) {
    console.log('el numero es positivo')
}
else if (numeroB == 0){
    console.log('el numero es CERO')
}
else {
    console.log('el numero es negativo')
}

let alimento: string = "carne";

if (alimento == "manzana") {
    console.log("elegio una manzana");
}
else if (alimento == "arroz") {
    console.log("elegio arroz");
}
else if (alimento == "huevos") {
    console.log("elegio huevos");
}
else if (alimento == "carne") {
    console.log("elegio carne");
}
else {
    console.log("No reconozco el alimento ");
}


const tipo: string = 'primario';
const color: string = 'Azul'

if (tipo === 'primario') {
    if (color === 'Azul') {
        console.log(`${color} es un color PRIMARIO`);
    } else {
        console.log(`${color} NOO es un color PRIMARIO`);
    }

} else {
    if (color === 'Verde') {
        console.log(`${color} es un color SECUNDARIO`);
    } else {
        console.log(`${color} NOO es un color SECUNDARIO`);
    }
}


const numero: number = 5;

if (numero > 0) {
    console.log("El número es positivo.");

    // Comprobamos si el número positivo es par o impar
    if (numero % 2 == 0) {
        console.log("El número positivo es par.");
    } else {
        console.log("El número positivo es impar.");
    }
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

