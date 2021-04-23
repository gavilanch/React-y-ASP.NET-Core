import { urlCines } from "utils/endpoints";
import { cineDTO } from "./cines.model";
import IndiceEntidad from './../utils/IndiceEntidad';

export default function IndiceCines() {
    return (
        <>
           <IndiceEntidad<cineDTO>
                url={urlCines} urlCrear="cines/crear" titulo="Cines"
                nombreEntidad="Cine"
            >
                {(cines, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cines?.map(cine =>
                            <tr key={cine.id}>
                                <td>
                                    {botones(`cines/editar/${cine.id}`, cine.id)}
                                </td>
                                <td>
                                    {cine.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}

            </IndiceEntidad>
        </>

    )
}