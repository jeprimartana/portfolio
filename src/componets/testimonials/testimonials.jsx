import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'



const data = [
  {
    avatar: Avatar1,
    nama: 'Tiana Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, perferendis beatae aperiam voluptatibus deserunt, molestias dicta laborum quia perspiciatis aspernatur labore fugiat natus aliquid tempora dolorum eligendi dolor quas eius!'
  },
  {
    avatar: Avatar2,
    nama: 'Diantara Marrgie',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, perferendis beatae aperiam voluptatibus deserunt, molestias dicta laborum quia perspiciatis aspernatur labore fugiat natus aliquid tempora dolorum eligendi dolor quas eius!'
  },
  {
    avatar: Avatar3,
    nama: 'Justin Alex',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, perferendis beatae aperiam voluptatibus deserunt, molestias dicta laborum quia perspiciatis aspernatur labore fugiat natus aliquid tempora dolorum eligendi dolor quas eius!'
  },
  {
    avatar: Avatar4,
    nama: 'Gorgoe jons',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, perferendis beatae aperiam voluptatibus deserunt, molestias dicta laborum quia perspiciatis aspernatur labore fugiat natus aliquid tempora dolorum eligendi dolor quas eius!'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <h5>Review from clients</h5>
      <h2 className='h2'>Testimonials</h2>
      <h4 className='conss'>Just for Example</h4>

      <div className="container testimonials_container">


        {
          data.map(({ avatar, nama, review }, index) => {
            return (
              <div key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_nama'>{nama}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default testimonials
