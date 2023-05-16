import { Button } from "bootstrap"
import { Link, redirect } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"

const AccesoLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarCambioEmail = (e) => {
    setEmail(e.target.value);
  };

  const manejarCambioPassword = (e) => {
    setPassword(e.target.value);
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = "h736hd8"; // Reemplazar con tu API key
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.ok) {
        const users = await response.json();
        const authenticatedUser = users.find(
          (user) => user.email === email && user.username === password
        );

        if (authenticatedUser) {
          Swal.fire("Success", "Usuario Autenticado!", "success");
          return window.location.assign('/acceso/protegido');
        } else {
          Swal.fire("Error", "Credenciales inválidas", "error");
        }
      } else {
        Swal.fire("Error", "Ocurrió un error en la autenticación", "error");
      }
    } catch (error) {
      console.log("Ocurrió un error:", error);
    }
  };


  return (
    <>
        <h1>Acceso Login</h1>
        <form onSubmit={manejarSubmit} method="post"> 
        <input type="text" name="email" placeholder="email" onChange={manejarCambioEmail} /><hr />
          <input type="password" name="password" placeholder="password" onChange={manejarCambioPassword} />
          <hr />
          <button className="btn btn-primary" type="submit" >Enviar</button>
        </form>
    </>
  )
}

export default AccesoLogin
