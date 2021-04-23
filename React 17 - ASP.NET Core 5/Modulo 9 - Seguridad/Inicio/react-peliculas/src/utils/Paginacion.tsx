import { useEffect, useState } from "react";

export default function Paginacion(props: paginacionProps) {
    const [listadoLinks, setListadoLinks] = useState<modeloLink[]>([]);
    useEffect(() => {
        const paginaAnteriorHabilitada = props.paginaActual !== 1;
        const paginaAnterior = props.paginaActual - 1;
        const links: modeloLink[] = [];

        links.push({
            texto: 'Anterior',
            habilitado: paginaAnteriorHabilitada,
            pagina: paginaAnterior,
            activo: false
        });

        for (let i = 1; i <= props.cantidadTotalDePaginas; i++) {
            if (i >= props.paginaActual - props.radio && i <= props.paginaActual + props.radio) {
                links.push({
                    texto: `${i}`,
                    activo: props.paginaActual === i,
                    habilitado: true, pagina: i
                })
            }
        }

        const paginaSiguienteHabilitada = props.paginaActual !== props.cantidadTotalDePaginas && props.cantidadTotalDePaginas > 0;
        const paginaSiguiente = props.paginaActual + 1;
        links.push({
            texto: 'Siguiente',
            pagina: paginaSiguiente,
            habilitado: paginaSiguienteHabilitada,
            activo: false
        });

        setListadoLinks(links);
    }, [props.paginaActual, props.cantidadTotalDePaginas, props.radio])

    function obtenerClase(link: modeloLink){
        if (link.activo){
            return "active pointer"
        }

        if (!link.habilitado){
            return "disabled";
        }

        return "pointer"
    }

    function seleccionarPagina(link: modeloLink){
        if (link.pagina === props.paginaActual){
            return;
        }

        if (!link.habilitado){
            return;
        }

        props.onChange(link.pagina);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {listadoLinks.map(link => <li key={link.texto}
                 onClick={() => seleccionarPagina(link)}
                 className={`page-item cursor ${obtenerClase(link)}`}
                >
                    <span className="page-link">{link.texto}</span>
                </li>)}
            </ul>
        </nav>
    )
}

interface modeloLink {
    pagina: number;
    habilitado: boolean;
    texto: string;
    activo: boolean;
}

interface paginacionProps {
    paginaActual: number;
    cantidadTotalDePaginas: number;
    radio: number;
    onChange(pagina: number): void;
}

Paginacion.defaultProps = {
    radio: 3
}