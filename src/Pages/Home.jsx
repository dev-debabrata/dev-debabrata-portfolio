import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Logo from '../Components/Logo'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
// import Experience from '../Components/Experience'

const Home = () => {
    return (
        // <div className=' flex flex-col items-center space-y-7 text-center'>
        <div
            // id="nav-trigger"
            className="  dark:bg-blue-950 dark:text-gray-100">
            <Navbar />
            <Hero />
            <Logo />
            <About />
            {/* <Experience /> */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home