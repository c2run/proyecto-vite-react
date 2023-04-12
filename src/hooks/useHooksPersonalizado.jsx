import { useState } from "react";

const useHooksPersonalizado = () => {

    const [verduras, setVerduras] = useState([]);

  return [verduras,setVerduras];
}

export default useHooksPersonalizado
