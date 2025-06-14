import React from 'react'
import ProfileImg from "../assets/profile.png";

const About = () => {
    return (
        <section
            id="about"
            className="px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans lg:scroll-mt-18 scroll-mt-16 mt-20 md:mt-24 lg:my-20">
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
                            src={ProfileImg} alt="Debabrata Das" className=" max-w-full object-cover md:w-[500px] md:h-[200px]" />
                    </div>
                    {/* Right side */}
                    <div className=" flex flex-col gap-5 text-[20px]">
                        <p>
                            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                        </p>
                        <p>
                            My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                        </p>
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