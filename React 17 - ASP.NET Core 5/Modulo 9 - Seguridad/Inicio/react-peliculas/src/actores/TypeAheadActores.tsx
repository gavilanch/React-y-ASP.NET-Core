import axios, { AxiosResponse } from "axios";
import { ReactElement, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { urlActores } from "utils/endpoints";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps) {
    const [estaCargando, setEstaCargando] = useState(false);
    const [opciones, setOpciones] = useState<actorPeliculaDTO[]>([]);

    const seleccion: actorPeliculaDTO[] = []

    const [elementoArrastrado, setElementoArrastrado] = 
        useState<actorPeliculaDTO | undefined>(undefined)

    function manejarBusqueda(query: string){
        setEstaCargando(true);

        axios.get(`${urlActores}/buscarPorNombre/${query}`)
            .then((respuesta: AxiosResponse<actorPeliculaDTO[]>) => {
                setOpciones(respuesta.data);
                setEstaCargando(false);
            })
    }

    function manejarDragStart(actor: actorPeliculaDTO) 
    {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO)
    {
        if (!elementoArrastrado){
            return;
        }

        if (actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = 
                props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = 
                props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);

        }
    }

    return (
        <>
            <label>Actores</label>
            <AsyncTypeahead
                id="typeahead"
                onChange={actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        props.onAdd([...props.actores, actores[0]]);
                    }
                }}
                options={opciones}
                labelKey={actor => actor.nombre}
                filterBy={() => true}
                isLoading={estaCargando}
                onSearch={manejarBusqueda}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="imagen actor" src={actor.foto}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => <li
                    draggable={true}
                    onDragStart={() => manejarDragStart(actor)}
                    onDragOver={() => manejarDragOver(actor)}
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-pill pointer"
                        style={{ marginLeft: '0.5rem' }}
                        onClick={() => props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}