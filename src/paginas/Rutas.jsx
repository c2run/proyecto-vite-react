import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Rutas = () => {
    let id=12;
    let slug="Hola Mundo!"
  return (
    <>
        <h1>Rutas</h1>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
            </li>
            <li>
                <Link to={`/rutas/path/${id}/${slug}`}>Parametros path dinámicos</Link>
            </li>
        </ul>
    </>
  )
}

export default Rutas
