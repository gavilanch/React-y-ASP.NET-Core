let miFuncion = function duplicar(valor) {
  return valor * 2;
};

let duplicar = (valor) => {
    return valor * 2;
}

let duplicar2 = valor => valor * 2;

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

let imprimirAlgo = () => console.log('algo');

let funcionCompleja = () => {
    // linea 1
    // linea 2
    // ...
}

// this

const obj = {
    funcionNormal: function(){
        console.log('funcion normal', this);
    },
    funcionFlecha: () => {
        console.log('función flecha', this)
    }
}

console.log('this del ambiente', this);
obj.funcionNormal();
obj.funcionFlecha();