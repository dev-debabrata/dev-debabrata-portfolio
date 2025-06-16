import React, { useEffect, useState } from 'react';
import { assets, NavbarMenu } from '../data';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // Check scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(sectionId);
    }


    return (
        <nav className={`fixed top-0 w-full z-999 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScrolled ? "bg-[#131379b8] text-white bg-opacity-50 backdrop-blur-md shadow-xl" : "bg-transpa bg-[#3b5bdb] text-white"
            } `}>
            <div className="flex justify-between relative items-center my-4 lg:my-4 md:my-4">

                <a
                    href="#"
                    className="flex justify-center items-center cursor-pointer">
                    <img src={assets.Logo} alt="" className=" w-15 " />
                    <h2 className=" text-lg font-bold">Debabrata Das</h2>
                </a>

                {/* Destop menu */}
                <div>
                    <ul className=" hidden md:flex items-center gap-1 md:gap-0 lg:gap-1">
                        {NavbarMenu.map((item) => (
                            <li key={item.id} className={`cursor-pointer hover:text-black ${activeSection === item.id ? " text-black" : ""
                                }`}>
                                <a
                                    href={item.link}
                                    onClick={() => handleMenuItemClick(item.id)}
                                    className="inline-block text-base font-semibold py-2 px-4 md:px-2 lg:px-4 uppercase" >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social media icons */}
                <div className=" hidden md:flex justify-center items-center gap-4">
                    <a
                        href="https://github.com/dev-debabrata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-black">
                        <FaGithub size={45} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debabrata-das-01b371152/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-black">
                        <FaLinkedin size={45} />
                    </a>
                </div>
                {/* Mobile menu icons */}
                <div className=" md:hidden">
                    {isOpen ? (<MdClose className="text-3xl cursor-pointer"
                        onClick={() => setIsOpen(false)} />
                    ) : (<MdMenu className="text-3xl cursor-pointer"
                        onClick={() => setIsOpen(true)} />
                    )}
                </div>
                {/* Mobile Menu Items */}
                {isOpen && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414bd] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
                            {NavbarMenu.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
                                >
                                    <a
                                        href={item.link}
                                        onClick={() => handleMenuItemClick(item.id)}
                                        className="inline-block text-base font-semibold py-2 px-4 uppercase" >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/dev-debabrata"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#212529]">
                                    <FaGithub size={28} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/debabrata-das-01b371152/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#212529]">
                                    <FaLinkedin size={28} />
                                </a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar