const readlineSync = require('readline-sync');

console.log(" ");
console.log("Ejercicio 1");
console.log(" ");
//A)pedir al usuario una palabra y guardarla en una variable.
//B)Escribo un bucle for que se ejecute 10 veces y adentro ejecuto un console.log(variable)
let palabra = readlineSync.question('me escribis una palabra? ');
for (let i = 0; i < 11; i++) {
    console.log(palabra);
}

// 
console.log(" ");
console.log("Ejercicio 2");
console.log(" ");
//A)preguntar al usuario su edad.
//B)Mostrar por pantalla todos los años que cumpió (Por ejemplo si cumplió 10, mostrar del 1 al 10).
let edad = readlineSync.question('me decis tu edad? ');
for (let i = 1; i <= edad; i++) {
    console.log(i);
}

//
console.log(" ");
console.log("Ejercicio 3");
console.log(" ");
//A) pedir al usuario un entero positivo.
//B) mostrar en pantalla todos los número impares desde 1 hasta ese número separados por comas.
let enteroPositivo = readlineSync.question('me decis un numero entero positivo?');
let impares = []
for (let i = 1; i <= enteroPositivo; i++) {
    let resto = i % 2 
    if (resto != 0) {
        impares.push(i)
    }   
}
console.log(impares);

//
console.log(" ");
console.log("Ejercicio 4");
console.log(" ");
//ejercicio 4
//A)pedir al usuario un número entero.
let numeroEntero = readlineSync.question('me decis un numero entero?');
for (let i = 1; i <= numeroEntero; i++) {
    console.log('*'.repeat(i));
}
//B) mostrar en pantalla un triángulo rectángulo. ( De altura el número ingresado por el usuario)
//
console.log(" ");
console.log("Ejercicio 5");
console.log(" ");
//ejercicio 5
//A)pedir al usuario una palabra. ejemplo HOLA
//B)dar vuelta la palabr EJEMPLO ALOH. 
//Separar la palabra letra por letra y guaradarlo en una array.
//mostrar en pantalla. El array.
let palabra2 = readlineSync.question('me decis una palabra?');

function darVueltaPalabra(palabra) {
    let arrayPalabra = palabra.split("");
    let arrayDadoVuelta = arrayPalabra.reverse();
    console.log(arrayDadoVuelta);
}

darVueltaPalabra(palabra2);
