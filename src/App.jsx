import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Exprience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Exprience from './Components/Exprience'

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Hero />
      <About />
      <Exprience />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
