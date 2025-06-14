import React from 'react'
import AboutImg from "../assets/about.png";
import SkillsImg from "../assets/skills.png";
import EducationsImg from "../assets/educations.png";
import { infoData } from '../data';


const tabs = [
    { id: "tab1", label: "Personal Info" },
    { id: "tab2", label: "Education" },
]




const skillsData = [
    {
        title: "Skills",
        data: [
            {
                title: "Markup Languages",
                list: "HTML",
            },
            {
                title: "Styles",
                list: "CSS3, Tailwind, SCSS",
            },
            {
                title: "Programming Languages",
                list: "JavaScript, Typescript",
            },
            {
                title: "Frameworks",
                list: "Next.js, React, Svelte, React Native, Expo",
            },
            {
                title: "Version Control",
                list: "Git, GitHub ",
            },
        ],
    },
    {
        title: "Tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
                title: "VS Code",
            },
            {
                imgPath: "/about/figma.svg",
                title: "Figma",
            },
        ],
    },
];




const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

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
                            {infoData.map((item, index) => {
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
                    <div>
                        <div className=" flex items-center justify-between gap-20 ">
                            <button className="text-[24px] font-semibold transition duration-300 transform hover:scale-105 rounded-full inline-flex justify-center items-center bg-amber-600 py-3 px-8">
                                Skills
                            </button>
                            <button>
                                Educations
                            </button>
                        </div>
                        <div>
                            <div>
                                <img src={SkillsImg} alt="" className="max-w-[300px]" />
                            </div>
                            <div>
                                <p>

                                </p>
                            </div>
                            <div>
                                <img src={EducationsImg} alt="" className="max-w-[300px]" />
                            </div>
                            <div>
                                <p>

                                </p>
                            </div>
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









