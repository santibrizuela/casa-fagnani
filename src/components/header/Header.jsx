import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>

      

      
      <div className="header__container mask">

        <div className="header__content">
          <h1>CASA FAGNANI</h1>
          <h2>EMERGENCIAS 24hs</h2>
          <h2>0800-333-3068</h2>

          <CTA/>
          <HeaderSocials/>
        </div>
        
       
      </div>
    </header>
  )
}

export default Header