export default function ProyectarContenido(props: ProyectarContenidoProps){
    return (
        <>
            <h3>Parte superior</h3>
            {props.children}
            <h3>Parte inferior</h3>
        </>
    )
}

interface ProyectarContenidoProps{
    children: React.ReactNode
}