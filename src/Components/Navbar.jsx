import React, { useEffect, useState } from 'react';
import { assets, NavbarMenu } from '../data';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import { useNavigate, useLocation, Link } from 'react-router-dom';




const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Change navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuItemClick = (item) => {
        setActiveSection(item.id);
        setIsOpen(false);

        if (item.type === "route") {
            navigate(`/${item.id}`);
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    scrollToSection(item.id);
                }, 300);
            } else {
                scrollToSection(item.id);
            }
        }
    };
    // Scroll section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-999 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScrolled ? "bg-[#131379b8] text-white bg-opacity-50 backdrop-blur-md shadow-xl" : "bg-transpa bg-[#3b5bdb] text-white"
            } `}>
            <div className="flex justify-between relative items-center my-3">
                <Link
                    to="/home"
                    className="flex justify-center gap-2 items-center cursor-pointer">
                    <img
                        src={assets.Logo}
                        alt="Logo"
                        className=" w-10 invert brightness-200" />
                    <h2 className=" text-xl font-bold">Debabrata Das</h2>
                </Link>
                {/* Destop menu */}
                <div>
                    <ul className=" hidden md:flex items-center gap-1 md:gap-0 lg:gap-1">
                        {NavbarMenu.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-black ${activeSection === item.id ? " text-black" : ""
                                    }`}>

                                <button onClick={() => handleMenuItemClick(item)}
                                    className="inline-block cursor-pointer text-base font-semibold py-2 px-4 md:px-2 lg:px-4 uppercase">
                                    {item.title}
                                </button>
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
                        <FaGithub size={35} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debabrata-das-01b371152/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-black">
                        <FaLinkedin size={35} />
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
                                    <button onClick={() => handleMenuItemClick(item)}
                                        className="inline-block cursor-pointer text-base font-semibold py-2 px-4 md:px-2 lg:px-4 uppercase">
                                        {item.title}
                                    </button>
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










// For resource
//////////////////////////////////////
{/* <a
                    href="#"
                    className="flex justify-center items-center cursor-pointer">
                    <img
                        src={assets.Logo}
                        alt="Logo"
                        className=" w-15 " />
                    <h2 className=" text-lg font-bold">Debabrata Das</h2>
                </a> */}