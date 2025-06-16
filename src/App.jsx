import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Expriences from './Components/Expriences'

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Hero />
      <About />
      <Expriences />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
