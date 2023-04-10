import { Outlet } from "react-router-dom"

const Frontend = () => {
  return (
    <>
        <h1>Título para todas las páginas</h1>
        <Outlet />
    </>
  )
}

export default Frontend
