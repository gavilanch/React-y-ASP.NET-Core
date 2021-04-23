import { actorCreacionDTO } from "actores/actores.model";
import { peliculaCreacionDTO } from "peliculas/peliculas.model";

export function convertirActorAFormData(actor: actorCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    if (actor.biografia){
        formData.append('biografia', actor.biografia);
    }

    if (actor.fechaNacimiento){
        formData.append("fechaNacimiento", formatearFecha(actor.fechaNacimiento));
    }

    if (actor.foto){
        formData.append("foto", actor.foto);
    }

    return formData;
}

export function convertirPeliculaAFormData(pelicula: peliculaCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('titulo', pelicula.titulo);

    if (pelicula.resumen){
        formData.append('resumen', pelicula.resumen);
    }

    formData.append('trailer', pelicula.trailer);
    formData.append('enCines', String(pelicula.enCines));
    if (pelicula.fechaLanzamiento){
        formData.append("fechaLanzamiento", formatearFecha(pelicula.fechaLanzamiento));
    }

    if (pelicula.poster){
        formData.append('poster', pelicula.poster);
    }

    formData.append("generosIds", JSON.stringify(pelicula.generosIds));
    formData.append("cinesIds", JSON.stringify(pelicula.cinesIds));
    formData.append("actores", JSON.stringify(pelicula.actores));

    return formData;
}

function formatearFecha(date: Date){
    date = new Date(date);
    const formato = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: '2-digit',
        day: "2-digit"
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`;
}