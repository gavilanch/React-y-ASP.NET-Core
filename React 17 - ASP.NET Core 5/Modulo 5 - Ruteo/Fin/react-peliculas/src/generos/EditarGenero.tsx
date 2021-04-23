import { useParams } from "react-router-dom";

export default function EditarGenero() {

    const { id }: any = useParams();

    return (
        <>
            <h3>Editar Género</h3>
            <h4>El id es {id}</h4>
        </>

    )
}