import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type CineCreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";

export default function EditarCine() {

    const { id } = useParams();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            setModelo({nombre: 'Agora Mall Edicion', latitud: 18.48347981789517, longitud: -69.9393939971924});
        }, 1000);
    }, [id]);

    const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
            console.log('editar el cine....');
            await new Promise(resolve => setTimeout(resolve, 500));
            console.log(data);
        }

    return (
        <>
            <h3>Editar Cine</h3>
            {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}