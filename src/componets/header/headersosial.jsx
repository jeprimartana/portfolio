import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const headersosial = () => {
  return (
    <div className='header_sosials'>
        <a href="https://www.linkedin.com/in/jeprimartana/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jeprimartana" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default headersosial