import { Link } from "react-router-dom"
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MaterialAccordion = () => {

    //state para modificar el estado de la expansión del accordion
    const [expanded, setExpanded] = useState(false);
    const manejarCambio = (panel) => (event, estaExpandido) => {
            setExpanded(estaExpandido ? panel : false);
    };

  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Accordion
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Accordion</h3>
      <Accordion expanded={expanded==='panel1'} onChange={manejarCambio('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-aria-controls="panel1bh-content" id="panel1bh-header">
        <Typography variant="h4" sx={{width: '33%', flexShrink: 0}}>
            PHP
        </Typography>
        <Typography sx={{color: 'text.secondary'}}>
            echo 'Hola Mundo';
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="../../public/images/codeigniter.jpg" width='250' />
            <hr />
            <Typography>
            El lenguaje PHP, es un lenguaje de programación que permite el desarrollo web o aplicaciones web dinámicas, el cual es apto para incrustar el lenguaje HTML, ahora bien, siempre siguiendo algunas reglas establecidas. Además, el lenguaje PHP favorece a la conexión entre el servidor y a la interfaz del usuario.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded==='panel2'} onChange={manejarCambio('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-aria-controls="panel2bh-content" id="panel2bh-header">
        <Typography variant="h4" sx={{width: '33%', flexShrink: 0}}>
            Android - Java
        </Typography>
        <Typography sx={{color: 'text.secondary'}}>
            System.out.println('Hola Mundo');
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="../../public/images/android.jpg" width='250' />
            <hr />
            <Typography>
            Es un lenguaje orientado a objetos, potente, versátil y mutiplataforma (corre en cualquier sistema operativo moderno). Además puedes obtener Java y gran cantidad de herramientas para trabajar con él de forma gratuita, siendo la mayor parte de su código libre y abierto.
            </Typography>
        </AccordionDetails>
        <hr />
      </Accordion>


      <Accordion expanded={expanded==='panel3'} onChange={manejarCambio('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-aria-controls="panel3bh-content" id="panel3bh-header">
        <Typography variant="h4" sx={{width: '33%', flexShrink: 0}}>
            C++ BLUEPRINTS
        </Typography>
        <Typography sx={{color: 'text.secondary'}}>
            Set Text Value 'Hola Mundo';
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="../../public/images/blueprint.jpg" width='250' />
            <hr />
            <Typography>
            C++ es un lenguaje de programación y Blueprints es un sistema de secuencias de comandos. C++ es naturalmente más adecuado para implementar sistemas de juego de bajo nivel, y Blueprints es naturalmente más adecuado para definir comportamientos e interacciones de alto nivel, y para integrar activos y ajustar detalles estéticos.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded==='panel4'} onChange={manejarCambio('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-aria-controls="panel4bh-content" id="panel4bh-header">
        <Typography variant="h4" sx={{width: '33%', flexShrink: 0}}>
            Phaser 3 - JavaScript
        </Typography>
        <Typography sx={{color: 'text.secondary'}}>
                console.log('Hello world!');
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="../../public/images/phaser3.png" width='250' />
            <hr />
            <Typography>
            Phaser 3 es una herramienta de programación, más concretamente, una librería Javascript, creada por Richard Davey, destinada a desarrollar juegos de una forma rápida para navegadores web, válida tanto para versiones de escritorio como móvil, y pueden ser compilados para usarlos y publicarlos como aplicación móvil.
            </Typography>
        </AccordionDetails>
        <hr />
      </Accordion>
   </>
  )
}

export default MaterialAccordion
