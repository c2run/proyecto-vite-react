import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Modal } from "react-bootstrap"

const UtilesModal = () => {
   //un useState show
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Ventana modal
            
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Ventana modal</h3>
      <Button variant="primary" onClick={handleShow}>Abrir</Button>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>
                Título de la ventana
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card" mb-3>
            <h1>Almacenamiento local</h1>
            </div>
            <div className="card-body">
            <h3>Título</h3>
            <p>Párrafo Párrafo Párrafo PárrafoPárrafoPárrafoPárrafoPárrafoPárrafoPárrafo  Párrafo PárrafoPárrafo</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="primary">Alguna acción</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UtilesModal
