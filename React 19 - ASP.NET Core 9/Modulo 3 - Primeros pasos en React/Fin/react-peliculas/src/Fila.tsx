import type Persona from "./persona.model";

export default function Fila({persona, remover}: FilaProps) {
    return (
        <tr>
            <td>{persona.nombre}</td>
            <td>{persona.departamento}</td>
            <td>
                <button onClick={() => remover(persona)}>Remover</button>
            </td>
        </tr>
    )
}

interface FilaProps {
    persona: Persona;
    remover: (p: Persona) => void;
}