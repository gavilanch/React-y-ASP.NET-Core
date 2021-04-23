import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
                .max(50, 'La longitud máxima es de 50 caracteres')
                    .primeraLetraMayuscula()
            })}

        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />

                    <Button disabled={formikProps.isSubmitting} 
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}