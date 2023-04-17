import { Link } from "react-router-dom"
import { Map } from "react-map-gl"

const UtilesMapas2 = () => {
  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mapbox
            
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Mapbox</h3>
      <Map
      mapboxAccessToken="pk.eyJ1Ijoia2Vuc2hpbjY3NTkiLCJhIjoiY2xnbDU2b2Z1MDFwMzNpbXNsYnplZ2R0diJ9.VmEpQjO6ZUzL3rL1J8_Opg"
      initialViewState={{
        longitude: -70.74078208368746,
        latitude: -34.17027259063794,
        zoom: 14,
        attributionControl: false
      }}
      style={{width: 640, height:450}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
       />
     
   </>
  )
}

export default UtilesMapas2
