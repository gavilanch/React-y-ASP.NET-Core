export default function ProyectarContenido2(props: ProyectarContenido2Props){

    return (
        <>
            {props.parteSuperior}
            <hr />
            {props.parteIntermedia}
            <hr />
            {props.parteInferior}
        </>
    )

}

interface ProyectarContenido2Props{
    parteSuperior: React.ReactNode;
    parteIntermedia: React.ReactNode;
    parteInferior: React.ReactNode;
}