import { Link } from "react-router-dom"

const AlmacenamientoLocal = () => {
  return (
    <>
        <h1>AlmacenamientoLocal</h1>
            <ul>
                <li>
                    <Link to="/almacenamiento-local-localstorage">Local Storage</Link>
                </li>
                <li>
                    <Link to="/almacenamiento-local-sesionstorage">Sesion Storage</Link>
                </li>
            </ul>
    </>
  )
}

export default AlmacenamientoLocal
