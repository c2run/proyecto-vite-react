import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Formularios = () => {
  return (
    <div>
      <h1>Formularios</h1>

        <ul>
            <li>
                <Link to='/formulario-simple'>Formulario simple</Link>
            </li>
        </ul>

    </div>
  )
}

export default Formularios
