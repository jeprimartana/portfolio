import React from 'react'
import './about.css'
import Me from '../../assets/about_me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section className='about'>
      <h5 id='about' className='about'>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt="About Me" />
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Iam Freshgraduate</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>+0 <br /> Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>7 <br /> Experiment</small>
            </article>
          </div>
          <br />
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <p>
            Introducing, my name is I Nyoman Jepri Martana, I come from Bali to be precise from Petak - Gianyar. I graduated from the Indonesian Institute of Technology and Business majoring in Computer Systems. I have a good health condition. Besides being able to work with a team, I can also work under pressure and pursue a deadline.
          </p>
          <p>
            My educational background is a Bachelor of Computer System who is currently undergoing the final semester of making a project that is useful for the community. I am very happy with computers because of my interest and curiosity in the world of technology which made me jump in and focus on knowing more about the world of technology by majoring in computer systems.
          </p>


        </div>
      </div>
    </section>
  )
}

export default about

