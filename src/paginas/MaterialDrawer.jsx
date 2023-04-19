import { Link, useHref } from "react-router-dom"
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, ListItemButton } from "@mui/material"
import { useState } from "react"
import InboxIcon from '@mui/icons-material/Inbox';

const MaterialDrawer = () => {
   //usestate para cambiar el estado del booleano
  const [estaDrawAbierto, setEstaDrawAbierto] = useState(false);

  return (
    <>
    <IconButton size="large" edge='start' color='inherit' aria-label='logo' onClick={() => setEstaDrawAbierto(true)}>
      <InboxIcon />
    </IconButton>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Drawer
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Drawer</h3>
      <Drawer anchor='left' open={estaDrawAbierto} onClose={() => setEstaDrawAbierto(false)}>
      <Box p={2} width='250px' textAlign='center' role='presentation'>
      <Typography variant="h6" component='div'>
        Panel Lateral
      </Typography>
      </Box>
      <List>
        <ListItem>
          <ListItemButton onClick={() => console.log('Hola Mundo')}>
          <ListItemText primary='Home'></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
        <ListItemText primary='nosotros'></ListItemText>
        </ListItem>
      </List>
      </Drawer>
       
    </>
  )
}

export default MaterialDrawer
