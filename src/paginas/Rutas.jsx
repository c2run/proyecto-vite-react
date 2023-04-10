import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Rutas = () => {
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
        </ul>
    </>
  )
}

export default Rutas
