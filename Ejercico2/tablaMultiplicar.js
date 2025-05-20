// tablaMultiplicar.js

// Pedimos al usuario un número para generar su tabla de multiplicar
let numero = prompt("Ingrese un número para ver su tabla de multiplicar:");

// Convertimos el valor a número
numero = Number(numero);
if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
