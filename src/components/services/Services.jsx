import React from 'react'
import './services.css'
import {AiFillHome} from 'react-icons/ai'
import {FaAmbulance} from 'react-icons/fa'
import {FaPlaneArrival} from 'react-icons/fa'
import {AiFillMedicineBox} from 'react-icons/ai'
import {HiOutlineIdentification} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Asistimos En</h5>
      <h2>Servicios</h2>

      <div className="services__container">
        <article className='service'>
          <div className="service__head">
            <AiFillHome className='service__icon'/>
            <h2>SALA PROPIA</h2>
          </div>
        </article>

        <article className='service'>
          <div className="service__head">
            <FaAmbulance className='service__icon'/>
            <h2>TRASLADOS</h2>
          </div>          
        </article>

        <article className='service'>
          <div className="service__head">
            <FaPlaneArrival className='service__icon'/>
            <h2>REPATRIACIONES</h2>
          </div>
        </article>

        <article className='service'>
          <div className="service__head">
            <AiFillMedicineBox className='service__icon'/>
            <h2>OBRAS SOCIALES</h2>
          </div>
        </article>

        <article className='service'>
          <div className="service__head">
            <HiOutlineIdentification className='service__icon'/>
            <h2>PFA | SMSV</h2>
          </div>          
        </article>

        <article className='service'>
          <div className="service__head">
            <BsFillTelephoneFill className='service__icon'/>
            <h2>LINEA GRATUITA</h2>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services