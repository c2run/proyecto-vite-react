import { Link } from "react-router-dom"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button, ButtonBase, IconButton, Stack } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MaterialBotones = () => {
  return (
   <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Botones
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Botones</h3>
        <hr />
        <Stack spacing={2} direction="row">
            <Button variant="text">Texto</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <hr />
        <Stack spacing={2} direction="row">
            <Button>Primary</Button>
            <Button disabled>Contained</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>
        <Button variant="contained" href="#contained-buttons">Link</Button>
        <hr />
        <Stack direction="row" spacing={2}>
            <Button variant="contained" disableElevation>Disable elevation</Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="outlined" href="#outlined-buttons">Link</Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
        </Stack>
        <hr />
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>Borrar</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
            <IconButton aria-label="agregar alarma" color="secondary"><AlarmIcon /></IconButton>
            <IconButton color="primary" aria-label="agregar al carrito" ><AddShoppingCartIcon/></IconButton>
        </Stack>
   </>
  )
}

export default MaterialBotones
