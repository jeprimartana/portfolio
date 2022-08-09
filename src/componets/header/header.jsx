import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/m3.png'
import Headersosial from './headersosial'

const header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Jepri Martana</h1>
      <h5 className="text-light">Front End Developer</h5>
      <CTA/>
      <Headersosial/>

      <div className="me">
        <img src={Me} alt="Me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default header