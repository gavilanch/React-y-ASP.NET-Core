// En inglés: template strings

const apellido = 'Gavilán' // comillas simples
const pais = "RD"; // comillas dobles

const saludo = "Hola, " + apellido + ", ¿Cómo estás?";

const saludo2 = `Hola, ${apellido}, ¿Cómo estás?` // tildes (backticks)

// console.log(saludo2);

let sumar = (a,b) => a+b;


const mensaje = `Hola, ${apellido},

Esta es una carta, desde ${pais}.

La suma de 2 y 3 es ${sumar(2,3)}

Att: Yo`;

console.log(mensaje);