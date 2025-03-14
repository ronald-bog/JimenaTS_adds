//* funcion flecha
let apellido = ():string => {
    return 'Mi apellido Bernal';
}

console.log(apellido());


//* parametros opcionales?
const prueba = (a:number, b?:number):number => {
    if (!b){
        return a
    }
    else{
        const c:number = a + b;
        return c;
    }

}

console.log(prueba(1, 3));

