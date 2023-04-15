import { Link } from "react-router-dom"
import moment from "moment/moment"
import setLocaleTo_ES_WithData from "moment_spanish_locale";

setLocaleTo_ES_WithData(moment);

const UtilesMoment = () => {
    let fecha = new Date();
  return (

    <>
         <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Moment
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Moment</h3>
      <h3>Formatear Fecha</h3>
      <ul> Fecha: {fecha.toString()}</ul>
      <ul>Fecha corta: {moment(fecha).format('DD/MM/YYYY')}</ul>

    <ul>Fecha cadena de texto: {moment(fecha).format('dddd').replace(/\b[a-z]/g,c=>c.toUpperCase())}
    {moment(fecha).format('DD')} de {moment(fecha).format('MMMM').replace(/\b[a-z]/g,c=>c.toUpperCase())} de
    {moment(fecha).format('YYYY')} a las {moment(fecha).format('HH:mm:ss')}</ul>

      <h3>Cálculos con fechas</h3>
      <li>  Fecha + 7 días: {moment(fecha).add(7, 'day').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 días: {moment(fecha).subtract(7, 'day').format('DD/MM/YYYY')  }</li>
      <li>  Fecha + 7 meses: {moment(fecha).add(7, 'month').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 meses: {moment(fecha).subtract(7, 'month').format('DD/MM/YYYY')  }</li>
      <li>  Fecha + 7 años: {moment(fecha).add(7, 'year').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 años: {moment(fecha).subtract(7, 'year').format('DD/MM/YYYY')  }</li>
    </>
  )
}

export default UtilesMoment
