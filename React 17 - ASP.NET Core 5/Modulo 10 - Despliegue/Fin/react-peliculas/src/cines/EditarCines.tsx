import { urlCines } from 'utils/endpoints'
import { cineCreacionDTO, cineDTO } from './cines.model'
import FormularioCines from './FormularioCines'
import EditarEntidad from './../utils/EditarEntidad'
export default function EditarCines() {
    return (
        <EditarEntidad<cineCreacionDTO, cineDTO>
                url={urlCines} urlIndice="/cines" nombreEntidad="Cines">
                {(entidad, editar) =>
                    <FormularioCines modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores)
                        }}
                    />}
        </EditarEntidad>

    )
}