import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {} from './../redux/features/procedenciaSlice'
import { cambiarMexico,cambiarPeru,cambiarVenezuela, volverChile } from "./../redux/features/procedenciaSlice"
const ReduxEjemplo = () => {
    // const pais = useSelector((state) => state.procedencia.pais);

    const procedencia = useSelector((state) => state.procedencia);
    const dispatch = useDispatch();

  return (
    <>
        <h1> Ejemplo de Redux</h1>

        <li>País: {procedencia.pais}</li>
        <li>Ciudad: {procedencia.ciudad}</li>
        
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(cambiarMexico())}>Cambiar a México</button>
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(volverChile())}>Volver a Chile</button>
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(cambiarPeru())}>Cambiar a Peru</button>
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(cambiarVenezuela())}>Cambiar a Venezuela</button>
    </>
  )
}

export default ReduxEjemplo
