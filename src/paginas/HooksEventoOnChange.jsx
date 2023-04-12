import { useState } from "react";
import { Link } from "react-router-dom"

const HooksEventoOnChange = () => {

    const [nombre, setNombre] = useState('');

    const handleFormulario = () => {
        alert('el valor del formulario es: '+nombre);
    }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Evento onchange
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Evento onchange</h3>
      <p>
        <input type="text" value={nombre} onChange={(e) => {setNombre(e.target.value)}} className="form-control" placeholder="Nombre"></input>
      </p>
      <button className="btn btn-warning" onClick={handleFormulario}><i class="fa-solid fa-pen-to-square"></i>Enviar</button>
    </>
  );
}

export default HooksEventoOnChange
