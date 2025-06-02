export default function DestructurarEjemplo(){
    let persona = {
        nombre: "Felipe",
        apellido: "Gavilán",
        edad: 999,
        fechaActual: new Date(),
    };

    // Ejemplo 1: Destructurando las propiedades de un objeto

    // const nombre = persona.nombre;
    // const apellido = persona.apellido;
    // const edad = persona.edad;

    //const {nombre, apellido, edad} = persona;

    //console.log(nombre, edad, apellido);

    // Ejemplo 2: Destructurando el valor de retorno de una función

    const obtenerDireccion = () => {
        return {
            calle: 'Mi calle',
            pais: 'Mi pais',
            provincia: 'Mi provincia'
        }
    }

    const {pais, provincia} = obtenerDireccion();

    // console.log(pais, provincia);

    // Ejemplo 3: Destructurando el parámetro de una función

    const imprimirNombre = (persona) => {
        console.log(persona.nombre);

        const nombreEnMayusculas = persona.nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    const imprimirNombre2 = ({nombre}) => {
        console.log(nombre);

        const nombreEnMayusculas = nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    // imprimirNombre2(persona);

    // Ejemplo 4: Destructurando un arreglo

    const numeros = [1, 2, 3, 4];

    const [primero, segundo, , cuarto] = numeros;
    //console.log(primero, segundo, cuarto);

    const retornaArreglo = () => {
        return ['Felipe', 'Gavilán'];
    }

    const [nombre, apellido] = retornaArreglo();

    console.log(nombre, apellido);

}