import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearGenero from "./generos/CrearGenero"
import EditarGenero from "./generos/EditarGenero"

import CrearActores from './actores/CrearActores';
import EditarActores from './actores/EditarActores';
import IndiceActores from './actores/IndiceActores';

import CrearCines from './cines/CrearCines';
import EditarCines from './cines/EditarCines';
import IndiceCines from './cines/IndiceCines';

import CrearPeliculas from './peliculas/CrearPeliculas'
import EditarPeliculas from './peliculas/EditarPeliculas'
import FiltroPeliculas from './peliculas/FiltroPeliculas'

import RedireccionarALanding from './utils/RedireccionarALanding'

const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},
    {path: '/actores', componente: IndiceActores, exact: true},

    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCines},
    {path: '/cines', componente: IndiceCines, exact: true},

    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},    

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;