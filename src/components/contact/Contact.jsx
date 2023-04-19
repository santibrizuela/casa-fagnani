import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ry1pnva', 'template_8w77i8a', form.current, 'TDcJjfHccn14EOCme')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Vías De</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>11-6054-9238</h5>
            <h5>0800-333-3068</h5>
            <a href="https://api.whatsapp.com/send?phone=5491160549238&text=Hola!%20Necesito%20informaci%C3%B3n%20" target='_blank' rel="noreferrer" className='btn btn-primary'>Contactarse</a>
          </article>
          <article className='contact__option'>
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Tel. 24hs</h4>
            <h5>0800-333-3068</h5>
            <h5>4683-4848</h5>
            <a href="tel:08003333068" target='_blank' rel="noreferrer" className='btn btn-primary'>Contactarse</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>casafagnani@hotmail.com</h5>
            <h5>casa.fagnani90@gmail.com</h5>
            <a href="mailto:casafagnani@hotmail.com,casa.fagnani90@gmail.com" target='_blank' rel="noreferrer" className='btn btn-primary'>Contactarse</a>
          </article>
          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email"name='email' placeholder='correo@mail.com' required />
          <textarea name="message"rows="7" placeholder='Escribir mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>


      </div>
    </section>
  )
}

export default Contact