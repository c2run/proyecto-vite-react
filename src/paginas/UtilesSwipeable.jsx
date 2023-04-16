import { Link } from "react-router-dom";
import { LeadingActions, SwipeableList,SwipeableListItem, SwipeAction, TrailingActions  } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const UtilesSwipeable = () => {
    
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.info("leading actions")}>
            <div className='alert alert-warning'>Editar</div>
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            onClick={() => console.info("trailing actions")} 
            destructive={true}
            >
            <div className='alert alert-danger'>Eliminar</div>
            </SwipeAction>
        </TrailingActions>
    )

  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            React-swipeable-list
          </li>
        </ol>
      </nav>
      <hr />
      <h3>React-swipeable-list</h3>
      <hr />
      <SwipeableList>
        <SwipeableListItem  leadingActions={leadingActions()} trailingActions={trailingActions()}>
            <div className="alert alert-success">
                Esta es una prueba de lo que podría ser este componente, puedes agregar formularios, 
                botones con acciones, o lo que necesites dentro del contenido SwipeAction. 
            </div>
        </SwipeableListItem>
      </SwipeableList>

      
   </>
  )
}

export default UtilesSwipeable
