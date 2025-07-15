import React, { useState, useEffect, useRef } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { projectListData, projectsTabs } from "../data";
import { useLocation } from "react-router-dom";

const ProjectsList = () => {
    const { pathname } = useLocation();
    const projectListRef = useRef(null);
    const tabRef = useRef(null);
    const [tabWidth, setTabWidth] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    const updateWidth = () => {
        if (tabRef.current) {
            const parentWidth = tabRef.current.getBoundingClientRect().width;
            const numberOfTabs = projectsTabs.length;
            const newTabWidth = parentWidth / numberOfTabs;
            setTabWidth(newTabWidth);
        }
    };

    useEffect(() => {
        updateWidth();

        const tabElement = tabRef.current;
        const resizeObserver = new ResizeObserver(updateWidth);

        if (tabElement) {
            resizeObserver.observe(tabElement);
        }

        return () => {
            if (tabElement) {
                resizeObserver.unobserve(tabElement);
            }
        };
    }, []);

    // scroll to top of page
    useEffect(() => {
        if (projectListRef.current) {
            projectListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);

    // Project data render
    const activeTitle = projectsTabs[activeTab].id;

    const filteredProjects = activeTitle === "allprojects"
        ? projectListData
        : projectListData.filter(project => project.title === activeTitle);

    return (
        <>
            <Navbar />
            <section
                ref={projectListRef}
                id="projectlist"
                className=" dark:bg-slate-950 min-h-screen mt-16 px-[4%] md:py-20 lg:py-20 xl:py-20 md:px-[7.5%] lg:px-[10%] xl:px-[10%]">
                <div >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold section-title  text-center mx-auto">My Projects</h1>
                    <div className=" w-30 md:w-50 lg:w-50 xl:w-52 h-1 bg-blue-600 mx-auto mt-3 mb-8 xl:mb-12"></div>
                </div>
                <div className=" bg-[#edf2ff] dark:bg-slate-900 p-8 rounded-2xl">
                    <div>
                        {/* Tab Buttons */}
                        {/* Destop slider */}
                        <div
                            ref={tabRef}
                            className=" hidden xl:w-[80%] mx-auto md:flex items-center justify-between relative rounded-full dark:bg-slate-300 bg-white p-1 mb-10"
                        >
                            {projectsTabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    className={`relative cursor-pointer py-3 md:text-sm lg:text-[18px] xl:text-[18px] font-semibold transition-colors duration-300 z-10 ${activeTab === index ? 'text-white' : 'text-gray-700 dark:text-black'}`}
                                    style={{ width: tabWidth }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}

                            {/* Animated slider */}
                            <div
                                className="absolute top-0 left-0 h-full rounded-full bg-blue-600 dark:bg-gray-950 transition-all duration-300 z-0"
                                style={{
                                    width: `${tabWidth}px`,
                                    transform: `translateX(${activeTab * tabWidth}px)`,
                                }}
                            />
                        </div>
                        {/* {/* Mobile: Vertical Buttons */}
                        <div className="flex flex-col gap-4 items-center md:hidden">
                            {projectsTabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-[40%] py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === index
                                        ? "bg-blue-600 dark:bg-gray-950 text-white shadow-md"
                                        : "bg-transparent dark:text-gray-200 text-gray-700"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Render Project Info */}
                    <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="bg-gray-100 dark:bg-slate-950 rounded-2xl p-6 shadow-2xl overflow-hidden backdrop-blur-md hover:shadow-blue-800/50 hover:-translate-y-2 transition-transform duration-300">
                                <h3 className=" text-base font-semibold uppercase px-3 py-1 bg-gray-300 dark:bg-slate-800 inline-block border-none rounded-xl mb-2">{project.title}</h3>
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl dark:text-gray-100 font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>

                                <div className=" flex justify-between items-center">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 dark:bg-slate-900 border-none text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 hover:dark:bg-slate-800 transition duration-300 transform hover:scale-105"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={project.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border-none bg-blue-600 dark:bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 hover:dark:bg-slate-800 transition duration-300 transform hover:scale-105"
                                    >
                                        View Live
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProjectsList



// For resource
////////////////////////////////////////////
// useEffect(() => {
//     updateWidth();
//     const resizeObserver = new ResizeObserver(updateWidth);
//     if (tabRef.current) {
//         resizeObserver.observe(tabRef.current);
//     }
//     return () => {
//         if (tabRef.current) {
//             resizeObserver.unobserve(tabRef.current);
//         }
//     };
// }, [projectsTabs.length]);



// useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }, [pathname]);
// useEffect(() => {
//     window.scrollTo(0, 0);
// }, [pathname]);
