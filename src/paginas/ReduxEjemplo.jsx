import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {} from './../redux/features/procedenciaSlice'
import { cambiarMexico,cambiarPeru,cambiarVenezuela, volverChile } from "./../redux/features/procedenciaSlice"
import calculadoraSlice, {sumar, restar,multiplicar,dividir, resetear} from './../redux/features/calculadoraSlice'
import { iniciarSesion } from "../redux/features/parametrosSlice"

const ReduxEjemplo = () => {
    // const pais = useSelector((state) => state.procedencia.pais);

    const procedencia = useSelector((state) => state.procedencia);
    
    const calculadora = useSelector((state) => state.calculadora);

    const parametros = useSelector((state, datos) => state.parametros )


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
        <hr />
        <h1>Ejemplo 2 de redux</h1>
        <ul>
          <li>Numero1: { calculadora.numero1 }</li>
          <li>Numero2: {calculadora.numero2}</li>
          <li>resultado: {calculadora.resultado}</li>
        </ul>
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(sumar())}>sumar</button>
        <hr />
        <button className="btn btn-primary" onClick={()=> dispatch(restar())}>restar</button>
        <hr />
        <button className="btn btn-danger" onClick={()=> dispatch(multiplicar())}>Multiplicar</button>
        <hr />
        <button className="btn btn-primary" onClick={()=> dispatch(dividir())}>dividir</button>
        <hr />
        <button className="btn btn-primary" onClick={()=> dispatch(resetear())}>resetear</button>
        <h1>Ejemplo Redux 3 iniciar sesión</h1>
          <li>Nombre: {parametros.nombre}</li>
          <li>Perfil ID: {parametros.perfil_id}</li>
          <li>Perfil: {parametros.perfil}</li>
          <hr />
          <button className="btn btn-primary" onClick={()=> {dispatch(iniciarSesion({nombre: "José Cerda", perfil_id:1,perfil:"Administrador"}))}}>Iniciar Sesión</button>
    </>
  )
}

export default ReduxEjemplo
