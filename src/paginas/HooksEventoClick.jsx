import React from "react";
import { Link } from "react-router-dom";

const HooksEventoClick = () => {

    const handlePresioname = () => {
        alert("Hola que tal");
    }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Evento
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Click</h3>
      <button className="btn btn-primary" onClick={handlePresioname}><i className="fa-solid fa-hand-point-up"></i> Click</button>
    </>
  );
};

export default HooksEventoClick;
