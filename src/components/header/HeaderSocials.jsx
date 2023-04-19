import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {BsEnvelope} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://api.whatsapp.com/send?phone=5491160549238&text=Hola!%20Necesito%20informaci%C3%B3n%20" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
        <a href="#contact"><BsEnvelope/></a>
        <a href="#contact"><FiMapPin/></a>
    </div>
  )
}

export default HeaderSocials