import { Link } from "react-router-dom"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AndroidIcon from '@mui/icons-material/Android';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GamesIcon from '@mui/icons-material/Games';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const MaterialTab = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            TABS
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Tabs</h3>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        
          <Tab label="JAVA Android" {...a11yProps(0)} icon={<AndroidIcon />} />
          <Tab label="Codeigniter PHP" {...a11yProps(1)} icon={<CodeIcon />} />
          <Tab label="Phaser 3 JavaScript" {...a11yProps(2)} icon={<JavascriptIcon />} />
          <Tab label="Unreal Engine" {...a11yProps(3)} icon={<GamesIcon />}  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <img src="../../public/images/android.jpg" width='250'/>
        <hr />
        <Typography>
        Es un lenguaje orientado a objetos, potente, versátil y mutiplataforma (corre en cualquier sistema operativo moderno). Además puedes obtener Java y gran cantidad de herramientas para trabajar con él de forma gratuita, siendo la mayor parte de su código libre y abierto.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src="../../public/images/codeigniter.jpg" width='250'/>
        <hr />
        <Typography>
        El lenguaje PHP, es un lenguaje de programación que permite el desarrollo web o aplicaciones web dinámicas, el cual es apto para incrustar el lenguaje HTML, ahora bien, siempre siguiendo algunas reglas establecidas. Además, el lenguaje PHP favorece a la conexión entre el servidor y a la interfaz del usuario.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img src="../../public/images/phaser3.png" width='250'/>
        <hr />
        <Typography>
        Phaser 3 es una herramienta de programación, más concretamente, una librería Javascript, creada por Richard Davey, destinada a desarrollar juegos de una forma rápida para navegadores web, válida tanto para versiones de escritorio como móvil, y pueden ser compilados para usarlos y publicarlos como aplicación móvil.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <img src="../../public/images/blueprint.jpg" width='250'/>
        <hr />
        <Typography>
        C++ es un lenguaje de programación y Blueprints es un sistema de secuencias de comandos. C++ es naturalmente más adecuado para implementar sistemas de juego de bajo nivel, y Blueprints es naturalmente más adecuado para definir comportamientos e interacciones de alto nivel, y para integrar activos y ajustar detalles estéticos.
        </Typography>
      </TabPanel>
    </Box>
   </>
  )
}

export default MaterialTab
