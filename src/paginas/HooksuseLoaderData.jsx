import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { paises } from '../datos/datos'


export function loader()
{
    const countries = paises;
    return countries;
}

const HooksuseLoaderData = () => {
    const countries = useLoaderData(); 
    console.log(countries);

  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            useLoader DATA
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hook use loader data</h3>
      <table className='table table-bordered'>
            <thead>
            <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dominio</th>
            </tr>
            </thead>
            <tbody>
                {countries.map((pais)=>
                (
                    <tr key={pais.id}>
                        <td>{pais.id}</td>
                        <td>{pais.nombre}</td>
                        <td>{pais.dominio}</td>
                        </tr>
                ))}
            </tbody>
        </table>

    </>
  )
}

export default HooksuseLoaderData
