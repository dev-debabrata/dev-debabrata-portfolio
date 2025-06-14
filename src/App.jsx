import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Education from './Components/Education'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
