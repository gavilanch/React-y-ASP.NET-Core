import { type SubmitHandler } from "react-hook-form";

import type GeneroCreacion from "../modelos/GeneroCreacion.model";
import FormularioGenero from "./FormularioGenero";

export default function CrearGenero() {
    const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
        console.log('creando el género...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Crear Género</h3>
            <FormularioGenero onSubmit={onSubmit} />
        </>
    )
}


