import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='services' className='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>

          <ul className='service_list'>
             <li>
              <BiCheck className='service_list-icon'/>
              <p>Create applications and/or sites by utilizing wireframes, prototypes.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Perform iterations on the design of applications and/or sites that have been created by accommodating input from clients.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Maximizing user experience in digital product interface design.</p>
            </li>
          </ul>
        </article>
        {/* Akhir dari UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create and develop websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> The presence of website development services allows customers to more easily communicate with business owners anywhere without limits. Because everything is accessed online.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create development plans and collect information</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create a sitemap to describe the main correlations of a site.</p>
            </li>
          </ul>
        </article>
        {/* akhir web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create applications and/or sites by utilizing wireframes, prototypes.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Perform iterations on the design of applications and/or sites that have been created by accommodating input from clients.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Maximizing user experience in digital product interface design.</p>
            </li>
          </ul>
        </article>
        {/* akhir content creation */}
      </div>
    </section>
  )
}

export default service
