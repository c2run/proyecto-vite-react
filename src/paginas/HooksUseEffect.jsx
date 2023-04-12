import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const HooksUseEffect = () => {

    //use Effect sirve para traer información desde una API cargarla y visualizarla

    //useEffect se puede ejecutar de manera global a nivel de página. 
    //Así como también se puede ejecutar cuando se altere solamente el estado de algún componente

    //en este caso se ejecutará cuando se modifique el arreglo

    let [arreglo, setArreglo] = useState([]);
    let [marcador, setMarcador] = useState(0);
    console.log(arreglo);
    useEffect(() => {
            return () =>
            {
                setArreglo([
                        {
                            id: 1,
                            nombre: "José Cerda",
                            correo: "jcerd021.cl"
                        },
                        {
                            id: 2,
                            nombre: "Karen Escobar",
                            correo: "karenescobar.cl"
                        }
                ]);
            }
    },[marcador]);

    const mostrarArreglo=(valor)=>
    {
        setMarcador(valor);
    }
  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            useEffect
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hooks useEffect</h3>
      <button className="btn btn-success" onClick={() => {mostrarArreglo(1)}}>Mostrar arreglo</button>
      <hr />
      <button className="btn btn-danger" onClick={() => {mostrarArreglo(0)}}>Esconder arreglo</button>
      {marcador===1 && (
        <>
        <hr />
            <ul>
                {arreglo.map((item) => 
                (
                    <li key={item.id}>
                        Nombre: {item.nombre}
                        <br />
                        E-mail: {item.correo}
                    </li>
                ))}
            </ul>
        </>
      )}
   </>
  )
}

export default HooksUseEffect
