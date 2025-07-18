import FormularioAutenticacion from "./FormularioAutenticacion";

export default function Login(){
    return (
        <>
            <h3>Login</h3>
            <FormularioAutenticacion url='/usuarios/login' />
        </>
    )
}