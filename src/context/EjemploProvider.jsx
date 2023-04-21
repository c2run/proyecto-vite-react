import { useState,createContext } from "react";

const EjemploContext = createContext();

//el provider queda asociado al contexto. el que genera la ejecución del context
const EjemploProvider = ({children}) => {
        const variableContexto = "Hola José desde el contexto";

        const [stateContext, setStateContext] = useState("contenido inicial al state");

        const saludar = (nombre) => 
        {
            return nombre;
        }
    return(
        <EjemploContext.Provider value={
            {
            variableContexto, saludar , stateContext , setStateContext
            }
        }>
            {children}
        </EjemploContext.Provider>
    )
}



export {EjemploProvider}

export default EjemploContext