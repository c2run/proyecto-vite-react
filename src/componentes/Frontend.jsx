import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { EjemploProvider } from "../context/EjemploProvider"

const Frontend = () => {
  return (
    <>
      <EjemploProvider>
       <Header />
       <main className="container">
       <Outlet />
       </main>
        <Footer />
        </EjemploProvider>
    </>
  )
}

export default Frontend
