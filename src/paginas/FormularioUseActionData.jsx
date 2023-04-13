import React from 'react'
import { Link, Form } from 'react-router-dom'
import Swal from 'sweetalert2'
import { atributos, categorias_productos } from '../datos/datos';
import { useState } from 'react';

export async function action({request}){
    //se reciben los datos del formulario
    //siempre los action deben retornar algo. sino la app se rompe.
    const formData = await request.formData();
    
    //otra forma de recuperar los datos del formulario es con object
    const datos = Object.fromEntries(formData); 

    return Swal.fire({
        icon: 'success',
        title: 'OK',
        text: `El nombre es ${formData.get('nombre')} | Nombre: ${datos.nombre}  CAT: ${datos.categoria}  | Precio: ${formData.get('precio')}
        | Destacado: ${datos.destacado} | Descripción: ${formData.get('descripcion')} | ${datos.peligroso} `
    });
}

const FormularioUseActionData = () => {

    //componente para checkbox
    const[peligroso, setPeligroso] = useState(false);
    //función para setear el estado de la constante peligroso

    const manejarPeligroso = () => {
        setPeligroso(!peligroso);
    }

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
        <label htmlFor='categoria' id='categoria'>Categoría</label>
        <select name='categoria' id='categoria' className='form-control'>
        <option value='0'>Seleccione...</option>
        {categorias_productos.map((categoria) => 
        (
            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
        ))}
        </select>

       
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' className='form-control' name='nombre' placeholder='Nombre' />
        </div>
        
        <div className='form-group'>
        <label htmlFor='nombre'>Precio</label>
        <input type='number' min='0' id='precio' className='form-control' name='precio' placeholder='precio' />
        </div>

        <div className='form-control'>
            <label htmlFor='destacado'><strong>Destacado</strong></label>
            <div className='form-check'>
               <input type='radio' name='destacado' value="si" id='destacado1' className='form-check-input' />
               <label htmlFor='destacado1'>Si</label>
            </div>

            <div className='form-check'>
               <input type='radio' name='destacado' value="no" id='destacado2' className='form-check-input' />
               <label htmlFor='destacado2'>No</label>
            </div>
        </div>

        <div className='form-group'>
        <label htmlFor='nombre'>Descripción</label>
        <textarea className='form-control' name='descripcion' id='descripcion' placeholder='Descripción'></textarea>
        </div>
            <hr />

            <div className='form-group'>
            <label htmlFor="peligroso">Peligroso</label>
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' id='peligroso' name='peligroso' value={peligroso} onChange={manejarPeligroso} />
            </div>
            </div>
            <hr />
        <button className='btn btn-warning'>Enviar</button>
      </Form>
   </>
  )
}

export default FormularioUseActionData
