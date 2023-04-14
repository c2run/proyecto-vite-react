import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { render } from "react-dom"
import { Form, Field } from "react-final-form"

const FormulariosReactFinalForm = () => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const required = (value) => (value ? undefined: 'Este campo es obligatorio');

    const mailValido = (value) => ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? undefined: 'El mail ingresado no es valido');

    const passwordValido = (value) => ((!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(value)) ? undefined : 'La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres.');

    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value),
    undefined);

    const onSubmit = async (values) =>
    {
        await sleep(300);
        Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: `E-mail:${values.correo} | Contraseña: ${values.password}`
        });
    }
   
  return (
    <>
         <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formularios React Final Form
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario React Final Form</h3>
      <Form 
      onSubmit={onSubmit}
      render={({handleSubmit,form,submitting,pristine,values})=>(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="correo" validate={composeValidators(required,mailValido)} >
                       {({input,meta})=>(
                        <div>
                            <label htmlFor="correo">E-mail</label>
                            <input type="text" className="form-control" placeholder="E-mail"
                            {...input}
                             />
                            {meta.error && meta.touched && <div className='text text-danger'>{meta.error}</div>}
                             
                        </div>
                       )} 
                </Field>
            </div>

            <div className="form-group">
                <Field name="password" validate={composeValidators(required,passwordValido)}>
                       {({input,meta})=>(
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña"
                            {...input}
                             />
                             {meta.error && meta.touched && <div className="text text-danger">{meta.error}</div>}
                        </div>
                       )} 
                </Field>
            </div>
            <hr />
            <div className="buttons">
            <button className="btn btn-info" type="submit" disabled={submitting || pristine}>Enviar</button>
            &nbsp;&nbsp;
            <button className="btn btn-info" type="button" onClick={form.reset} disabled={submitting || pristine}>Reestablecer</button>
            </div>
            
        </form>
      )}
      >
      </Form>
    </>
  )
}

export default FormulariosReactFinalForm
