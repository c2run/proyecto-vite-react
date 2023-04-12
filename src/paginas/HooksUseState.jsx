import { Link } from "react-router-dom"
import { useState } from "react"

const HooksUseState = () => {
    
    //forma de declarar un state inicializado en cero en este caso
    const [contador,setContador] = useState(0);

    //state de estado online
    const [conectado, setConectado] = useState("conectado");

    const handleIncrementar = () => {
        setContador(contador+1);
    }
    const handleDecremento = () => {
        if(contador != 0){
            setContador(contador-1);
        }
    }
   


  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            useState
          </li>
        </ol>
      </nav>
      <hr />
      <h3>use State</h3>

      <button className="btn btn-info" onClick={handleIncrementar}><i class="fa-solid fa-plus"></i>Incrementar</button>
      <hr />
      <button className="btn btn-info" onClick={handleDecremento}><i class="fa-solid fa-plus"></i>Decremento</button>
      <hr />
      <p>Contador: {contador}</p>
      <hr />

    </>
  )
}

export default HooksUseState
