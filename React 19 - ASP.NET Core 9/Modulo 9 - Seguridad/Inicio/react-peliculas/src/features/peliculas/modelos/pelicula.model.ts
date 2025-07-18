import type Cine from "../../cines/modelos/Cine.model";
import type Genero from "../../generos/modelos/Genero.model";
import type ActorPelicula from "./ActorPelicula";

export default interface Pelicula {
    id: number;
    titulo: string;
    poster: string;
    fechaLanzamiento: string;
    trailer: string;
    generos?: Genero[];
    cines?: Cine[];
    actores?: ActorPelicula[];
}