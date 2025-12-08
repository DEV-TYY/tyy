import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Headline from './Components/Headline/Headline'
import Services from './Components/Services/Services'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Services/>
      <AboutMe/>
      <Projects/>
      <Headline/>
    </div>
  )
}

export default App
