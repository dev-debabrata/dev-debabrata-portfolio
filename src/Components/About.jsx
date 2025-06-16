import React, { useState, useEffect, useRef } from "react";
import { assets, iconInfoData, tabContent, tabs } from '../data';


const About = () => {

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
        updateWidth(); // set initial width
        const resizeObserver = new ResizeObserver(updateWidth);
        if (tabRef.current) {
            resizeObserver.observe(tabRef.current);
        }
        return () => {
            if (tabRef.current) {
                resizeObserver.unobserve(tabRef.current);
            }
        };
    }, [tabs.length]);

    const activeData = tabContent[tabs[activeTab].id];

    return (
        <section
            id="about"
            className="px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans lg:scroll-mt-6.5 md:scroll-mt-4.5 scroll-mt-10 mt-20 md:mt-8 lg:mt-10">
            <div className="flex flex-col justify-center items-center" >
                {/* About title */}
                <div className="relative">
                    <h1 className=" text-5xl font-semibold">About me</h1>
                </div>
                {/* About section */}
                <div className="flex xl:flex flex-col mt-5 md:flex-row justify-between items-center gap-10">
                    <div>
                        <img src={assets.AboutImg} alt="About" className=" max-w-[350px]" />
                    </div>
                    <div className="">
                        <p className=" xl:text-lg">
                            Hello! I'm Debabrata Das, a B-Tech student in Computer Science and Engineering with a strong passion for technology, programming, and problem-solving. I enjoy exploring various areas of computer science including web development, database management, and algorithms. I'm currently building a solid foundation in both theoretical and practical aspects of computing.
                        </p>
                        {/* Icons */}
                        <div className=" grid grid-rows-2 gap-2 mt-4">
                            {iconInfoData.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                        key={index}
                                    >
                                        <div className="text-primary "><Icon size={20} /></div>
                                        <div>{item.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                {/*Educations and Skills section */}
                <div className="w-full px-4 mt-10 flex flex-col items-center">
                    {/* Tab Buttons */}
                    <div
                        ref={tabRef}
                        className="xl:w-[40%] w-[80%] mx-auto flex items-center justify-between relative rounded-full bg-gray-200 p-1 mb-10"
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={`relative cursor-pointer py-3 text-sm font-semibold transition-colors duration-300 z-10 ${activeTab === index ? 'text-white' : 'text-gray-700'}`}
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

                    {/* Tab Content */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full max-w-10xl">
                        <div className="flex flex-col gap-5 w-full lg:w-1/2">
                            {activeData.data.map((item, index) => (
                                <div key={index} className="pb-5 border-b">
                                    {tabs[activeTab].id === "tab1" ? (
                                        <div className="flex flex-row gap-3 mb-2 items-center">
                                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                                            <p className="text-gray-700 text-[16px]">{item.list}</p>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-center">
                                            <div className=" mb-2">
                                                <h3 className="text-[20px] font-semibold" dangerouslySetInnerHTML={{ __html: item.school }} />
                                                <p className="text-gray-700">{item.qualification}</p>
                                            </div>
                                            <div className="text-right flex flex-col items-end">
                                                {item.icon && <item.icon size={20} className="text-gray-500 mb-2" />}
                                                <p className="text-gray-500 text-[15px]">{item.years}</p>
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
                                className="xl:max-w-[495px] max-w-[350px]"
                            />
                        </div>
                    </div>
                </div>


                <div className=" flex w-full justify-around mt-20">
                    <div className="flex flex-col items-center gap-2.5 transition">
                        <h1 className="text-[60px] font-bold bg-clip-text">0+</h1>
                        <p>FRESHER</p>
                    </div>
                    <hr />
                    <div className="flex flex-col items-center gap-2.5 transition">
                        <h1 className="text-[60px] font-bold bg-clip-text">10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="flex flex-col items-center gap-2.5 transition">
                        <h1 className="text-[60px] font-bold bg-clip-text">80%</h1>
                        <p>SKILLS ACHIVE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About









