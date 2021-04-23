export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface landingPageDTO {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}