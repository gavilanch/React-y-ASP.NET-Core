import { useContext } from "react"
import ValorContext from "./ValorContext"

export default function Hijo(){

    const valor = useContext(ValorContext);

    return <h3>Este es el componente hijo. El valor es {valor}</h3>
}