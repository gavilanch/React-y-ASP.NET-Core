import type ActorPelicula from "./ActorPelicula";

export default interface PeliculaCreacion {
    titulo: string;
    fechaLanzamiento: string;
    trailer?: string;
    poster?: File | string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: ActorPelicula[];
}