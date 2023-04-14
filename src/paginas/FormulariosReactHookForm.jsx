import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const FormulariosReactHookForm = () => {
    const {register,formState:{errors}, handleSubmit} = useForm();
    function onSubmit(values)
    {
        Swal.fire({
            icon: 'success',
            title:'OK',
            text: `E-mail:${values.correo} | Contraseña: ${values.password}`
        });
    }
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">React Hook Form</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            React Hook form
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario React Hook Form</h3>
        { ( errors.correo || errors.password ) && (
            <div className="alert alert-danger">
                <ul>
                    {errors.correo && <li>{errors.correo?.message}</li>}
                    {errors.password && <li>{errors.password?.message}</li>}
                </ul>
            </div>
        )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
            <label htmlFor="correo">E-mail</label>
            <input type="text" id="correo" name="correo" 
            {...register("correo", {
                required: "El campo email es obligatorio",
                pattern: {
                    value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El E-mail ingresado no es válido"
                }
                })} 
            className="form-control" />
        </div>
        <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password"  name="password" 
            {...register("password", {
                required: "El campo contraseña es obligatorio",
                pattern: {
                    value: !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i,
                    message: "La contraseña ingresada debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres."
                }
                })}  className="form-control" />
        </div>
        <button className="btn btn-warning" type="submit"><i class="fa-solid fa-lock"></i> Enviar</button>
      </form>
    </>
  )
}

export default FormulariosReactHookForm
