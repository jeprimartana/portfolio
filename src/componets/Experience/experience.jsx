import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience' className='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developer</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Ract Js</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Tailwinds</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        {/* Akhir dari Front end */}
        <div className="experience_backend">
          <h3>Backend Developer</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
               <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>C</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Laravel</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
