import { useForm, type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "../modelos/GeneroCreacion.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import  { NavLink } from "react-router";
import Boton from "../../../componentes/Boton";
import { primeraLetraMayuscula } from "../../../validaciones/Validaciones";
import MostrarErrores from "../../../componentes/MostrarErrores";

export default function FormularioGenero(props: FormularioGeneroProps) {

const {register, 
        handleSubmit,
        formState: {errors, isValid, isSubmitting}
    } = useForm<GeneroCreacion>({
        resolver: yupResolver(reglasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? {nombre: ''}
    });

    return (
        <>
            <MostrarErrores errores={props.errores} />
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input autoComplete="off" className="form-control" {...register('nombre')} />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>
                <div className="mt-2">
                    <Boton type='submit' disabled={!isValid || isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>
                    <NavLink to="/generos" className="btn btn-secondary ms-2">Cancelar</NavLink>
                </div>
            </form>
        </>
    )
}

interface FormularioGeneroProps {
    modelo?: GeneroCreacion;
    onSubmit: SubmitHandler<GeneroCreacion>;
    errores: string[];
}

const reglasDeValidacion = yup.object({
    nombre: yup.string().required('El nombre es obligatorio').test(primeraLetraMayuscula())
})