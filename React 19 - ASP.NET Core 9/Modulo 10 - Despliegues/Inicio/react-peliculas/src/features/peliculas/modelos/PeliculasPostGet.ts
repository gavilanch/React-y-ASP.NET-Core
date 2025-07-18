import type Cine from "../../cines/modelos/Cine.model";
import type Genero from "../../generos/modelos/Genero.model";

export default interface PeliculasPostGet{
    generos: Genero[];
    cines: Cine[];
}