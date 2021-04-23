import React, { useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import FormularioTexto from './FormularioTexto'
import EjemploUseEffect from './EjemploUseEffect'
import ValorContext from './ValorContext'
import Abuelo from './Abuelo'
import ContenidoDinamico from './ContenidoDinamico';
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [texto, setTexto] = useState('Valor por defecto');
  const [checked, setChecked] = useState(true);
  // const imagenURL = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";

  // const manejarClick = () => console.log('click');

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  // const parteIntermedia = <EjemploReloj />

  // const estilo = {
  //   backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
  // }

  // const parteInferior = <div style={estilo}></div>

  const calificaciones = [
    {nombre: 'Felipe', calificacion: 75},
    {nombre: 'Claudia', calificacion: -1},
    {nombre: 'Roberto', calificacion: 95}
  ]

  return (
    <>
      <h1 className="rojo">Hola mundo!</h1>

      {calificaciones.map(cal => 
      <ErrorBoundary key={cal.nombre}>
        <ContenidoDinamico   {...cal} />
      </ErrorBoundary>
      )}

      {/* <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked} /> Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null}  */}


      <br></br>

      <button
        onMouseEnter={() => console.log('entrando')}
        onClick={() => console.log('click desde el botón')}>Clickeame</button>
      <br></br>
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />

      <MostrarTexto texto={texto} />

      <br></br>

      <div>
        <input type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked} /> Este es un checkbox
      </div>
    </>

  );
}

export default App;
