import { Typeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type ActorPelicula from "../modelos/ActorPelicula";
import { useState } from "react";

export default function TypeaheadActores(props: TypeaheadActoresProps) {

    const actores: ActorPelicula[] = [{
        id: 1, nombre: 'Tom Holland', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id: 2, nombre: 'Marisa Tomei', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Marisa_Tomei_at_Berlinale_2023.jpg/800px-Marisa_Tomei_at_Berlinale_2023.jpg'
    },
    {
        id: 3, nombre: 'Tom Hanks', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/800px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg'
    }
    ]

    const seleccion: ActorPelicula[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<ActorPelicula | undefined>(undefined);

    const manejarDragStart = (actor: ActorPelicula) => {
        setElementoArrastrado(actor);
    }

    const manejarDragOver = (actor: ActorPelicula) => {
        if (!elementoArrastrado || actor.id === elementoArrastrado.id){
            return;
        }

        const actores = [...props.actores];
        const indiceDesde = actores.findIndex(x => x.id === elementoArrastrado.id);
        const indiceHasta = actores.findIndex(x => x.id === actor.id);

        if (indiceDesde !== -1 && indiceHasta !== -1){
            [actores[indiceDesde], actores[indiceHasta]] = [actores[indiceHasta], actores[indiceDesde]];
            props.onAdd(actores);
        }
    }


    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={(actores: Option[]) => {
                    const actorSeleccionado = actores[0] as ActorPelicula;
                    if (props.actores.findIndex(x => x.id === actorSeleccionado.id) === -1) {
                        props.onAdd([...props.actores, actorSeleccionado]);
                    }
                }}

                options={actores}
                labelKey={(opcion: Option) => {
                    const actor = opcion as ActorPelicula;
                    return actor.nombre
                }}

                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={(opcion: Option) => {
                    const actor = opcion as ActorPelicula;
                    return (
                        <>
                            <img alt="imagen actor" src={actor.foto}
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    marginRight: '10px'
                                }} />
                            <span>{actor.nombre}</span>
                        </>
                    )
                }}
            />

            <ul className="list-group">
                {props.actores.map(actor => (
                    <li 
                        draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item d-flex align-items-center"
                        key={actor.id}
                    >
                        <div style={{ width: '70px' }}>
                            <img style={{ height: '60px' }}
                                src={actor.foto}
                                alt="foto"
                            />
                        </div>
                        <div style={{ width: '150px', marginLeft: '1rem' }}>
                            {actor.nombre}
                        </div>
                        <div className="flex-grow-1 mx-3">
                            <input className="form-control" 
                            placeholder="Personaje" type="text" value={actor.personaje} 
                            onChange={e => props.onCambioPersonaje(actor.id, e.currentTarget.value)}/>
                        </div>
                        <span role="button" className="badge text-bg-secondary"
                        onClick={() => props.onRemove(actor)}
                        >X</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

interface TypeaheadActoresProps {
    actores: ActorPelicula[];
    onAdd(actores: ActorPelicula[]): void;
    onCambioPersonaje(id: number, personaje: string): void;
    onRemove(actor: ActorPelicula): void;
}