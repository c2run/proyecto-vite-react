import styled from "@emotion/styled";

export const Titulo = styled.h1`
  font-size: 5 0px;
  text-align: center;
  color:red;
`
export const Circulo = styled.div`
  background-color: red;
  color: #fff;
  text-align: center;
  padding: 80px 0px 10px 0px;
  width: 200px;
  height: 100px;
  border: 5px solid blue; 
  border-radius: 50%;
`;

const StyleComponent = () => {
  return (
    <>
        <Titulo>Style component renovado</Titulo>
        <Circulo>Círculo</Circulo>
    </>
  )
}

export default StyleComponent
