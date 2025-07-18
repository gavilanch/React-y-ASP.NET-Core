import { NavLink } from "react-router";

export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/generos" className="nav-link">Géneros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/actores" className="nav-link">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cines" className="nav-link">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/peliculas/crear" className="nav-link">Crear Película</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}