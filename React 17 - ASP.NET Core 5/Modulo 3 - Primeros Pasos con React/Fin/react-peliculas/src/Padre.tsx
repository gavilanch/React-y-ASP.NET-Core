import ValorContext from './ValorContext'
import {useContext} from 'react';
import Hijo from './Hijo'

export default function Padre(){

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Padre: El valor del context es: {valor}</h3>
            <Hijo />
        </>
    )
}