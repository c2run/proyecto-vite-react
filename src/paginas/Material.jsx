import { Link } from "react-router-dom";


const Material = () => {

  return (
    <>
    
         <h1>Material</h1>
         <ul>
            <li>
                <Link to="/material/botones">Botones-Iconos-Stack</Link>
            </li>
         </ul>
         <ul>
            <li>
                <Link to="/material/list">List</Link>
            </li>
         </ul>
         <ul>
            <li>
                <Link to="/material/drawer">Drawer</Link>
            </li>
            <li>
                <Link to="/material/tablas">Tabla o Datagrid</Link>
            </li>
         </ul>
       
    
    </>
  )
}

export default Material
