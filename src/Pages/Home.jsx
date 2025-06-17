import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Logo from '../Components/Logo'
import Experiences from '../Components/Experiences'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        // <div className=' flex flex-col items-center space-y-7 text-center'>
        <div>
            <Navbar />
            <Hero />
            <Logo />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home