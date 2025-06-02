export class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El área del rectángulo es ${this.alto * this.ancho}`);
    }
}

export class Cuadrado extends Rectangulo {
    constructor(alto){
        super(alto, alto);
        this.alto = alto;
    }

    area(){
        console.log(`El área del cuadrado es ${this.alto * this.alto}`);
    }
}
