import React from 'react'
import { Link, useLocation } from 'react-router-dom'



const HooksUseLocation = () => {


    const location = useLocation();
    console.log(location);

  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hooks use Location
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hook use Location</h3>
      {location.pathname}
    </>
  )
}

export default HooksUseLocation
