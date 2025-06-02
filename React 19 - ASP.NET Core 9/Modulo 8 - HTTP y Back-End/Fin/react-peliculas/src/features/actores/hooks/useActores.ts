import { useState, useEffect, useCallback } from "react";
import clienteAPI from "../../../api/clienteAxios";
import type Actor from "../modelos/Actor.model";

export function useActores() {
    const [actores, setActores] = useState<Actor[]>();
    const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [recordsPorPagina, setRecordsPorPagina] = useState(5);
    const [cargando, setCargando] = useState(true);

    const cargarRegistros = useCallback(() => {
        setCargando(true);
        clienteAPI.get<Actor[]>(`/actores`, {
            params: { pagina, recordsPorPagina }
        }).then(res => {
            const cantidadTotalRegistros = parseInt(res.headers['cantidad-total-registros']);
            setCantidadTotalRegistros(cantidadTotalRegistros);
            setActores(res.data);
            setCargando(false);

        });
    }, [pagina, recordsPorPagina]);

    useEffect(() => {
        cargarRegistros();
    }, [cargarRegistros]);

    return { cargando, pagina, recordsPorPagina, cantidadTotalRegistros, setPagina, setRecordsPorPagina,  actores, cargarRegistros };
}