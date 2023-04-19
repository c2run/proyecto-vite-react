import { Link } from "react-router-dom"
import { useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Collapse } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";


const MaterialList = () => {
  const [open, setOpen] = useState();
  const handleClick = () => {
      setOpen(!open);
  }
  const handleMenu = (menu) => {
    alert("mail");
  }

  return (
   <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            List
          </li>
        </ol>
      </nav>
      <hr />
      <h3>List</h3>
     <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
     component="nav" aria-labelledby="nested-list-subheader" 
     subheader={
      <ListSubheader component="div" id="nested-list-subheader">Título o encabezado</ListSubheader>}
     >
    <ListItemButton onClick={handleMenu}>
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Enviar Email"></ListItemText>
    </ListItemButton>

    <ListItemButton onClick={handleMenu}>
        <ListItemIcon>
            <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Borradores"></ListItemText>
    </ListItemButton>

    <ListItemButton onClick={handleClick}>
        <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
        <ListItemText primary="Bandeja de entrada" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{pl: 4}}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Destacados" />
        </ListItemButton>
        <ListItemButton sx={{pl: 4}}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Archivados" />
        </ListItemButton>
        </List>
      </Collapse>
     </List>
   </>
  )
}

export default MaterialList
