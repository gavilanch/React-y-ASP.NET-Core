import { BrowserRouter } from "react-router";
import Menu from "./componentes/Menu";
import AppRoutes from "./AppRoutes";
import AutenticacionContext from "./features/seguridad/utilidades/AutenticacionContext";
import { useEffect, useState } from "react";
import type Claim from "./features/seguridad/modelos/Claim";
import { obtenerClaims } from "./features/seguridad/utilidades/ManejadorJWT";

export default function App() {

  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    setClaims(obtenerClaims())
  }, [])

  function actualizar(claims: Claim[]){
    setClaims(claims);
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{claims, actualizar}}>
          <Menu />
          <div className="container mb-4">
            <AppRoutes />
          </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>
    </>
  );
}

