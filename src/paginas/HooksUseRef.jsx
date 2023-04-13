import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const HooksUseRef = () => {
    
    const [texto, setTexto] = useState('');
    const inputRef = useRef();
    const colorRef = useRef('background-color:red');
    
    const imprimirValor = () => {
        setTexto(inputRef.current.value);

    }

    const cambiarColor = () => {
        colorRef.current.className=('btn btn-warning');
    }
    return (
    <>
         <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hooks use Ref
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hook useRef</h3>
      <input type='text' ref={inputRef} className='form-control' />
      <hr />
      <button className='btn btn-primary' onClick={imprimirValor}>Mostrar</button>
      <hr />
      <div ref={colorRef}>
        {texto}
      </div>
      <button className='btn btn-primary' ref={colorRef} onClick={cambiarColor}>Cambiar color del botón</button>
    </>
  )
}

export default HooksUseRef
