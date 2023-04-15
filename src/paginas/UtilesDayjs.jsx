import { Link } from "react-router-dom"
import dayjs from "dayjs"


const UtilesDayjs = () => {
    let fecha = new Date();
    dayjs.locale('es');
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Days js
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Days JS</h3>
      <h3>Formatear fecha</h3>
      <ul>
        <li>Fecha: {fecha.toString()}</li>
        <li>Fecha: {dayjs(fecha).format('dddd')}{dayjs(fecha).format('DD')} 
         {  dayjs(fecha).format('MMMM')} del {dayjs(fecha).format('YYYY')} a las
         {dayjs(fecha).format('HH:mm:ss')} </li>
        <li>  Fecha corta: {dayjs(fecha).format('DD/MM/YYYY')}</li>
        <li> Fecha Timestamp: {fecha.valueOf()}</li>

      </ul>
      <h3>Calculos fecha: </h3>
      <li>  Fecha + 7 días: {dayjs(fecha).add(7, 'day').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 días: {dayjs(fecha).subtract(7, 'day').format('DD/MM/YYYY')  }</li>
      <li>  Fecha + 7 meses: {dayjs(fecha).add(7, 'month').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 meses: {dayjs(fecha).subtract(7, 'month').format('DD/MM/YYYY')  }</li>
      <li>  Fecha + 7 años: {dayjs(fecha).add(7, 'year').format('DD/MM/YYYY')  }</li>
      <li>  Fecha - 7 años: {dayjs(fecha).subtract(7, 'year').format('DD/MM/YYYY')  }</li>
    </>
  )
}

export default UtilesDayjs
