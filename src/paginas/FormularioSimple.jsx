import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

const FormularioSimple = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');

    const manejarSubmit = (e) => { //se le pasa la e de evento
        //esta primera línea e.preventDefault es para bloquear cualquier ejecución nativa del formulario html
        e.preventDefault(e);

        //mostrar mensaje con sweet alert 2
        Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'El nombre es: '+ nombre +' '+ apellido,
                //html: ''
        });
       // console.log("el nombre es: "+nombre);
       // console.log("El apellido es: "+apellido);
    }

  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario simple
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario simple</h3>
      <form onSubmit={manejarSubmit}>
        <div className='form-group'>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' className='form-control' value={nombre} onChange={(e)=>{setNombre(e.target.value)}} />
        <hr />
        <input type='text' id='apellido' className='form-control' value={apellido} onChange={(e)=>{setApellido(e.target.value)}} />
        <hr />
       
        </div>
        <button className='btn btn-warning'>Enviar</button>
      </form>
    </>
  )
}

export default FormularioSimple
