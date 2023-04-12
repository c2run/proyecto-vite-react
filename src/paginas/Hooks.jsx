import React from 'react'
import {Link} from 'react-router-dom';
const Hooks = () => {
  return (
    <>
        <h1>Hooks</h1>
        <ul>
            <li>
                <Link to="/hooks/evento/click">Evento click</Link>
            </li>
            <li>
                <Link to="/hooks/usestate">useState</Link>
            </li>
            <li>
                <Link to="/hooks/onchange">onChange</Link>
            </li>
            <li>
                <Link to="/hooks/eventosvarios">Eventos Varios</Link>
            </li>
            <li>
                <Link to="/hooks/use-effect">use Effect</Link>
            </li>
            <li>
                <Link to="/hooks/custom-hook">Custom Hook</Link>
            </li>
            <li>
                <Link to="/hooks/useloaderdata">useLoaderData</Link>
            </li>
            <li>
                <Link to="/hooks/usenavigate">useNavigate</Link>
            </li>
        </ul>
    </>
  )
}

export default Hooks
