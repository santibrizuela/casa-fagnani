import React from 'react'
import './about.css'
import US from '../../assets/about2.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Acerca De</h5>
      <h2>Nosotros</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={US} alt="CASA FAGNANI" />
          </div>
        </div>

        <div className="about__content">

          <h2>CASA FAGNANI</h2>
          <h5>Servicios Fúnebres</h5>
          
          <p>
            Somos una empresa con 30 años de Experiencia y Trayectoria en Servicios Funerarios. Atendemos <strong>TODAS</strong> las <strong>OBRAS SOCIALES</strong>.<br />
            Realizamos Servicios en CABA y GBA. Nuestra Casa Central se ubica en <strong>AV Escalada 768</strong>-CABA, con Sala Velatoria Propia. <br />
            Servicios Personalizados a <strong>Sociedad Militar Seguro de Vida</strong> (SMSV) y <strong>Policía Federal Argentina</strong> (PFA).
          </p>

          <a href="#contact" className='btn btn-primary'>Contactanos</a>
        </div>
      </div>
    </section>
  )
}

export default about