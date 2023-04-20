import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const AlmacenamientoLocalStorage = () => {

    const [existe, setExiste] = useState( (localStorage.getItem('tokenLocal') != null) ? 1:0);
    const manejarCrear = () => {
        localStorage.setItem('tokenLocal', '123456');
        Swal.fire({
           icon: 'success',
           title: 'Ok',
           text: `Se creó el registro exitosamente!` 
        });
        setExiste(1);
    }
    const manejarBorrar = () => {
        localStorage.removeItem('tokenLocal');
        Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: `Se eliminó el registro exitosamente!` 
         });
         setExiste(0);
    }

  return (
    <>
         <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/almacenamiento-local">Almacenamiento Local</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Local Storage
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Local Storage</h3>
      <button className='btn btn-warning' onClick={manejarCrear}>Crear localstorage</button>
      {existe==1 && (
        <>
        <p>El valor del local storage es: {localStorage.getItem('tokenLocal')}</p>
        <button className="btn btn-danger" onClick={manejarBorrar}>Borrar</button>

        </>
      )}
    </>
  )
}

export default AlmacenamientoLocalStorage
