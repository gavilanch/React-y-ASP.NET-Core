import { useNavigate } from "react-router";
import Boton from "../../../componentes/Boton";

export default function IndiceActores() {
    const navigate = useNavigate();
    
    return (
        <>
            <h3>Actores</h3>
            <Boton onClick={() => navigate('/actores/crear')}>Crear Actor</Boton>
        </>
    )
}