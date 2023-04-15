import { Link } from "react-router-dom"
import '../../public/css/spinner.css';

const UtilesSpinner = () => {
  return (
   <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Spinner
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Spinner</h3>
      <div class="spinner"></div>
   </>
  )
}

export default UtilesSpinner
