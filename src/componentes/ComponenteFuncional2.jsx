import Pais from './Pais'

const ComponenteFuncional2 = ({prop1, nombre, paises}) => {
  return (
    <div>
      <h1>Hola desde componente funcional 2</h1>
      <>
        <h3>Contenido desde el componente 2</h3>
        <ul>
          <li>Prop1: {prop1}</li>
          <li>Nombre: {nombre}</li>
          <li>
            <ul>
              {paises.map((pais) => (
                <li key={pais.id}>{pais.nombre}</li>
              ))}
            </ul>
          </li>
        </ul>
      </>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dominio</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => ( 
            <Pais key={pais.id} pais={pais}></Pais>
           ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponenteFuncional2
