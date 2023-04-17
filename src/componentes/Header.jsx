import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Header = () => {
  return (
    <>
        <div className='container'>
        <header className="blog-header lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <Link className="blog-header-logo text-body-emphasis" to="/">
                <img src='/images/logo.png' />
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search"></a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <Link className="p-2 link-secondary" to="/" title='Inicio'>
              Home
            </Link>
            <Link className="p-2 link-secondary" to="/basicos" title='Rutas'>
              Básicos
            </Link>

            <Link className="p-2 link-secondary" to="/formularios" title='Formularios'>
              Formularios
            </Link>
            <Link className="p-2 link-secondary" to="/rutas" title='Rutas'>
              Rutas
            </Link>

            <Link className="p-2 link-secondary" to="/styled-component" title='Styled Component'>
              Styled Component
            </Link>

            <Link className="p-2 link-secondary" to="/hooks" title='Styled Component'>
             Hooks
            </Link>

            <Link className="p-2 link-secondary" to="/utiles" title='Styled Component'>
             Utiles
            </Link>
            
            <Link className="p-2 link-secondary" to="/material" title='Styled Component'>
             Material
            </Link>
           
          </nav>
        </div>
        </div>
    </>
  );
}

export default Header
