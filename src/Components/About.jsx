import React, { useState, useEffect, useRef } from "react";
import { assets, iconInfoData, tabContent, tabs } from '../data';


const About = () => {

    const tabRef = useRef(null);
    const [tabWidth, setTabWidth] = useState(0);
    const [activeTab, setActiveTab] = useState(0); // Now using index (number)

    const updateWidth = () => {
        if (tabRef.current) {
            const parentWidth = tabRef.current.getBoundingClientRect().width;
            const numberOfTabs = tabs.length;
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


    const activeData = tabContent[tabs[activeTab].id];

    return (
        <section
            id="about"
            className="px-[4%] md:py-20 lg:py-20 xl:py-20 md:px-[7.5%] lg:px-[10%] xl:px-[10%] font-sans dark:bg-slate-950">
            {/* lg:scroll-mt-6.5 md:scroll-mt-4.5 scroll-mt-10 */}
            <div className="flex flex-col justify-center items-center" >
                {/* About title */}
                <div className="relative">
                    <h1 className=" text-3xl md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold dark:text-gray-300">
                        About me
                    </h1>
                    <div className=" w-25 md:w-35 lg:w-35 xl:w-35 h-1 bg-blue-600 mx-auto mt-2"></div>
                </div>
                {/* About section */}
                <div className=" bg-[#edf2ff] dark:bg-slate-900 p-8 md:p-10 lg:p-10 xl:p-10 rounded-2xl flex flex-col mt-5 md:flex-row justify-between items-center gap-10">
                    <div>
                        <img src={assets.AboutImg} alt="About" className=" max-w-[300px] md:max-w-[350px] lg:max-w-[350px] xl:max-w-[350px] rounded-2xl" />
                    </div>
                    <div className=" flex flex-col items-start">
                        <p className=" xl:text-lg dark:text-gray-400">
                            Hello! I'm Debabrata Das, a B-Tech student in Computer Science and Engineering with a strong passion for technology, programming, and problem-solving. I enjoy exploring various areas of computer science including web development, database management, and algorithms. I'm currently building a solid foundation in both theoretical and practical aspects of computing.
                        </p>
                        {/* Icons */}
                        <div className="mt-4">
                            {iconInfoData.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        className="flex items-center gap-x-4 mt-1 mx-auto xl:mx-0"
                                        key={index}>
                                        <div className=" text-blue-700 text-primary "><Icon size={20} /></div>
                                        <div className=" dark:text-gray-200">{item.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>







                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*Educations and Skills section */}
                <div className="w-full bg-[#edf2ff] dark:bg-slate-900 p-8 md:p-10 lg:p-10 xl:p-10 rounded-2xl mt-10 flex flex-col items-center">
                    {/* Tab Buttons */}
                    <div
                        ref={tabRef}
                        className="xl:w-[40%] w-[80%] mx-auto flex items-center justify-between relative rounded-full dark:bg-slate-300 bg-white p-1 mb-10"
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={`relative cursor-pointer py-3 text-sm md:text-xl lg:text-xl xl:text-xl font-semibold transition-colors duration-300 z-10 ${activeTab === index ? 'text-white' : 'text-gray-700 dark:text-black'}`}
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

                    {/* Tab Content */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full max-w-10xl">
                        <div className="flex flex-col gap-4 w-full lg:w-1/2">
                            {activeData.data.map((item, index) => (
                                <div key={index} className="pb-2 border-b">
                                    {tabs[activeTab].id === "tab1" ? (
                                        <div className=" mb-2 items-center">
                                            <h3 className="text-2xl font-semibold mb-2 dark:text-gray-300">{item.title}</h3>
                                            {/* <p className="text-gray-700 p-4 rounded-2xl inline-block bg-blue-200 text-[16px]">{item.list}</p> */}
                                            <div className="flex flex-wrap gap-2">
                                                {item.list.split(",").map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-300 dark:bg-gray-700 text-gray-200 text-sm px-3 py-1.5 rounded-md"
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-center">
                                            <div className=" mb-2">
                                                <h3 className="text-[20px] font-semibold dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.school }} />
                                                <p className="text-gray-700 dark:text-gray-400">{item.qualification}</p>
                                            </div>
                                            <div className="text-right flex flex-col items-end">
                                                {item.icon && <item.icon size={20} className="text-gray-500 mb-2" />}
                                                <p className="text-gray-500 dark:text-gray-400 text-[15px]">{item.years}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center items-center w-full lg:w-1/2">
                            <img
                                src={activeData.image}
                                alt={tabs[activeTab].title}
                                className="xl:max-w-[495px] rounded-2xl max-w-[350px]"
                            />
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default About




// For resource
/////////////////////////////////////////


// const getData = (arr, title) => {
//     return arr.find((item) => item.title === title);
// };
// const tabRef = useRef(null);
// const [tabWidth, setTabWidth] = useState(0);
// const [activeTab, setActiveTab] = useState("tab1")


// const updateWidth = () => {
//     if (tabRef.current) {
//         const parentWidth = tabRef.current.getBoundingClientRect().width;
//         const numberOfTabs = tabs.length;
//         const newTabWidth = parentWidth / numberOfTabs;
//         setTabWidth(newTabWidth);
//     }
// };

// useEffect(() => {
//     const resizeObserver = new ResizeObserver(updateWidth);
//     if (tabRef.current) {
//         resizeObserver.observe(tabRef.current);
//     }
//     return () => {
//         if (tabRef.current) {
//             resizeObserver.unobserve(tabRef.current);
//         }
//     };
// }, [tabs.length]);

// const activeData = tabContent[tabs[activeTab].id];



// useEffect(() => {
//     updateWidth(); // set initial width
//     const resizeObserver = new ResizeObserver(updateWidth);
//     if (tabRef.current) {
//         resizeObserver.observe(tabRef.current);
//     }
//     return () => {
//         if (tabRef.current) {
//             resizeObserver.unobserve(tabRef.current);
//         }
//     };
// }, [tabs.length]);


// <div div className = " flex w-full justify-around mt-20" >
//     <div className="flex flex-col items-center gap-2.5 transition">
//         <h1 className="text-[60px] font-bold bg-clip-text">0+</h1>
//         <p>FRESHER</p>
//     </div>
//     <hr />
//     <div className="flex flex-col items-center gap-2.5 transition">
//         <h1 className="text-[60px] font-bold bg-clip-text">10+</h1>
//         <p>PROJECTS COMPLETED</p>
//     </div>
//     <hr />
//     <div className="flex flex-col items-center gap-2.5 transition">
//         <h1 className="text-[60px] font-bold bg-clip-text">80%</h1>
//         <p>SKILLS ACHIVE</p>
//     </div>
// </div>

