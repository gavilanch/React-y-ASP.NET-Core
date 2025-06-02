export default function OperadorTernarioEjemplo(){
    const edad = 21;

    // let mensaje;

    // if (edad >= 18){
    //     mensaje = "Eres mayor de edad";
    // } else {
    //     mensaje = "Eres menor de edad";
    // }

    // EXPRESION BOOLEANA ? SENTENCIA-TRUE : SENTENCIA-FALSE
    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

    console.log(mensaje);
}