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
            <li>
                <Link to='/formulario/useactiondata'>Formulario useActionData</Link>
            </li>
            <li>
                <Link to='/formulario/formik'>Formulario Formik</Link>
            </li>
            <li>
                <Link to='/formulario/hookform'>React Hook Form</Link>
            </li>
        </ul>

    </div>
  )
}

export default Formularios
