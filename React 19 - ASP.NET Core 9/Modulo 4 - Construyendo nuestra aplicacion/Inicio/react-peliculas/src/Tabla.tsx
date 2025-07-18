import { useState } from "react";
import type Persona from "./persona.model";
import Fila from "./Fila";

export default function Tabla(){

    const personasFuente: Persona[] = [
        { id: 1, nombre: 'Felipe', departamento: 'Ingeniería' },
        { id: 2, nombre: 'Claudia', departamento: 'Recursos Humanos' },
        { id: 3, nombre: 'Roberto', departamento: 'Contabilidad' },
        { id: 4, nombre: 'Francisca', departamento: 'Contabilidad' },
        { id: 5, nombre: 'José', departamento: 'Operaciones' },
        { id: 6, nombre: 'Estephany', departamento: 'Ingeniería' },
        { id: 7, nombre: 'Norberto', departamento: 'Recursos Humanos' },
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = (persona: Persona) => {
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map(p => <Fila key={p.id} persona={p} remover={removerPersona} />)}
            </tbody>
        </table>
    )

}