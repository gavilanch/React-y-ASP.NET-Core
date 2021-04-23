export default function FormularioTexto(props: formularioTextoProps) {
    return (
        <input type="text"
        onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)}
      />
    )
}

interface formularioTextoProps{
    manejarKeyUp(texto: string): void
}