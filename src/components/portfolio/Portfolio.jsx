import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Feretería Divano',
    github: 'https://github.com/santibrizuela/casaDivano',
    website: 'https://ferreteriadivano.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Madero Imprime',
    github: 'https://github.com/santibrizuela/madero',
    website: 'https://santibrizuela.github.io/madero/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Casa Fagnani',
    github: 'https://github.com/santibrizuela/casaDivano',
    website: 'https://casafagnani.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Paste Burger',
    github: 'https://github.com/santibrizuela/pasteburger',
    website: 'https://santibrizuela.github.io/pasteburger/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Our Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, website}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">              
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={website} className='btn btn-primary' target='_blank' rel="noreferrer">Go Now!</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio