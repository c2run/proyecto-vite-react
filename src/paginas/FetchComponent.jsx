import { Link } from "react-router-dom"

const FetchComponents = () => {
    
  return (
   <>
    <h1>Fetch</h1>
    <ul>
        <li>
            <Link to="/fetch/categorias">Categorías</Link>
        </li>
        <li>
            <Link to="/fetch/fetchapiweather">Clima</Link>
        </li>
    </ul>
   </>
  )
}

export default FetchComponents
