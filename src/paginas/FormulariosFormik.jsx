import { Link } from "react-router-dom"
import { useFormik } from "formik"
import Swal from "sweetalert2"

const FormulariosFormik = () => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            correo: "",
            password: ""
        },
        onSubmit: async function(values)
        {
            Swal.fire({
                icon: 'success',
                title: 'OK',
                text: `E-mail:${values.correo} | Contraseña:${values.password}`
            });
        }
    });

  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            FormulariosFormik
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario Formik</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="correo">E-mail</label>
            <input type="text" id="correo" onChange={handleChange} name="correo" value={values.correo} className="form-control" />
        </div>
        <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={handleChange} value={values.password} name="password" className="form-control" />
        </div>
        <button className="btn btn-warning" type="submit"><i class="fa-solid fa-lock"></i> Enviar</button>
      </form>
    </>
  )
}

export default FormulariosFormik
