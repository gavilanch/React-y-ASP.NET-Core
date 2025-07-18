import { useState, useEffect } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type LandingPageDTO from "../modelos/LandingPageDTO";
import clienteAPI from "../../../api/clienteAxios";
import AlertaContext from "../../../utilidades/AlertaContext";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<LandingPageDTO>({});

  useEffect(() => {
    cargarDatos();
  }, [])

  function cargarDatos() {
    clienteAPI.get<LandingPageDTO>('/peliculas/landing').then(res => setPeliculas(res.data));
  }

  return (
    <>
      <AlertaContext.Provider value={() => cargarDatos()}>
        <h3>En Cines</h3>
        <ListadoPeliculas peliculas={peliculas.enCines} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </AlertaContext.Provider>
    </>
  )
}

