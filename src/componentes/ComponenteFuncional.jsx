import ComponenteFuncional2 from "./ComponenteFuncional2"

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
    </div>
  )
}

export default ComponenteFuncional
