import type React from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico<T>(props: ListadoGenericoProps<T>){

    if (!props.listado){
        return props.cargandoUI ? props.cargandoUI : <Cargando />;
    }

    else if (props.listado.length === 0){
        return props.listadoVacioUI ? props.listadoVacioUI : 'No hay elementos para mostrar';
    } else {
        return props.children;
    }

}

interface ListadoGenericoProps<T>{
    listado: T[] | undefined;
    children: React.ReactNode;
    listadoVacioUI?: React.ReactNode;
    cargandoUI?: React.ReactNode;
}