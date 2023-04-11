import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './paginas/Home'
import SobreNosotros from './paginas/SobreNosotros'
import Error404 from './paginas/Error404'
import Frontend from './componentes/Frontend'
import Rutas from './paginas/Rutas'
import RutasPath from './paginas/RutasPath'
import RutasQueryString from './paginas/RutasQueryString'
import ErrorPersonalizado from './paginas/ErrorPersonalizado'


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
