import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import type GeneroCreacion from "../modelos/GeneroCreacion.model";
import FormularioGenero from "./FormularioGenero";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import type Genero from "../modelos/Genero.model";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

export default function EditarGenero() {

    const { id } = useParams();
    const [modelo, setModelo] = useState<GeneroCreacion | undefined>(undefined);
    const navigate = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        clienteAPI.get<Genero>(`/generos/${id}`).then(res => setModelo(res.data))
        .catch(() => navigate('/generos'));
    }, [id, navigate]);

    const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
        try{
            await clienteAPI.put(`/generos/${id}`, data);
            navigate('/generos');
        } catch(err) {
            const errores = extraerErrores(err as AxiosError);
            setErrores(errores);
        }
    }

    return (
        <>
            <h3>Editar Género</h3>
            {modelo ? <FormularioGenero errores={errores} modelo={modelo} onSubmit={onSubmit} /> : <Cargando />} 
        </>
    )
}