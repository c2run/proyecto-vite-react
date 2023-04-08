import React from 'react'
import { formatearFecha, acortarTexto, formatearNumero } from "../helpers/helper";

function Basicos() {
    let fecha = new Date();
    let cantidad = 43433;
    let texto = "Yo ofrezco desnudas, vírgenes, intactas y sencillas, para mis delicias y el placer de mis amigos, estas noches árabes vividas, soñadas y traducidas sobre su tierra natal y sobre el agua Ellas me fueron dulces durante los ocios en remotos mares, bajo un cielo ahora lejano. Por eso las doy. Sencillas, sonrientes y llenas de ingenuidad, como la musulmana Schehrazada, su madre suculenta que las dió a luz en el misterio; fermentando con emoción en los brazos de un príncipe sublime —lúbrico y feroz—, bajo la mirada enternecida de Alah, clemente y misericordioso. Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía, que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa.";
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
          <li>Cantidad: {`USD${formatearNumero(cantidad)}`}</li>
          <li>Texto: {acortarTexto(texto, 0, 100)}...</li>
        </ul>
      </>
    );
  }

export default Basicos
