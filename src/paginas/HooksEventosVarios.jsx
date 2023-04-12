import { Link } from "react-router-dom"

const HooksEventosVarios = () => {

    const mover = () => {
        console.log("se movió");
    }

    const salir = () => {
        console.log("Salimos");
    }



  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Eventos varios
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Eventos varios</h3>
      <hr />
      <img src="/images/logo.png" onMouseMove={mover} onMouseOut={salir} alt=""></img>
    </>
  )
}

export default HooksEventosVarios
