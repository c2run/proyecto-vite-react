const Pais = ({ pais }) => {
  return (
    <tr key={pais.id}>
      <td>{pais.id}</td>
      <td>{pais.nombre}</td>
      <td>{pais.dominio}</td>
    </tr>
  );
};

export default Pais;
