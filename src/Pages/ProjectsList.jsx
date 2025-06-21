import React, { useState, useEffect, useRef } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { projectListData, projectsTabs } from "../data";
import { useLocation } from "react-router-dom";

const ProjectsList = () => {
    const { pathname } = useLocation();
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

        const tabElement = tabRef.current; // ✅ Capture the current value
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

    // scroll to top of page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    // Project data render
    const activeTitle = projectsTabs[activeTab].id;

    const filteredProjects = activeTitle === "allprojects"
        ? projectListData
        : projectListData.filter(project => project.title === activeTitle);

    return (
        <>
            <Navbar />
            <section id="projectlist"
                className="min-h-screen pt-12  my-15 mx-[4%] md:my-20 lg:my-20 xl:my-20 md:mx-[7.5%] lg:mx-[10%] xl:mx-[10%]">
                <div >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold section-title  text-center mx-auto">My Projects</h1>
                    <div className=" w-30 md:w-50 lg:w-50 xl:w-52 h-1 bg-blue-600 mx-auto mt-3 mb-8 xl:mb-12"></div>
                </div>
                <div className=" bg-blue-50 p-8 rounded-2xl">
                    <div>
                        {/* Tab Buttons */}
                        {/* Destop slider */}
                        <div
                            ref={tabRef}
                            className=" hidden xl:w-[80%] mx-auto md:flex items-center justify-between relative rounded-full bg-[#e9ecef] p-1 mb-10"
                        >
                            {projectsTabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    className={`relative cursor-pointer py-3  md:text-sm lg:text-[18px] xl:text-[18px] font-semibold transition-colors duration-300 z-10 ${activeTab === index ? 'text-white' : 'text-gray-700'}`}
                                    style={{ width: tabWidth }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}

                            {/* Animated slider */}
                            <div
                                className="absolute top-0 left-0 h-full rounded-full bg-blue-600 transition-all duration-300 z-0"
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
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "bg-transparent text-gray-700"
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
                            <div key={index} className="bg-gray-100 rounded-xl p-6 shadow-xl">
                                <h3 className=" uppercase px-3 py-1 text-whi bg-gray-300 inline-block border-none rounded-xl mb-2">{project.title}</h3>
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                <div className=" flex gap-15 justify-center items-center">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 border-none text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={project.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border-none bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105"
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




