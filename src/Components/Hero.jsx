import React from 'react'
import ProfileImg from "../assets/profile.png";
import Contact from './Contact';
import { TbDownload } from 'react-icons/tb';
import { FiSend } from 'react-icons/fi';

const Hero = () => {
    return (
        <section
            id="home"
            className=" bg-blue-100 py-22 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-20 md:mt-20.5 lg:mt-20.5 ">
            <div className="flex xl:flex flex-col-reverse gap-12 md:flex-row justify-between items-center">
                {/* Left side */}
                <div className="text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h2 className="text-2xl text-blue-600 font-semibold">Hi, I'm</h2>
                    <h1 className=" text-3xl sm:text-5xl md:text-4xl lg:text-7xl font-extrabold mt-2">Debabrata Das</h1>
                    <h2 className="text-3xl font-bold text-blue-600 mt-2 ">frontend developer.</h2>
                    <p className=" text-sm md:text-sm lg:text-[18px] mt-2">I am a frontent developer from Kolkata. I have a meny project bulid in react.</p>
                    <div className=" space-x-4 md:space-x-2 lg:space-x-4 mt-5">
                        <a
                            href="Contact"
                            className="inline-flex justify-center items-center gap-3 bg-blue-600 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 lg:text-lg rounded-full text-[15px] font-semibold transition duration-300 transform hover:scale-105">
                            Contact Me
                            <FiSend />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/13V4SvtK-SmqUSSA1gMuihipAb6zV0E-y/view?usp=sharing"
                            target='_blank'
                            rel='noopener noreferrer'
                            className=" inline-flex justify-center items-center gap-3 bg-gray-950 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 rounded-full text-[15px] lg:text-lg font-semibold transition duration-300 transform hover:scale-105">
                            Download CV
                            <TbDownload size={20} />
                        </a>
                    </div>
                </div>
                {/* Right side photo */}
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