import FormularioAutenticacion from "./FormularioAutenticacion";

export default function Registro(){
    return (
        <>
            <h3>Registro</h3>
            <FormularioAutenticacion url='/usuarios/registro' />
        </>
    )
}