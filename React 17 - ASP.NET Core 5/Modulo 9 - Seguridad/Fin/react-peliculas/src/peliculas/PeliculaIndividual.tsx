import { peliculaDTO } from "./peliculas.model";
import css from './PeliculaIndividual.module.css'
import { Link } from "react-router-dom";
import Button from "utils/Button";
import confirmar from "utils/Confirmar";
import axios from "axios";
import { urlPeliculas } from "utils/endpoints";
import { useContext } from "react";
import AlertaContext from './../utils/AlertaContext';
import Autorizado from "auth/Autorizado";

export default function PeliculaIndividual(props: peliculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`
    const alerta = useContext(AlertaContext)

    function borrarPelicula() {
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
            .then(() => {
                alerta();
            })
    }

    return (
        <div className={css.div}>
            <Link to={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </Link>
            <p>
                <Link to={construirLink()}>{props.pelicula.titulo}</Link>
            </p>
            <Autorizado role="admin"
                autorizado={
                    <div>
                        <Link style={{ marginRight: '1rem' }} className="btn btn-info"
                            to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                        <Button
                            onClick={() => confirmar(() => borrarPelicula())}
                            className="btn btn-danger">Borrar</Button>
                    </div>
                }
            />


        </div>
    )
}

interface peliculaIndividualProps {
    pelicula: peliculaDTO;
}