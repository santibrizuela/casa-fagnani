import React from 'react'
import './footer.css'
import {BsEnvelopeFill} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="https://www.casafagnani.com/" className='footer__logo'>CASA FAGNANI</a>

      <ul className='permalinks'>
        <li><a href="#header">Inicio</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Casa-Fagnani-109403035101770" target='_blank' rel="noreferrer"><FaFacebookSquare/></a>
        <a href="mailto:casafagnani@gmail.com" target='_blank' rel="noreferrer"><BsEnvelopeFill/></a>
        <a href="https://www.instagram.com/casafagnani/" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/company/casa-fagnani/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BRIZUELA SIDERAVICIUS PRODUCE.</small>
      </div>
    </footer>
  )
}

export default Footer