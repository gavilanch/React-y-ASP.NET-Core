import { ReactElement } from "react";

export default function ProyectarContenido(props: proyectarContenidoProps){
    return (
        <>
            <h3>Parte superior</h3>

            {props.children}

            <h3>Parte inferior</h3>
        </>
    )
}

interface proyectarContenidoProps{
    children: ReactElement
}