import { useParams } from "react-router"

export default function EditarCine() {

    const { id } = useParams();

    return (
        <>
            <h3>Editar Cine</h3>
            <p>El id es {id}</p>
        </>
    )
}