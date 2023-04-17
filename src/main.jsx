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
import HooksuseLoaderData, {loader as paisesLoader} from './paginas/HooksuseLoaderData';
import { paises } from './datos/datos';
import HooksUseNavigate from './paginas/HooksUseNavigate';
import HooksUseLocation from './paginas/HooksUseLocation';
import HooksUseRef from './paginas/HooksUseRef';
import Basicos from './paginas/Basicos';
import Formularios from './paginas/Formularios';
import FormularioSimple from './paginas/FormularioSimple';
import FormularioUseActionData , {action as procesarFormularioActionDate} from './paginas/FormularioUseActionData';
import FormulariosFormik from './paginas/FormulariosFormik';
import FormulariosReactHookForm from './paginas/FormulariosReactHookForm';
import FormulariosReactFinalForm from './paginas/FormulariosReactFinalForm';
import Utiles from './paginas/Utiles';
import UtilesDayjs from './paginas/UtilesDayjs';
import UtilesMoment from './paginas/UtilesMoment';
import UtilesSpinner from './paginas/UtilesSpinner';
import UtilesSwipeable from './paginas/UtilesSwipeable';
import UtilesWebcam from './paginas/UtilesWebcam';
import UtilesGraficos from './paginas/UtilesGraficos';
import UtilesMapas1 from './paginas/UtilesMapas1';
import UtilesMapas2 from './paginas/UtilesMapas2';
import UtilesModal from './paginas/UtilesModal';
import UtilesCarrusel from './paginas/UtilesCarrusel';
import Material from './paginas/Material';
import MaterialBotones from './paginas/MaterialBotones';

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
          path: 'basicos',
          element: <Basicos />
        },
        {
          path: 'formularios',
          element: <Formularios />
        },
        {
          path: '/formulario-simple',
          element: <FormularioSimple />
        },
        {
          path: '/formulario/hookform',
          element: <FormulariosReactHookForm />
        },
        {
          path: '/formulario/useactiondata',
          element: <FormularioUseActionData />,
          action: procesarFormularioActionDate
        },
        {
          path: '/formulario/formik',
          element: <FormulariosFormik />
        },
        {
          path: '/formulario/reactfinalform',
          element: <FormulariosReactFinalForm />
        },
        {
          path: '/material',
          element: <Material />
        },
        {
          path: '/material/botones',
          element: <MaterialBotones />
        },
        {
          path: '/utiles',
          element: <Utiles />
        },
        {
          path: 'utiles/daysjs',
          element: <UtilesDayjs />
        },
        {
          path: 'utiles/moment',
          element: <UtilesMoment />
        },
        {
          path: 'utiles/spinner',
          element: <UtilesSpinner />
        },
        {
          path: 'utiles/swipeable',
          element: <UtilesSwipeable />
        },
        {
          path: 'utiles/webcam',
          element: <UtilesWebcam />
        },
        {
          path: 'utiles/graficos',
          element: <UtilesGraficos />
        },
        {
          path: 'utiles/mapas1',
          element: <UtilesMapas1 />
        },
        {
          path: 'utiles/mapas2',
          element: <UtilesMapas2 />
        },
        {
          path: 'utiles/modal',
          element: <UtilesModal />
        },
        {
          path: 'utiles/carrusel',
          element: <UtilesCarrusel />
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
        },
        {
          path: '/hooks/useloaderdata',
          element: <HooksuseLoaderData />,
          loader: paisesLoader
        },
        {
          path: '/hooks/useNavigate',
          element: <HooksUseNavigate />
        },
        {
          path: '/hooks/useLocation',
          element: <HooksUseLocation />
        },
        {
          path: '/hooks/useRef',
          element: <HooksUseRef />
        },
        
        

      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
