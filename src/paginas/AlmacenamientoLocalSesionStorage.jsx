import { Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

const AlmacenamientoLocalSesionStorage = () => {

    const [existe, setExiste] = useState( (sessionStorage.getItem('tokenLocal') != null) ? 1:0);
    const manejarCrear = () => {
        sessionStorage.setItem('tokenLocal', '123456');
        Swal.fire({
           icon: 'success',
           title: 'Ok',
           text: `Se creó el registro exitosamente!` 
        });
        setExiste(1);
    }
    const manejarBorrar = () => {
        sessionStorage.removeItem('tokenLocal');
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
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Sesion Storage
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Sesion Storage</h3>
      <button className='btn btn-warning' onClick={manejarCrear}>Crear session storage</button>
      {existe==1 && (
        <>
        <p>El valor del sesion storage es: {sessionStorage.getItem('tokenLocal')}</p>
        <button className="btn btn-danger" onClick={manejarBorrar}>Borrar</button>

        </>
      )}
    </>
  )
}

export default AlmacenamientoLocalSesionStorage
