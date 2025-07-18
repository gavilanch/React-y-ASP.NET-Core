import type { SubmitHandler } from "react-hook-form";
import FormularioActor from "./FormularioActor";
import type ActorCreacion from "../modelos/ActorCreacion.model";
import { useState } from "react";
import { useNavigate } from "react-router";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";
import clienteAPI from "../../../api/clienteAxios";



export default function CrearActor() {
    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
        try{
            await clienteAPI.postForm('/actores', data);
            navigate('/actores');
        } catch(err){
            const errores = extraerErrores(err as AxiosError);
            setErrores(errores);
        }
    }

    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActor errores={errores} onSubmit={onSubmit} />
        </>
    )
}