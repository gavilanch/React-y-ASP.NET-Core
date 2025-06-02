function duplicar(valor) {
    return valor * 2;
}

let funcionAnonima = (valor) => {
    return valor * 2;
}

let funcionAnonima2 = valor => valor * 2;

funcionAnonima2(3); // 6

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

sumar(1, 2) // 3

let imprimirAlgo = () => console.log('prueba');

imprimirAlgo();

function FuncionQueRecibeComoParametroUnaFuncion(funcion){
    funcion();
}

FuncionQueRecibeComoParametroUnaFuncion(imprimirAlgo);

FuncionQueRecibeComoParametroUnaFuncion(() => console.log('lo que yo quiera'));


export function EjemploThis(){
    const persona = {
        nombre: 'Felipe',
        edad: 999,

        saludarNormal:  function(){
            setTimeout(function() {
                console.log('Hola, soy ' + this.nombre);
            }, 1000)
        },

        saludarFlecha: function(){
            setTimeout(() => {
                console.log('Hola, soy ' + this.nombre)
            }, 1000);
        }
    };

    persona.saludarNormal(); // Hola, soy undefined
    persona.saludarFlecha(); // Hola, soy Felipe
}