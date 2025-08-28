import React, { useEffect, useState } from 'react';
import { assets, NavbarMenu } from '../data';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { SiLeetcode } from 'react-icons/si';
import ThemeToggler from './ThemeToggler';


// bg - [#3b5bdb]

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Set active section based on route path
    useEffect(() => {

        const routeMatch = NavbarMenu.find(
            item => item.type === 'route' && location.pathname === `/${item.id}`
        );

        if (routeMatch) {
            setActiveSection(routeMatch.id);
        } else if (location.pathname === '/' || location.pathname === '') {
            setActiveSection('home');
        }
    }, [location]);

    // Handle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ScrollSpy: update active section on scroll (only on home page)
    useEffect(() => {
        if (location.pathname !== '/') return;

        const handleScrollSpy = () => {
            const activeItem = NavbarMenu
                .filter(item => item.type === 'scroll')
                .map(item => {
                    const el = document.getElementById(item.id);
                    if (!el) return null;
                    const top = el.getBoundingClientRect().top;
                    return { id: item.id, top: Math.abs(top) };
                })
                .filter(Boolean)
                .sort((a, b) => a.top - b.top)[0];

            if (activeItem) {
                setActiveSection(activeItem.id);
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy(); // Trigger on mount
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [location]);

    // Handle click on menu item
    const handleMenuItemClick = (item) => {
        setActiveSection(item.id);
        setIsOpen(false);

        if (item.type === 'route') {
            navigate(`/${item.id}`);
        } else if (item.type === 'scroll') {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToSection(item.id), 300);
            } else {
                scrollToSection(item.id);
            }
        }
    };

    // Smooth scroll to section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <nav className={`fixed top-0 w-full z-999 transition duration-300 px-[4vw] md:px-[7vw] lg:px-[8vw] xl:px-[8vw]  ${isScrolled ? "bg-[#8d8d9920] dark:bg-[#0000006d] dark:text-gray-50 text-whi bg-opacity-50 backdrop-blur-md shadow-xl" : " text-gray-900 dark:bg-slate-950 dark:text-gray-100 bg-[#f8f9fa]"
            } `}>
            <div className="flex justify-between relative items-center my-4.5">
                {/* <Link
                    to="/home"
                    className="flex justify-center gap-2 items-center cursor-pointer">
                    <img
                        src={assets.Logo}
                        alt="Logo"
                        className=" w-10 invert brightness-200" />
                    <h2 className=" text-xl font-medium italic md:text-[24px] lg:font-bold">Debabrata Das</h2>
                </Link> */}
                <a
                    href="/"
                    className="text-xl font-medium italic md:text-[24px] lg:text-3xl xl:text-3xl lg:font-bold"
                >
                    <span className="bg-gradient-to-r from-black dark:from-white dark:via-gray-200 via-gray-500 bg-clip-text text-transparent to-purple-400 undefined">
                        &lt;Debabrata
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600 undefined">
                        Das /&gt;
                    </span>
                </a>


                {/* Destop menu */}
                <div>
                    <ul className="hidden md:flex items-center gap-1 md:gap-0 lg:gap-1">
                        {NavbarMenu.map((item) => (
                            <li
                                key={item.id}
                                className={`group md:text-[14px] lg:text-[18px] ${activeSection === item.id
                                    ? "text-blue-600 dark:text-blue-600 "
                                    : "hover:text-blue-600 hover:dark:text-blue-600"
                                    }`}
                            >
                                <button
                                    onClick={() => handleMenuItemClick(item)}
                                    className="relative inline-block py-2 px-4 md:px-2 lg:px-4 cursor-pointer"
                                >
                                    {item.title}
                                    {/* Animated underline */}
                                    <span
                                        className={`block h-0.5 transition-all duration-500 ${activeSection === item.id
                                            ? 'max-w-full bg-blue-600 dark:bg-blue-600'
                                            : 'max-w-0 group-hover:max-w-full bg-blue-600 dark:bg-blue-600'
                                            }`}
                                    />
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
                        className=" hover:text-blue-600 hover:dark:text-blue-600">
                        <FaGithub className="md:text-[30px] lg:text-[33px]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debabrata-das-01b371152/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-blue-600 hover:dark:text-blue-600">
                        <FaLinkedin className="md:text-[30px] lg:text-[33px]" />
                    </a>
                    {/* <a
                        href="https://leetcode.com/u/leet-debabrata/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-black hover:dark:text-blue-500">
                        <SiLeetcode size={35} />
                    </a> */}
                </div>
                <div className="hidden md:flex lg:flex xl:flex">
                    <ThemeToggler />
                </div>


                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* Mobile menu icons */}
                <div className=" md:hidden flex justify-between items-center gap-4">
                    <ThemeToggler />
                    {isOpen ? (<MdClose className="text-3xl cursor-pointer"
                        onClick={() => setIsOpen(false)} />
                    ) : (<MdMenu className="text-3xl cursor-pointer"
                        onClick={() => setIsOpen(true)} />
                    )}
                </div>
                {/* Mobile Menu Items */}
                {isOpen && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414ad] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
                            {NavbarMenu.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
                                >
                                    <button onClick={() => handleMenuItemClick(item)}
                                        className="inline-block cursor-pointer text-base font-semibold py-2 px-4 md:px-2 lg:px-4">
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/dev-debabrata"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#8245ec]">
                                    <FaGithub size={28} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/debabrata-das-01b371152/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#8245ec]">
                                    <FaLinkedin size={28} />
                                </a>
                                {/* <a
                                    href="https://leetcode.com/u/leet-debabrata/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" hover:text-black">
                                    <SiLeetcode size={28} />
                                </a> */}
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



{/* <ul className=" hidden md:flex items-center gap-1 md:gap-0 lg:gap-1">
                        {NavbarMenu.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-blue-600 md:text-[14px] lg:text-[18px] hover:dark:text-blue-600 ${activeSection === item.id ? " text-blue-600 dark:text-blue-600" : ""
                                    }`}>

                                <button onClick={() => handleMenuItemClick(item)}
                                    className="inline-block cursor-pointer font-semibold py-2 px-4 md:px-2 lg:px-4">
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul> */}





// const [isOpen, setIsOpen] = useState(false);
// const [activeSection, setActiveSection] = useState('');
// const [isScrolled, setIsScrolled] = useState(false);

// const navigate = useNavigate();
// const location = useLocation();

// // Sync active section on route change
// useEffect(() => {
//     const path = location.pathname.replace('/', '') || 'home';
//     setActiveSection(path);
// }, [location]);

// // Change navbar style on scroll
// useEffect(() => {
//     const handleScroll = () => {
//         setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// const handleMenuItemClick = (item) => {
//     setActiveSection(item.id);
//     setIsOpen(false);

//     if (item.type === "route") {
//         navigate(`/${item.id}`);
//     } else {
//         if (location.pathname !== '/') {
//             navigate('/');
//             setTimeout(() => {
//                 scrollToSection(item.id);
//             }, 300);
//         } else {
//             scrollToSection(item.id);
//         }
//     }
// };

// const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// };
