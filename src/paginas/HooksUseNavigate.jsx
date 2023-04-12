import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HooksUseNavigate = () => {
    const navigate = useNavigate();
    console.log(navigate);
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hooks use Navigate
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hook use Navigate</h3>
      
      <button className='btn btn-success' onClick={() =>{navigate("/sobre-nosotros")}}>Ir a sobre nosotros</button>
      <hr />
      <button className='btn btn-success' onClick={() =>{navigate(-1)}}>Ir atrás</button>
    </>
  )
}

export default HooksUseNavigate
