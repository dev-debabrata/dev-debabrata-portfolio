import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {

    // Smooth scroll function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <footer className=" bg-[#3b5bdb] px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans pt-12 pb-8 text-white">
            <div className=" container mx-auto text-center">
                <h2 className="text-2xl font-semibold">Debabrata Das</h2>

                {/* Navigation Links - Responsive */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        { name: "Home", id: "home" },
                        { name: "About", id: "about" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "projects" },
                        { name: "Contact", id: "contact" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="hover:text-blue-500 cursor-pointer xl:text-[18px] text-sm sm:text-base my-1"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
                {/* Social Media Icons - Responsive */}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        { icon: <FaFacebook size={25} />, link: "https://www.facebook.com/devmrjooker" },
                        { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/in/debabrata-das-01b371152/" },
                        { icon: <FaGithub size={25} />, link: "https://github.com/dev-debabrata" },
                        { icon: <FaXTwitter size={25} />, link: "https://x.com/Debabrata_Das_" },
                        { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/debabrata_das30/" },


                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-500 transition-transform transform hover:scale-110"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                {/* Copyright text */}
                <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
                    &copy; 2025 Debabrata Das. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer