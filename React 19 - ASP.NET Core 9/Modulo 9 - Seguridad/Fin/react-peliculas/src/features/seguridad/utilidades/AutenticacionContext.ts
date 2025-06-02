import React from "react";
import type Claim from "../modelos/Claim";

const AutenticacionContext = React.createContext<AutenticacionContextParams>({claims: [], actualizar: () => {}})

interface AutenticacionContextParams {
    claims: Claim[];
    actualizar(claims: Claim[]): void;
}

export default AutenticacionContext