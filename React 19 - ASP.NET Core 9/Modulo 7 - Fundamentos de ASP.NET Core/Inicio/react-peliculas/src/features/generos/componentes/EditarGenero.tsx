import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type GeneroCreacion from "../modelos/GeneroCreacion.model";
import FormularioGenero from "./FormularioGenero";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";

export default function EditarGenero() {

    const { id } = useParams();
    const [modelo, setModelo] = useState<GeneroCreacion | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModelo({ nombre: 'Drama ' + id })
        }, 1000);

        return () => clearTimeout(timerId);
    }, [id])

    const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
        console.log('editando el género...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Editar Género</h3>
            {modelo ? <FormularioGenero modelo={modelo} onSubmit={onSubmit} /> : <Cargando />} 
        </>
    )
}