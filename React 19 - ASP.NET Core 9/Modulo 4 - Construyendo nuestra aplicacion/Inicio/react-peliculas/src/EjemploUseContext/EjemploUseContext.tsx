import Abuelo from "./Abuelo";
import ValorContext from "./ValorContext";

export default function EjemploUseContext(){
    const texto = 'El texto que deseo pasar';
    return (
    <ValorContext.Provider value={texto}>
        <Abuelo />
    </ValorContext.Provider>
    )
}