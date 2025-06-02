import { useMemo, useState } from "react"

export default function EjemploMemoizar() {

    const [numero, setNumero] = useState(1);
    const [nombre, setNombre] = useState("");

    const factorial = useMemo(() => {
        console.log('calculando factorial');
        let resultado = 1;
        for (let i = 1; i <= numero; i++){
            resultado = resultado * i;
        }

        return resultado;
    }, [numero])

    return (
        <>
            <p>Calcular el factorial de <input type="number" onChange={e => setNumero(Number(e.target.value))} /></p>

            <p>El factorial de {numero} es {factorial}</p>

            <p>Nombre: <input type="text" onChange={e => setNombre(e.target.value)}/></p>

            <p>Hola, {nombre}</p>
        </>
    )
}