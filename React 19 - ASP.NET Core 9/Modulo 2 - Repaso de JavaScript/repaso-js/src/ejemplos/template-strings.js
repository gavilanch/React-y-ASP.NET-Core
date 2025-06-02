export default function TemplateStringsEjemplo(){
    const nombre = 'Felipe Gavilán'; // Comillas simples
    const pais = "RD"; // Comillas dobles
    
    const saludo = "Hola, " + nombre + ", ¿Cómo estás";

    const saludo2 = `Hola, ${nombre}, ¿Cómo estás?`; // Usando tildes (backticks)

    const sumar = (a, b) => a + b;

    const mensaje = `Hola, ${nombre}
    
    Esta es una carta

    La suma de 2 y 3 es ${sumar(2,3)}

    Att: Yo`;

    console.log(mensaje);
}