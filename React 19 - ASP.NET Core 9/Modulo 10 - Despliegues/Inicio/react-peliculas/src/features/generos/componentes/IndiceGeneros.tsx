import { useEntidades } from "../../../hooks/useEntidades";
import type Genero from "../modelos/Genero.model";
import IndiceEntidades from "../../../componentes/IndiceEntidades";

export default function IndiceGeneros() {

    const entidadesHook = useEntidades<Genero>('/generos');

    return (
        <>

            <IndiceEntidades<Genero>
                titulo="Géneros" nombreEntidad="Género" url="/generos"
                urlCrear="/generos/crear" {...entidadesHook}
            >
                {(generos, botones) => <>

                    <thead>
                        <tr>
                            <th scope="col">
                                Nombre
                            </th>
                            <th scope="col" className="text-end">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => <tr key={genero.id}>
                            <td>{genero.nombre}</td>
                            <td className="text-end">
                               {botones(`/generos/editar/${genero.id}`, genero.id)}
                            </td>
                        </tr>)}
                    </tbody>

                </>}
            </IndiceEntidades>

        </>
    )
}