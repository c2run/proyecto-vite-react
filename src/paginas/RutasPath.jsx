import React from 'react'
import { useParams } from 'react-router-dom'

const RutasPath = () => {
    //desestructuración
    const {id, slug} = useParams();

  return (
    <>
        <h2>Ejemplo parámetros path</h2>
        <ul>
            <li>ID: {id}</li>
            <li>Slug: {slug}</li>
        </ul>
    </>
  )
}

export default RutasPath
