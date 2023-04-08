import Parser from "html-react-parser";
import Basicos from "./componentes/Basicos";
import ComponenteDeClase from "./componentes/ComponenteDeClase";
import ComponenteFuncional from "./componentes/ComponenteFuncional";

function App() {
  return (
  <div>
   <h1>Hola</h1>
    <ComponenteFuncional></ComponenteFuncional>
   <Basicos></Basicos>
   <ComponenteDeClase></ComponenteDeClase>
  </div>
  )
}

export default App;
