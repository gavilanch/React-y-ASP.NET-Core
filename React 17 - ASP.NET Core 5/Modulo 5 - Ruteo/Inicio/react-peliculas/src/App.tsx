import React, { useEffect, useState } from 'react';
import './App.css';
import { landingPageDTO } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas'
import Button from './utils/Button';

function App() {

  const [peliculas, setPeliculas] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1, titulo: 'Spider-Man: Far from Home',
            poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            id: 2, titulo: 'Moana',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
          }
        ],
        proximosEstrenos: [
          {
            id: 3, titulo: 'Soul',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
          }
        ]
      })
    }, 500);

    return () => clearTimeout(timerId);
  })

  return (
    <>
      <div className="container">

         <Button>Mi componente botón</Button>

        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>

    </>

  );
}

export default App;
