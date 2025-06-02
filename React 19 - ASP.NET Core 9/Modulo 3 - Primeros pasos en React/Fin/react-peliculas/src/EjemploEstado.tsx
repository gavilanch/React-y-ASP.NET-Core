import { useState } from "react";
import Cabecera from "./Cabecera";
import MostrarTexto from "./MostrarTexto";

export default function EjemploEstado() {

  console.log('renderizando el componente App');

  const [texto, setTexto] = useState('');

  let texto2 = '';
  console.log(texto2);

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value)
  };

  return (
    <>
      <Cabecera />

      <button onClick={manejarClick}>Clickeame</button>
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)} />
      </div>

      <MostrarTexto texto={texto} />

    </>
  );
}