import React from 'react'
import { Link, Form } from 'react-router-dom'
import Swal from 'sweetalert2'


export async function action({request}){
    //se reciben los datos del formulario
    //siempre los action deben retornar algo. sino la app se rompe.
    const formData = await request.formData();
    
    //otra forma de recuperar los datos del formulario es con object
    const datos = Object.fromEntries(formData); 

    return Swal.fire({
        icon: 'success',
        title: 'OK',
        text: `El nombre es ${formData.get('nombre')} | Nombre: ${datos.nombre} `
    });
}

const FormularioUseActionData = () => {
  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario use Action Data
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario use Action Data</h3>

      <Form method='post'>
        <div className='form-group'>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' className='form-control' name='nombre' />
        <hr />

       
        </div>
        <button className='btn btn-warning'>Enviar</button>
      </Form>
   </>
  )
}

export default FormularioUseActionData
