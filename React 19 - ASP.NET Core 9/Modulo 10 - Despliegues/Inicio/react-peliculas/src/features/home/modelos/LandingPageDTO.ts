import type Pelicula from "../../peliculas/modelos/pelicula.model";

export default interface LandingPageDTO {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[]
}