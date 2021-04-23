export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento: Date;
    cines: cineDTO[];
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    votoUsuario?: number;
    promedioVoto?: number;
}

export interface peliculaCreacionDTO {
    titulo: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface landingPageDTO {
    enCines?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[];
}

export interface peliculasPostGetDTO{
    generos: generoDTO[];
    cines: cineDTO[]
}

export interface peliculasPutGetDTO {
    pelicula: peliculaDTO;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actores: actorPeliculaDTO[];
}