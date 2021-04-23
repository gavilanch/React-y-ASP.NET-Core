// ej 1:

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((valor) => valor * valor);

// console.log('numeros', numeros);
// console.log('cuadrados', cuadrados);

// ej 2:

const personas = [
  { id: 1, nombre: "Felipe", pais: "RD" },
  { id: 2, nombre: "Claudia", pais: "Mexico" },
  { id: 3, nombre: "Roberto", pais: "Chile" },
];

const ids = personas.map(persona => persona.id);
const nombres = personas.map(persona => persona.nombre);
// console.log('nombres', nombres);

const nombresYPaises = personas.map(persona => {
    return {nombre: persona.nombre, pais: persona.pais}
});

// console.log(nombresYPaises);

// ej 3:

const divs = personas.map(persona => `
  <div>
   <span>${persona.nombre}</span> (país: ${persona.pais})
  </div>
`);

console.log(divs);