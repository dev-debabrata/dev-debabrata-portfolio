import React from 'react'
import ProfileImg from "../assets/profile.png";
import Contact from './Contact';

const Hero = () => {
    return (
        <section
            id="home"
            className=" bg-gray-300 py-22 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-20 md:mt-24 lg:my-21 ">
            <div className="flex xl:flex flex-col-reverse gap-12 md:flex-row justify-between items-center">
                {/* Left side */}
                <div className="text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className=" text-3xl sm:text-5xl md:text-4xl lg:text-7xl font-semibold mb-4 leading-tight ">I'm Debabrata Das, frontend developer.</h1>
                    <p className=" text-sm md:text-sm lg:text-xl">I am a frontent developer from Kolkata. I have a meny project bulid in react.</p>
                    <div className=" space-x-4 md:space-x-2 lg:space-x-4 mt-5">
                        <a
                            href="Contact"
                            className="inline-block bg-blue-600 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 lg:text-lg rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">Contact Me</a>
                        <a
                            href="https://drive.google.com/file/d/13V4SvtK-SmqUSSA1gMuihipAb6zV0E-y/view?usp=sharing"
                            target='_blank'
                            rel='noopener noreferrer'
                            className="inline-block bg-gray-950 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 rounded-full text-lg lg:text-lg font-semibold transition duration-300 transform hover:scale-105">Download CV</a>
                    </div>
                </div>
                {/* Right side */}
                <div className=" flex justify-center md:justify-end">
                    <img
                        src={ProfileImg}
                        alt="Debabrata Das"
                        className=" xl:max-h-[500px] xl:max-w-[500px] max-w-[450px] max-h-[450px] md:max-h-[300px] rounded-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Hero