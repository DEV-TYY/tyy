import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Headline from './Components/Headline/Headline'
import Services from './Components/Services/Services'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Plans from './Components/Plans/Plans'
import Testimonial from './Components/Testimonial/Testimonial'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import SparkCursor from './Components/animates/cursor'

const App = () => {
  return (
    <section id='control'>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Services/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Plans/>
      <Headline/>
      <Testimonial/>
      <ContactMe/>
      <Headline/>
      <Footer/>
      <SparkCursor />
    </section>
  )
}

export default App
