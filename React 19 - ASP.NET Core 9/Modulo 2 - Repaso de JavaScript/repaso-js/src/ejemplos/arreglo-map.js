export default function MapEjemplo(){
    // Ejemplo 1: Transformando números

    const numeros = [1,2,3,4,5];
    const cuadrados = numeros.map(valor => valor * valor); // [1, 4, 9, 16, 25]
    // console.log(cuadrados);

    // Ejemplo 2: Extrayendo un valor de un arreglo de objetos

    const personas = [
        {id: 1, nombre: 'Felipe', pais: "RD"},
        {id: 2, nombre: 'Claudia', pais: 'México'},
        {id: 3, nombre: 'Roberto', pais: 'Chile'}
    ];

    // console.log(personas);

    const ids = personas.map(persona => persona.id);
    console.log(ids);

    const nombres = personas.map(persona => persona.nombre);
    console.log(nombres);

    const nombresYPaises = personas.map(persona => {
        return {
            nombre: persona.nombre,
            pais: persona.pais
        }
    });

    console.log(nombresYPaises);

    // Ejemplo 3: Generando UI

    /* 
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    */

    const elementosDeLista = numeros.map(valor => 
        `<li>${valor}</li>`
    );

    

    const lista = `
        <ul>
            ${elementosDeLista.join("")}
        </ul>
    `;

    console.log(lista);
    return lista;

}