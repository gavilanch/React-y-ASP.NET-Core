import { NavLink, useNavigate } from "react-router";
import Boton from "../../../componentes/Boton";
import type Pelicula from "../modelos/pelicula.model";
import styles from './PeliculaIndividual.module.css'
import confirmar from "../../../utilidades/confirmar";
import clienteAPI from "../../../api/clienteAxios";
import { useContext } from "react";
import AlertaContext from "../../../utilidades/AlertaContext";

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

    const construirLink = () => `/peliculas/${props.pelicula.id}`;
    const navigate = useNavigate();
    const alerta = useContext(AlertaContext);

    const borrar = async (id: number) => {
        try {
            await clienteAPI.delete(`/peliculas/${id}`);
            alerta();
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.div}>
            <NavLink to={construirLink()}>
                <img alt="Poster" src={props.pelicula.poster} />
            </NavLink>
            <p>
                <NavLink to={construirLink()}>{props.pelicula.titulo}</NavLink>
            </p>
            <div>
                <Boton onClick={() => navigate(`peliculas/editar/${props.pelicula.id}`)}>Editar</Boton>
                <Boton className="btn btn-danger ms-4"
                    onClick={() => confirmar(() => borrar(props.pelicula.id))}
                >Borrar</Boton>
            </div>
        </div>
    )
}

interface PeliculaIndividualProps {
    pelicula: Pelicula
}