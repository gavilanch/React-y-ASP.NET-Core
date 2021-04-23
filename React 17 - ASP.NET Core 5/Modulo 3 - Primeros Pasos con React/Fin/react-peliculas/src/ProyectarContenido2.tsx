import { ReactElement } from "react";

export default function ProyectarContenido2(props: proyectarContenido2Props){
    return (
        <>
            parte superior: {props.parteSuperior ? props.parteSuperior : <h3>Contenido por defecto</h3>}
            <hr />
            {props.parteIntermedia}
            <hr />
            {props.parteInferior}
        </>
    )
}

interface proyectarContenido2Props{
    parteSuperior?: ReactElement;
    parteIntermedia: ReactElement;
    parteInferior: ReactElement;
}