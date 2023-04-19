import { Link } from "react-router-dom"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

const MaterialCard = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Card
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Card</h3>

      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paella de camarón y chorizo"
        subheader="14 de Septiembre, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="../../public/images/codeigniter.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Esta impresionante paella es un plato perfecto para fiestas y una comida divertida para cocinar.
          junto con sus invitados. Agregue 1 taza de guisantes congelados junto con los mejillones,
          Si te gusta.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Metodo</Typography>
          <Typography paragraph>
          Calienta 1/2 taza de caldo en una olla hasta que hierva a fuego lento, agrega el azafrán y deja listo.
            a un lado durante 10 minutos.
          </Typography>
          <Typography paragraph>
          Calienta 1/2 taza del caldo en una olla hasta que hierva a fuego lento, agrega el azafrán y deja reposar por 10 minutos.

Caliente el aceite en una paellera (de 14 a 16 pulgadas) o en una sartén grande y profunda a fuego medio-alto. Agregue el pollo, los camarones y el chorizo, y cocine, revolviendo ocasionalmente hasta que estén ligeramente dorados, de 6 a 8 minutos. Transfiera los camarones a un plato grande y reserve, dejando el pollo y el chorizo ​​en la sartén. Agregue el pimentón, las hojas de laurel, el ajo, los tomates, la cebolla, la sal y la pimienta, y cocine, revolviendo con frecuencia hasta que espese y esté fragante, aproximadamente 10 minutos. Agregue el caldo de azafrán y las 4 1/2 tazas restantes de caldo de pollo; llevar a ebullición.

Agregue el arroz y revuelva muy suavemente para distribuir. Cubra con alcachofas y pimientos, y cocine sin revolver, hasta que se absorba la mayor parte del líquido, de 15 a 18 minutos. Reduzca el fuego a medio-bajo, agregue los camarones y los mejillones reservados, introdúzcalos en el arroz y cocine nuevamente sin revolver, hasta que los mejillones se hayan abierto y el arroz esté tierno, de 5 a 7 minutos más. (Deseche los mejillones que no se abran).

Apartar del fuego para dejar reposar durante 10 minutos y luego servir.
          </Typography>
          <Typography paragraph>
          Agregue el arroz y revuelva muy suavemente para distribuir. Cubrir con alcachofas y
            pimientos, y cocine sin remover, hasta que se absorba la mayor parte del líquido,
            15 a 18 minutos. Reduzca el fuego a medio-bajo, agregue los camarones reservados y
            mejillones, metiéndolos en el arroz, y cocer de nuevo sin
            revolviendo, hasta que los mejillones se hayan abierto y el arroz esté tierno, de 5 a 7
            minutos mas. (Deseche los mejillones que no se abran).
          </Typography>
          <Typography>
          Apartar del fuego para dejar reposar durante 10 minutos y luego servir.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   </>
  )
}

export default MaterialCard
