import React from "react";

export default class ComponenteDeClase extends React.Component
{
    constructor(props)
    {
        console.log("el componente aún no está montado");
        super();
        this.state={
                contador: 0,
                nombre: "Jose"
        };
    }
        componentDidMount()
        {
            console.log("El componente ya se encuentra en el DOM");
            setInterval(() =>{
            this.setState(
                {
                    contador: this.state.contador +1
            });
         },1000);
        }
        

        componentWillUnmount()
        {
            console.log("El componente ha sido eliminado del DOM");
        }
        componentDidUpdate(prevProps, prevState)
        {
            console.log("El estado o las props del componente han cambiado");
        }
    render(){
        return (
            <>
                <h1>Hola de componente de clase</h1>
                <p>Contador = {this.state.contador}</p>
            </>
        )
    }
}