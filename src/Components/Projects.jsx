import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { projectData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };
    const handleCloseModal = () => {
        setSelectedProject(null);
    };


    return (
        <section
            id='projects'
            className="flex flex-col md:justify-center md:items-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center gap-10 my-15 mx-[4%] md:my-20 lg:my-20 xl:my-20 md:mx-[7.5%] lg:mx-[10%] xl:mx-[10%]">
            <div className="relative text-center">
                <h1 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold px-8 dark:text-gray-300">
                    Projects
                </h1>
                <div className=" w-22 md:w-30 lg:w-30 xl:w-30 h-1 bg-blue-600 mx-auto mt-2"></div>
                <p className="text-gray-500 mt-4 text-[16px] dark:text-gray-400">
                    A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
                </p>
            </div>

            {/* Project Section */}

            <div className="bg-[#edf2ff] dark:bg-slate-900 p-8 md:p-10 lg:p-10 xl:p-10 rounded-2xl w-full">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {projectData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div
                                onClick={() => handleOpenModal(project)}
                                className="bg-gray-100 dark:bg-slate-950 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-800/50 hover:-translate-y-2 transition-transform duration-300 p-4"
                            >
                                <h3 className="text-base font-semibold uppercase px-3 py-1 bg-gray-300 dark:bg-slate-800 inline-block border-none rounded-xl mb-2">
                                    {project.title}
                                </h3>
                                <div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mt-5 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-center mt-12 mb-2">
                    <Link
                        to={'/projectslist'}
                        className='inline-block bg-blue-600 dark:bg-blue-800 border-none text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105'>
                        All Projects
                    </Link>
                </div>
            </div>


            {/* Modal container */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 pt-24 flex items-center justify-center bg-black/90 dark:bg-slate-950/70 p-4">
                    <div className="bg-gray-100 dark:bg-slate-900 rounded-xl shadow-2xl lg:w-[50%] xl:w-[80%] w-[80%] max-w-[480px] overflow-hidden relative ">
                        <div className="flex justify-end p-3 bg-blue-800 dark:bg-gray-950">
                            <button
                                onClick={handleCloseModal}
                                className="text-5xl cursor-pointer text-white font-bold hover:text-black dark:hover:text-blue-500">
                                &times;
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full flex flex-col justify-center p-8 pt-4">
                                <div>
                                    <h3 className=" text-base font-semibold uppercase px-4 py-2 bg-gray-300 dark:bg-slate-800 inline-block border-none rounded-xl mb-2">{selectedProject.title}</h3>
                                </div>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-full object-cover rounded-xl shadow-xl"
                                />
                                <h3 className="font-bold mt-5 mb-2 text-3xl">
                                    {selectedProject.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-base mb-5">
                                    {selectedProject.description}
                                </p>
                                <div className=" flex xl:justify-center md:justify-center xl:gap-35 md:gap-20 justify-between">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 dark:bg-slate-950 hover:dark:bg-slate-800 dark:text-gray-300 border-none text-white px-6 py-2 rounded-full text-md font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={selectedProject.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border-none bg-blue-600 dark:bg-slate-950 hover:dark:bg-slate-800 dark:text-gray-300 text-white px-6 py-2 rounded-full text-md font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                                    >
                                        View Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects



// For resource
/////////////////////////////////////////

// < div div className = " bg-blue-50 p-8 rounded-2xl grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" >
// {
//     projectData.map((project) => (
//         <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="bg-gray-100 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-800/50 hover:-translate-y-2 transition-transform duration-300 p-4">

//             <h3 className=" text-base font-semibold uppercase px-3 py-1 bg-gray-300 inline-block border-none rounded-xl mb-2">
//                 {project.title}
//             </h3>
//             <div>
//                 <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover rounded-xl" />
//             </div>
//             <div>
//                 <h3 className="text-2xl font-bold mt-5 mb-2">
//                     {project.name}
//                 </h3>

//                 <p className="text-gray-500 mb-4 line-clamp-3">
//                     {project.description}
//                 </p>
//             </div>
//         </div>
//     ))
// }
//         </ >