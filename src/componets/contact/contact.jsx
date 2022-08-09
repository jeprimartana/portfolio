import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ynwrmqj', 'template_ws9i5dn', form.current, 'F-lkLjf_yiqm2-3HG')

    e.target.reset()
  };

  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='icon' />
            <h4 className='lima'>Email</h4>
            <h5 className='lima'>jeprimartana05@gmail.com</h5>
            <a href="mailto:jeprimartana05@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerFill className='icon' />
            <h4 className='lima'>Messenger</h4>
            <h5 className='lima'>Jepri</h5>
            <a href="https://m.me/gatot.mongki" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='icon' />
            <h4 className='lima'>WhatsApp</h4>
            <h5 className='lima'>+6285858195848</h5>
            <a href="https://api.whatsapp.com/send?phone=+6285858195848" target="_blank">Send a message</a>
          </article>
        </div>
        {/* akhir contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
