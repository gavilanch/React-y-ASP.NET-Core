export default function VariablesEjemplo(){
    let apellido = "Gavilán";
    apellido = 'Marrero';
    let edad = 999;
    let fecha = new Date();

    let persona = {
        nombre: 'Felipe',
        apellido: 'Gavilán',
        edad: 999,
        fechaActual: new Date(),
        estaLogueado: true
    };

    let miFuncion = function duplicar(valor) {
        return valor * 2;
    }

    var pais = "República Dominicana";
    pais = "México";

    for(let i = 1; i <= 10; i++){
        // ...
    }

    //console.log(i);

    const continente = 'América';
    //continente = 'Europa';

    const ingredientes = ['Queso', 'Jamón'];
    ingredientes.push('Vegetales');
    console.log(ingredientes);
}