import { useState, useEffect, useCallback } from "react";
import clienteAPI from "../api/clienteAxios";

export function useEntidades<T>(url: string) {
    const [entidades, setEntidades] = useState<T[]>();
    const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [recordsPorPagina, setRecordsPorPagina] = useState(5);
    const [cargando, setCargando] = useState(true);

    const cargarRegistros = useCallback(() => {
        setCargando(true);
        clienteAPI.get<T[]>(url, {
            params: { pagina, recordsPorPagina }
        }).then(res => {
            const cantidadTotalRegistros = parseInt(res.headers['cantidad-total-registros']);
            setCantidadTotalRegistros(cantidadTotalRegistros);
            setEntidades(res.data);
            setCargando(false);

        });
    }, [pagina, recordsPorPagina, url]);

    useEffect(() => {
        cargarRegistros();
    }, [cargarRegistros]);

    return { cargando, pagina, recordsPorPagina, cantidadTotalRegistros, setPagina, setRecordsPorPagina, 
        entidades, cargarRegistros };
}