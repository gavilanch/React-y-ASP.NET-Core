import React from "react";
import EditarEntidad from "utils/EditarEntidad";
import { urlGeneros } from "utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "./generos.model";

export default function EditarGenero() {

    return (
        <>
            <EditarEntidad<generoCreacionDTO, generoDTO>
                url={urlGeneros} urlIndice="/generos" nombreEntidad="Géneros">
                {(entidad, editar) =>
                    <FormularioGeneros modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores)
                        }}
                    />}
            </EditarEntidad>
        </>

    )
}