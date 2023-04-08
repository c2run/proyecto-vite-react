import Parser from "html-react-parser";
import { formatearFecha } from "./helpers/helper";

function App() {
  let fecha = new Date();
  let cantidad = 43433;
  let texto = "asdasdasd asd asd ads asdasd ad asdasd ads ad asd asdasd asd asd adsad asd asd a";
  let edad = 11;
  let numero = 14;
  let paises = [
    {
      nombre: "Chile",
      dominio: "cl",
    },
    {
      nombre: "Perú",
      dominio: "pe",
    },
    {
      nombre: "Bolivia",
      dominio: "bo",
    },
    {
      nombre: "Argentina",
      dominio: "ar",
    },
    {
      nombre: "Venezuela",
      dominio: "vl",
    },
    {
      nombre: "Colombia",
      dominio: "co",
    },
    {
      nombre: "Panamá",
      dominio: "pn",
    },
    {
      nombre: "Brasil",
      dominio: "br",
    },
    {
      nombre: "Paraguay",
      dominio: "pr",
    },
    {
      nombre: "Uruguay",
      dominio: "ur",
    },
  ];
  return (
    <>
      <h1>interpolación con operadores ternarios</h1>
      <h3>Renderizado condicional</h3>
      {edad >= 18 && (
        <div>
          La persona es mayor de edad
          <hr />
        </div>
      )}
      <hr />
      {edad >= 18 ? (
        <div>La persona es mayor de edad</div>
      ) : (
        <div>La persona es menor de edad</div>
      )}

      <h2>Renderizado switch case</h2>
      {(() => {
        switch (numero) {
          case 13:
            return <div>Número es 13</div>;
            break;
          case 12:
            return <div>Número es 13</div>;
            break;
          default:
            return <div>No es ninguno de los números</div>;
            break;
        }
      })()}
      <hr />

      <h1>Ejemplos de Loop</h1>
      <h3>Loop normal con ES6</h3>
      <ul>
        {[...Array(11)].map((x, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h3>Inline IIFE</h3>
      <ul>
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<li key={i}>{i}</li>);
          }
          return rows;
        })([], 0, 10)}
      </ul>

      <h3>Con ES2015 syntax y Array methods</h3>
      {Array(11)
        .fill(1)
        .map((el, i) => (
          <li key={i}>{i}</li>
        ))}

      <h5>Ciclo for sencillo</h5>
      {(() => {
        let rows = [];
        for (let i = 1; i <= 10; i++) {
          rows.push(<li key={i}>{i}</li>);
        }
        return rows;
      })()}
      <hr />
      <h1>Recorrer elementos de arreglos con map</h1>
      <ul>
        {paises.map((pais, indice) =>(
          <li key={pais.dominio}>
          {indice } - {pais.nombre} (el dominio es: {pais.dominio})
          </li>
        ))}
      </ul>
      <hr />
      <h1>Helpers personalizados</h1>
      <ul>
        <li>Fecha: {formatearFecha(fecha)} </li>
        <li>Cantidad: {cantidad}</li>
        <li>Texto: {texto}</li>
      </ul>
    </>
  );
}

export default App;
