import React from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section
            id='projects'
            className=" flex flex-col md:justify-center md:items-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center gap-10 my-20 mx-[10%]">
            <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold px-8">Projects</h1>
                <div className=" w-25 md:w-35 lg:w-35 xl:w-35 h-1 bg-blue-600 mx-auto mt-3"></div>
            </div>
        </section>
    )
}

export default Projects