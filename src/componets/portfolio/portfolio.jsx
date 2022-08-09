import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency & Financial Visualization',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chart templates & infographics in Figma',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining taks adn training progress',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Infographics in Figma',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Financial Visualization',
    github: 'https://github.com/jeprimartana',
    demo: 'https://www.jeprimartana.github.io'
  },
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='h2'>Portfolio</h2>
      <h5 className='conss'>Just for Example</h5>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={title} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio