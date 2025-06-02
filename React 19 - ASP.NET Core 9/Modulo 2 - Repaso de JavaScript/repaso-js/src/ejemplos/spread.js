export default function OperadorSpread(){
        // Ejemplo 1: Operador spread con una función

        const sumar = (a, b) => a + b;

        const numeros = [2,3];

        const resultado = sumar(...numeros);
        // console.log(resultado); // 5

        // Ejemplo 2: Concatenando arreglos

        const masNumeros = [1, ...numeros]; // [1, 2, 3]
        const masNumerosV2 = [1, numeros]; // [1, [2, 3]]

        // console.log(masNumeros);
        // console.log(masNumerosV2);

        // Ejemplo 3: Concatenando varios arreglos

        const otrosNumeros = [4,5];

        const muchosNumeros = [...numeros, ...otrosNumeros] // [2, 3, 4, 5]

        // Ejemplo 4: Destructurando y usando el operador spread sobre un arreglo

        const [primero, ...resto] = muchosNumeros;

        // console.log(muchosNumeros);
        // console.log(primero);
        // console.log(resto);

        // Ejemplo 5: Clonando un arreglo

        // const muchosNumeros2 = muchosNumeros;
        // muchosNumeros2.push(6);

        // console.log(muchosNumeros);
        // console.log(muchosNumeros2);

        const muchosNumerosClonados = [...muchosNumeros];
        muchosNumerosClonados.push(6);

        // console.log(muchosNumeros);
        // console.log(muchosNumerosClonados);

        // Ejemplo 6: Operador spread sobre un objeto

        const persona = {
            nombre: 'Felipe',
            apellido: 'Gavilán'
        };

        const persona2 = {
            ...persona,
            edad: 999,
            direccion: {
                pais: "RD",
                provincia: "Santo Domingo"
            }
        }

        // console.log(persona2);

        // Ejemplo 7: Clonando un objeto

        const persona3 = {...persona2};
        persona3.nombre = "Claudia";

        // Ejemplo 8: Destructurar y operador spread sobre un objeto

        const {edad, direccion, ...persona4} = persona2;

        console.log(edad);
        console.log(direccion);
        console.log(persona4);

}