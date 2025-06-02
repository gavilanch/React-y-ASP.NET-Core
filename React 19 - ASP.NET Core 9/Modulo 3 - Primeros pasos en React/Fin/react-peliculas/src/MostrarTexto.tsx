export default function MostrarTexto(props: MostrarTextoProps) {
    return (
        <div>
            <p>Haz escrito: {props.texto}</p>
        </div>
    )
}

interface MostrarTextoProps{
    texto: string;
}