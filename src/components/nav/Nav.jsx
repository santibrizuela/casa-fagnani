import React from 'react'
import './nav.css'
import LogoFagnani from '../../assets/casaFagnaniLogo.png'

const Nav = () => {  
  return (
    <nav>
      <div className="brand"><a href="https://www.casafagnani.com" target='_blank' rel="noreferrer"><img src={LogoFagnani} alt="CASA FAGNANI" /></a></div>


      <div className="nav__menu">
        <a href="#header">Inicio</a>
        <a href="#contact">Contacto</a>
        <a href="#about">Nosotros</a>
        <a href="#services">Servicios</a>
      </div>
      
      
    </nav>
  )
}

export default Nav