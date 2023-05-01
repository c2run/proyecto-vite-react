import { Link, Form, useActionData} from "react-router-dom";
import Validaciones from "../componentes/Validaciones";
import Swal from "sweetalert2";
import { authRegistro } from "../servicios/ApiAuth";
import { expresion_password, expresion_correo } from "../validaciones";


export async function action({request}){
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  if (!expresion_correo.test(formData.get("correo"))) {
    errores.push("El E-Mail ingresado no es válido");
  }
  if (datos.password != datos.password2) {
    errores.push("Las contraseñas ingresadas no coinciden");
  }
  if (!expresion_password.test(formData.get("password"))) {
    errores.push(
      "La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres."
    );
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length){
    //console.log(errores);
    return errores;
  }
  let registrado = await authRegistro({email: datos.correo , password:datos.password});
  if(registrado.registrado=='ok'){
    Swal.fire({
      icon: 'success',
      title: 'Ok',
      text: "Te has registrado exitosamente"
      });
      setInterval(() => { I
        window.location = window.location.href;
        }, 2000);
        return true;
  }else{
    return Swal.fire({
      icon: 'error',
      title: 'Ops',
      text: "Ocurrió un error, el e-Mail indicado no está disponible"
  });
  }
}

const AccesoRegistro = () => {
    const errores = useActionData();
  return (
    <>
        <h1>Registrarse</h1>

        {errores?.length && <Validaciones errores={errores} />}
          <Form method="post" noValidate>
          
          <div className='form-group'>
          <label htmlFor="correo">E-Mail</label>
          <input type="text" id="correo" name="correo"
          className='form-control' placeholder='E-Mail' />
          </div>
          <div className='form-group'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password"
          className="form-control" placeholder='Contraseña' />
          </div>

          <div className='form-group'>
          <label htmlFor="password2">Repetir contraseña</label>
          <input type="password" id="password2" name="password2"
          className='form-control' placeholder='Repetir contraseña' />
          </div>
          <button className='btn btn-primary'>Enviar</button>
      </Form>

    </>
  )
}

export default AccesoRegistro
