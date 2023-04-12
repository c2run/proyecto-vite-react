import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './paginas/Home'
import SobreNosotros from './paginas/SobreNosotros'
import Error404 from './paginas/Error404'
import Frontend from './componentes/Frontend'
import Rutas from './paginas/Rutas'
import RutasPath from './paginas/RutasPath'
import RutasQueryString from './paginas/RutasQueryString'
import ErrorPersonalizado from './paginas/ErrorPersonalizado'
import Hooks from './paginas/Hooks';
import HooksEventoClick from './paginas/HooksEventoClick';
import HooksUseState from './paginas/HooksUseState';
import HooksEventoOnChange from './paginas/HooksEventoOnChange';
import HooksEventosVarios from './paginas/HooksEventosVarios';
import HooksUseEffect from './paginas/HooksUseEffect';
import HooksCustom from './paginas/HooksCustom';

const router = createBrowserRouter
(
  [
    {
      path:'/',
      element: <Frontend />,
      children:
      [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'sobre-nosotros',
          element: <SobreNosotros />
        },
        {
          path: '/rutas',
          element: <Rutas />
        },
        {
          path: '/rutas/path/:id/:slug',
          element: <RutasPath />
        },
        {
          path: '/rutas/query-string',
          element: <RutasQueryString />,
          errorElement: <ErrorPersonalizado />
        },
        {
          path: '*',
          element: <Error404 />
        },
        {
          path: '/hooks',
          element: <Hooks />
        },
        {
          path: '/hooks/evento/click',
          element: <HooksEventoClick />
        },
        {
          path: '/hooks/usestate',
          element: <HooksUseState />
        },
        {
          path: '/hooks/onchange',
          element: <HooksEventoOnChange />
        },
        {
          path: '/hooks/eventosvarios',
          element: <HooksEventosVarios />
        },
        {
          path: '/hooks/use-effect',
          element: <HooksUseEffect />
        },
        {
          path: '/hooks/custom-hook',
          element: <HooksCustom />
        }

      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
