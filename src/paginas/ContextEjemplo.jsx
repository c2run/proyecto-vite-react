import { Link } from "react-router-dom"
import { useContext } from "react"
import EjemploContext from "../context/EjemploProvider"

const ContextEjemplo = () => {

  const {variableContexto, saludar, stateContext, setStateContext} = useContext(EjemploContext);

  const cambiarValorState = () => {
      setStateContext("otro contenido ");
  }

  return (
   <>
    <h1>Ejemplo de Context</h1>
    <p>Valor: {variableContexto}</p>
    <p> función: {saludar('Karen')}</p>
    <p> state Context: {stateContext} </p>
    <button className="btn btn-primary" onClick={cambiarValorState}>Cambiar valor del state</button>
   </>
  )
}

export default ContextEjemplo
