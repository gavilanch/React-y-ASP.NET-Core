import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import clienteAPI from "../../../api/clienteAxios";
import type Genero from "../../generos/modelos/Genero.model";
import type Pelicula from "../modelos/pelicula.model";
import type PeliculasFiltrarDTO from "../modelos/PeliculasFiltrar.model";
import type { UseFormSetValue } from "react-hook-form";

export default function useFiltroPeliculas(valorInicial: PeliculasFiltrarDTO,
    setValue: UseFormSetValue<PeliculasFiltrarDTO>) {
    const [generos, setGeneros] = useState<Genero[]>([]);
    const [peliculas, setPeliculas] = useState<Pelicula[]>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [pagina, setPagina] =
        useState(searchParams.has('pagina') ? parseInt(searchParams.get('pagina')!, 10) : 1);
    const [recordsPorPagina, setRecordsPorPagina] =
        useState(searchParams.has('recordsPorPagina') ? parseInt(searchParams.get('recordsPorPagina')!, 10) : 2);
    const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);

    useEffect(() => {
        clienteAPI.get<Genero[]>('/generos/todos').then(res => setGeneros(res.data));
    }, []);

    useEffect(() => {

        if (generos.length === 0) {
            return;
        }

        if (searchParams.has('titulo')) {
            valorInicial.titulo = searchParams.get('titulo')!;
            setValue('titulo', valorInicial.titulo);
        }

        if (searchParams.has('generoId')) {
            valorInicial.generoId = parseInt(searchParams.get('generoId')!, 10);
            setValue('generoId', valorInicial.generoId);
        }

        if (searchParams.has('enCines')) {
            valorInicial.enCines = Boolean(searchParams.get('enCines'));
            setValue('enCines', valorInicial.enCines);
        }

        if (searchParams.has('proximosEstrenos')) {
            valorInicial.proximosEstrenos = Boolean(searchParams.get('proximosEstrenos'));
            setValue('proximosEstrenos', valorInicial.proximosEstrenos);
        }

        buscarPeliculas(valorInicial);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [generos, pagina, recordsPorPagina])

    function modificarURL(valores: PeliculasFiltrarDTO) {
        const params = new URLSearchParams();

        if (valores.titulo) {
            params.set('titulo', valores.titulo);
        }

        if (valores.generoId) {
            params.set('generoId', String(valores.generoId));
        }

        if (valores.enCines) {
            params.set('enCines', String(valores.enCines));
        }

        if (valores.proximosEstrenos) {
            params.set('proximosEstrenos', String(valores.proximosEstrenos));
        }

        params.set('pagina', String(pagina));
        params.set('recordsPorPagina', String(recordsPorPagina));

        setSearchParams(params);

    }

    async function buscarPeliculas(valores: PeliculasFiltrarDTO) {
        modificarURL(valores);
        try {
            const respuesta = await clienteAPI.get<Pelicula[]>('/peliculas/filtrar', {
                params: { ...valores, pagina, recordsPorPagina }
            })
            const cantidadTotalRegistros = parseInt(respuesta.headers['cantidad-total-registros'], 10);
            setCantidadTotalRegistros(cantidadTotalRegistros);
            setPeliculas(respuesta.data);
        }
        catch (err) {
            console.error(err);
        }
    }

    return {buscarPeliculas, generos, pagina, recordsPorPagina, cantidadTotalRegistros,
        setPagina, setRecordsPorPagina, peliculas
    }
}