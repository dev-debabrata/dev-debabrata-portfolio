import React, { useState } from 'react'
import AboutImg from "../assets/about.png";
import { iconInfoData, tabContent, tabs } from '../data';


const About = () => {

    // const getData = (arr, title) => {
    //     return arr.find((item) => item.title === title);
    // };
    const [activeTab, setActiveTab] = useState("tab1")

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
                <div className="flex justify-between items-center gap-10">
                    <div>
                        <img src={AboutImg} alt="About" className=" max-w-[350px]" />
                    </div>
                    <div className="">
                        <p className=" text-lg">
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
                <div className="mt-5">
                    <div className=" flex relative rounded-full relativ bg-blue-600 items-center justify-center w-[80%] mx-auto xl:max-w-[300px] xl:border ">
                        {tabs.map((tab) => (
                            <button key={tab.id} className={` text-sm px-4 py-4 font-semibold ${activeTab === tab.id ? " text-white " : " cursor-pointer hover:text-blue-600"}`} onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                            </button>
                        ))}
                        <div />
                    </div>
                    {/* Tab Data section */}
                    <div className=" flex justify-between gap-20 mt-12 items-center">
                        {/* <h2 className="text-2xl font-semibold mb-4">{tabContent[activeTab].title}</h2> */}
                        <div className=" flex flex-col gap-5">
                            {tabContent[activeTab].data.map((item, index) => (
                                <div key={index} className="pb-5 border-b">
                                    {activeTab === "tab1" ? (
                                        <div className=" flex flex-row gap-3 mb-7 items-center">
                                            <div>
                                                <h3 className=" text-2xl font-semibold">{item.title}</h3>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-[16px]">{item.list}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className=" relative flex flex-row items-center justify-between">
                                            {/* Education section */}
                                            <div className=" space-y-2">
                                                <h3 className="text-[25px] font-semibold"><span dangerouslySetInnerHTML={{ __html: item.school }} /></h3>
                                                <p className="text-gray-700">{item.qualification}</p>
                                            </div>
                                            <div className=" flex flex-col gap-5 items-end">
                                                <div>
                                                    {item.icon && <item.icon size={25} className=" text-gray-500" />}
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-[15px]">
                                                        {item.years}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src={tabContent[activeTab].image}
                                alt={activeTab === "tab1" ? "Skills" : "Education"}
                                className="max-w-[495px]"
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









