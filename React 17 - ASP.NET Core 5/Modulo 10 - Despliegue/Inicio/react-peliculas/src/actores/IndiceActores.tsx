import { urlActores } from "utils/endpoints";
import IndiceEntidad from "utils/IndiceEntidad";
import { actorDTO } from "./actores.model";

export default function IndiceActores() {
    return (
        <>
            <IndiceEntidad<actorDTO>
                url={urlActores} urlCrear="actores/crear" titulo="Actores"
                nombreEntidad="Actor"
            >
                {(actores, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actores?.map(actor =>
                            <tr key={actor.id}>
                                <td>
                                    {botones(`actores/editar/${actor.id}`, actor.id)}
                                </td>
                                <td>
                                    {actor.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
            </IndiceEntidad>
        </>

    )
}