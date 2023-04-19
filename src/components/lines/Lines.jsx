import React from 'react'
import './lines.css'
import {BiPhoneCall} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {BiHome} from 'react-icons/bi'

const Lines = () => {
  return (
    <section id='lines'>
        <div className="lines__container">

            <article className='line'>
            <BiHome className='line__icon' />
            <div className="line__head">
                
                <h2>TELEFONOS</h2>
                <h4>4683-4848 / 5093</h4>
            </div>          
            </article>

            <article className='line'>
            <BiPhoneCall className='line__icon' />
            <div className="line__head">
                
            
                <h2>24hs.</h2>
                <h4>0800-333-3068</h4>
            </div>
            </article>

            <article className='line'>
            <GoLocation className='line__icon' />
            <div className="line__head">
            
                
                <h2>UBICACION</h2>
                <h4>AV ESCALADA 768.</h4>
            </div>
            </article>
        </div>
    </section>
  )
}

export default Lines