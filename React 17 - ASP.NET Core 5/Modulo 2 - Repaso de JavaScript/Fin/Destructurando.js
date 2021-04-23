let persona = {
  nombre: "Felipe",
  apellido: "Gavilán",
  edad: 999,
  fechaActual: new Date(),
};

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;

// const { nombre, apellido, edad } = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

obtenerDireccion = () => {
  return {
    calle: "Mi calle",
    pais: "Mi país",
    provincia: "Mi provincia",
  };
};

const { pais, provincia } = obtenerDireccion();

// console.log(pais);
// console.log(provincia);

imprimirNombre = (persona) => {
  console.log(persona.nombre);
};

imprimirNombre2 = ({ nombre }) => {
  console.log(nombre);
};

// imprimirNombre(persona);
// imprimirNombre2(persona);

const arreglo = [1, 2, 3, 4];

// const primero = arreglo[0];

const [primero, segundo,,cuarto] = arreglo;

// console.log(primero);
// console.log(segundo);
// console.log(cuarto);

const retornaArreglo = () => {
    return ['Felipe', 'Gavilán']
}

const [nombre, apellido] = retornaArreglo();

console.log(nombre);
console.log(apellido);