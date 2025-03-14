// Importar el módulo 'readline' para leer desde la entrada estándar
const readline = require("readline");

// Crear una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin, // Utiliza la entrada estándar (en este caso, la consola)
  output: process.stdout, // Utiliza la salida estándar (en este caso, la consola)
});

// Preguntar al usuario por información
rl.question("Por favor, ingresa tu nombre: ", (nombre) => {
  console.log(`¡Hola, ${nombre}!`); // Imprimir un saludo con el nombre ingresado por el usuario
  rl.close(); // Cerrar la interfaz de lectura cuando hayamos terminado
});
//
