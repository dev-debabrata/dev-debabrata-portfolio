import React from 'react'
import AboutImg from "../assets/about.png";
import { MdMailOutline } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { infoData } from '../data';

const tabs = [
    { id: "tab1", label: "Personal Info" },
    { id: "tab2", label: "Education" },
]



const qualificationData = [
    {
        title: "Education",
        data: [
            {
                school: "Nupat Technology, Lagos",
                qualification: "Software Development",
                years: "2022 - 2023",
            },
            {
                school: "Lagos State University, Lagos",
                qualification: "BSC",
                years: "2017 - 2022",
            },
        ],
    },
];

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
                <div className="mt-10 gap-20 flex flex-col-reverse md:flex-row justify-between items-center">
                    {/* Left side */}
                    <div>
                        <img
                            src={AboutImg} alt="Debabrata Das" className=" max-w-[200px] object-cover md:w-[500px] md:h-[200px]" />
                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <div defaultValue="Personal">
                            <div className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <button className="w-[162px] xl:w-auto" value="Personal">
                                    Personal Info
                                </button>
                                <button
                                    className="w-[162px] xl:w-auto"
                                    value="Qualifications"
                                >
                                    Qualifications
                                </button>
                                <button className="w-[162px] xl:w-auto" value="Skills">
                                    Skills
                                </button>
                            </div>
                            {/* Tab Content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* Personal Tab */}
                                <div value="Personal">
                                    <div className="text-center xl:text-left">
                                        <p className="subtitle max-w-x mx-auto xl:mx-0">
                                            Hey there! I’m a web developer who’s all about blending
                                            creativity with innovative technology to create engaging
                                            online experiences. With a toolkit that includes
                                            JavaScript, TypeScript, Next.js, and TailwindCSS, I’ve
                                            helped companies create intuitive interfaces, seamless
                                            user experiences, and high-quality, responsive
                                            applications. <br />
                                            But let’s be real {""}
                                            <span className="text-[#e6f0ff] font-medium">
                                                what truly sets me apart
                                            </span>{" "}
                                            is my passion for excellence and user-focused design. For
                                            me, it’s not just about writing clean code, it’s about
                                            delivering a product that doesn’t just work but wows.
                                        </p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            When I’m not coding, you’ll find me devouring books,
                                            exploring the latest in tech, or binge-watching a new
                                            series. Curious about my work? Let’s connect and create
                                            something awesome together!
                                        </p>
                                        {/* Icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div className="text-primary "><MdMailOutline size={20} /></div>
                                                        <div className="text-primary "><FiMapPin size={20} /></div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Qualifications Tab */}
                                <div value="Qualifications">
                                    <div className="">
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Journey
                                        </h3>
                                        {/* Experience and Education */}

                                    </div>
                                </div>

                                {/* Skills Tab */}
                                <div value="Skills">
                                    <div className="text-center xl:text-left">
                                        {/* <h4 className="h3 mb-8">Tools I use Daily</h4> */}
                                        <h4 className="h3 mb-8">Experience Tools</h4>
                                        <div className="mb-16">
                                            {/* Skills */}
                                            <h4 className="text-xl font-semibold mb-2">
                                                Skills/Technologies
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>

                                            {/* Skill List */}

                                        </div>

                                        {/* Tools */}
                                        <div>
                                            <h4 className="text-4xl font-semibold mb-2 xl:text-left">
                                                Tools
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* Tools List */}

                                        </div>
                                    </div>
                                </div>
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