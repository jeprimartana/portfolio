import React from 'react'
import Header from './componets/header/header'
import Nav from './componets/nav/nav'
import About from './componets/about/about'
import Experience from './componets/Experience/experience'
import Service from './componets/service/service'
import Portfolio from './componets/portfolio/portfolio'
import Testimonials from './componets/testimonials/testimonials'
import Contact from './componets/contact/contact'
import Footer from './componets/footer/footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
