import React from 'react'
import { useLocation } from 'react-router-dom'

const RutasQueryString = () => {
    const search = useLocation().search;
    let id = new URLSearchParams(search).get("id");
    //let slug = new URLSearchParams(search).get("slug");
  return (
    <>
        <h2>Ejemplo parámetros query string</h2>
        <ul>
           <li>ID: {id}</li>
           <li>Slug: {slug}</li>
        </ul>
    </>
  )
}

export default RutasQueryString
