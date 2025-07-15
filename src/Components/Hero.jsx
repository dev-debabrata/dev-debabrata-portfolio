import React from 'react'
import { TbDownload } from 'react-icons/tb';
import { FiSend } from 'react-icons/fi';
import { assets } from '../data';



const Hero = () => {
    return (
        <section
            id="home"
            className="bg-[#edf2ff] dark:bg-gray-950 py-12 pt-25 px-[7vw] md:px-[7vw] lg:px-[10vw] ">
            <div className="flex xl:flex flex-col-reverse xl:gap-12 md:gap-10 gap-5 md:flex-row justify-between items-center my-2">
                {/* Left side */}
                <div className="text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h2 className="text-2xl text-blue-600 font-semibold">Hi, I'm</h2>
                    <h1 className=" text-3xl sm:text-5xl md:text-4xl lg:text-7xl font-extrabold mt-2 dark:text-gray-300">Debabrata Das</h1>
                    <h2 className="text-3xl font-bold text-blue-600 mt-2 ">frontend developer.</h2>
                    <p className=" text-sm md:text-sm lg:text-[18px] mt-2 dark:text-gray-400">I am a frontent developer from Kolkata. I have a many project bulid in react.</p>
                    <div className=" space-x-1 md:space-x-2 lg:space-x-4 mt-5">
                        <a
                            href="#contact"
                            className="inline-flex justify-center items-center gap-3 bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 lg:text-lg rounded-full text-sm font-semibold transition duration-300 transform hover:scale-105">
                            Contact Me
                            <FiSend />
                        </a>
                        <a
                            href="/resume/DebabrataResume.pdf"
                            download
                            target='_blank'
                            rel='noopener noreferrer'
                            className=" inline-flex justify-center items-center gap-3 bg-gray-950 dark:bg-gray-900 hover:dark:bg-gray-800 text-white py-3 px-8 md:px-6 md:text-sm lg:px-8 rounded-full text-sm lg:text-lg font-semibold transition duration-300 transform hover:scale-105">
                            Download CV
                            <TbDownload size={20} />
                        </a>
                    </div>
                </div>
                {/* Right side photo */}
                <div className=" flex justify-center md:justify-end">
                    <img
                        src={assets.ProfileImg}
                        alt="Debabrata Das"
                        className=" xl:max-h-[450px] xl:max-w-[450px] max-w-[400px] max-h-[400px] md:max-h-[300px] rounded-full object-cover" />
                </div>
            </div>
        </section >
    )
}

export default Hero