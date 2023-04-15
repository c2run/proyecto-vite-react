import { Link } from "react-router-dom"


const Utiles = () => {

  return (
    <>
        <h1>Utiles</h1>

    <ul>
        <li>
        <Link to='/utiles/daysjs'>Daysjs</Link>
        </li>
        <li>
        <Link to='/utiles/moment'>Moment</Link>
        </li>
        <li>
        <Link to='/utiles/spinner'>Spinner</Link>
        </li>
    </ul>
    </>
  )
}

export default Utiles
