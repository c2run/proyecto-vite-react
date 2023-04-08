import ComponenteFuncional2 from "./ComponenteFuncional2"
import Numero from './Numero';
import ChildrenComponent from "./ChildrenComponent";

const ComponenteFuncional = () => {
    let nombre= "Jose Cerda";
    let numero=12;
    let paises = [
        {
          id: 1,
          nombre: "Chile",
          dominio: "cl",
        },
        {
          id: 2,
          nombre: "Perú",
          dominio: "pe",
        },
        {
          id: 3,
          nombre: "Bolivia",
          dominio: "bo",
        },
        {
          id: 4,
          nombre: "Argentina",
          dominio: "ar",
        },
        {
          id: 5,
          nombre: "Venezuela",
          dominio: "vl",
        },
        {
          id: 6,
          nombre: "Colombia",
          dominio: "co",
        },
        {
          id: 7,
          nombre: "Panamá",
          dominio: "pn",
        },
        {
          id: 8,
          nombre: "Brasil",
          dominio: "br",
        },
        {
          id: 9,
          nombre: "Paraguay",
          dominio: "pr",
        },
        {
          id: 10,
          nombre: "Uruguay",
          dominio: "ur",
        },
      ];
  return (
    <div>
       <h1>Hola desde Componente funcional    </h1> 
       <ComponenteFuncional2 prop1="manzana" nombre={nombre} paises={paises} />
       <hr />
       {(numero==12) ? (
            <Numero numero={numero} />
        ) : (
            <div>No es 12</div>
        ) }
        <hr />

        <ChildrenComponent otro="más contenido de children">
            <p>contenido desde el children</p>
        </ChildrenComponent>
    </div>
  )
}

export default ComponenteFuncional
