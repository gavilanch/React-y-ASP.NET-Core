import { useState, useEffect } from "react";

export default function EjemploReloj() {

    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setFecha(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    })

    return (
        <div>
            <h3>Ejemplo React</h3>
            <input />
            <div>{fecha.toString()}</div>
        </div>
    )
}