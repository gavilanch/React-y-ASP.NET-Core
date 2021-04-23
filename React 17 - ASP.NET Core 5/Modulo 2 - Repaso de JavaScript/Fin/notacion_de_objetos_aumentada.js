let apellido = "Gavilán";
let edad = 999;
let fecha = new Date();

const paisProp = 'pais';
const paisValor = 'RD';

let persona = {
  nombre: "Felipe",
  apellido, // => apellido: apellido
  edad,
  fechaActual: new Date(),
  funcionNormal() {
    //...
  },
  funcionFlecha: () => {},
  [paisProp]: paisValor
};

const retornarValoresPersona = (prop) => persona[prop];

//console.log(persona);
console.log(retornarValoresPersona('apellido'));
console.log(persona['pais']);
