import ValorContext from './ValorContext'
import {useContext} from 'react';

export default function Hijo(){

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Hijo: El valor del context es: {valor}</h3>
        </>
    )
}