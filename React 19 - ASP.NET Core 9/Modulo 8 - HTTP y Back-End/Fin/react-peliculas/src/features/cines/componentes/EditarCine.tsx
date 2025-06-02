import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import type CineCreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import type Cine from "../modelos/Cine.model";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

export default function EditarCine() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        clienteAPI.get<Cine>(`/cines/${id}`).then(res => setModelo(res.data))
        .catch(() => navigate('/cines'));
    }, [id, navigate]);

    const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
           try{
            await clienteAPI.put(`/cines/${id}`, data);
            navigate('/cines');
           } catch(err){
                const errores = extraerErrores(err as AxiosError);
                setErrores(errores);
           }
        }

    return (
        <>
            <h3>Editar Cine</h3>
            {modelo ? <FormularioCine errores={errores} modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}