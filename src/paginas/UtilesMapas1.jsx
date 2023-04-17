import { Link } from "react-router-dom"

const UtilesMapas1 = () => {
  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mapa
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Mapa clásico</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.063489434997!2d-70.74292758424747!3d-34.17029439220206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663433ff904ab3d%3A0xfb9f45f8f926684e!2sPlaza%20de%20Los%20H%C3%A9roes%2C%20Rancagua%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1681752803700!5m2!1ses!2scl" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </>
  )
}

export default UtilesMapas1
