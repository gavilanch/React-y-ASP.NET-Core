import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";

export default function convertirPeliculaCreacionAFormData(peliculaCreacion: PeliculaCreacion){
    const formData = new FormData();
    formData.append('titulo', peliculaCreacion.titulo);

    formData.append('fechaLanzamiento', peliculaCreacion.fechaLanzamiento);

    if (peliculaCreacion.poster){
        formData.append('poster', peliculaCreacion.poster);
    }

    if (peliculaCreacion.trailer){
        formData.append('trailer', peliculaCreacion.trailer)
    }

    formData.append('generosIds', JSON.stringify(peliculaCreacion.generosIds ?? []));
    formData.append('cinesIds', JSON.stringify(peliculaCreacion.cinesIds ?? []));
    formData.append('actores', JSON.stringify(peliculaCreacion.actores ?? []));


    return formData;
}