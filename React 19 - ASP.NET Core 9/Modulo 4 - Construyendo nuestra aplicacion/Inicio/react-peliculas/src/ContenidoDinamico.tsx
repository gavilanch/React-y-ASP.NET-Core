export default function ContenidoDinamico(props: ContenidoDinamicoProps){

    return (
        <div>
            {props.mostrarContenido ? <p>Mostrando el mensaje secreto</p> : undefined}
        </div>
    )

}

interface ContenidoDinamicoProps{
    mostrarContenido: boolean;
}