import React from 'react'
import { iconInfoContact } from '../data';

const Contact = () => {
    return (
        <section
            id='contact'
            className="dark:bg-slate-950 flex flex-col md:justify-center md:items-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center gap-10 my-15 mx-[4%] md:my-20 lg:my-20 xl:my-20 md:mx-[7.5%] lg:mx-[10%] xl:mx-[10%]">
            <div className="relative">
                <h1 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold px-8 dark:text-gray-300">
                    Get in touch
                </h1>
                <div className=" w-30 md:w-42 lg:w-42 xl:w-42 h-1 bg-blue-600 mx-auto mt-2"></div>
            </div>
            <div className="bg-[#edf2ff] dark:bg-slate-900 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 w-full p-8 md:p-10 lg:p-10 xl:p-10 rounded-2xl">
                {/* Left section */}
                <div className="flex flex-col gap-5 basis-[40%]">
                    <h1 className="text-3xl font-semibold text-blue-900 dark:text-blue-800">Let's talk</h1>
                    <p className="text-gray-500 max-w-[550px] leading-[25px] text-[16px] dark:text-gray-400">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="flex flex-col justify-start  gap-5 items-start text-[15px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                        {iconInfoContact.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    className="flex items-center gap-x-4 mt-1 mx-0 md:mx-0 xl:mx-0"
                                    key={index}>
                                    <div className=" text-blue-700 text-primary "><Icon size={20} /></div>
                                    <div className=' dark:text-gray-200'>{item.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Right section */}

                <form
                    action=""
                    className="flex flex-col items-start gap-3 basis-[55%]">
                    <label
                        htmlFor=""
                        className="text-gray-500  dark:text-gray-400 text-[18px] font-semibold">Your Name</label>
                    <input
                        className="border-none w-full py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md "
                        type="text"
                        placeholder='Enter your name'
                        name='name' />
                    <label
                        htmlFor=""
                        className="text-gray-500 dark:text-gray-400 text-[18px] font-semibold">Your Email</label>
                    <input
                        className="border-none w-full py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md "
                        type="email"
                        placeholder='Enter your email'
                        name='email' />
                    <label
                        htmlFor=""
                        className="text-gray-500 dark:text-gray-400 text-[18px] font-semibold">Write your message here</label>
                    <textarea
                        className="border-none w-full lg:w-[650px] xl:w-[650px] py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md dark:text-gray-200 "
                        name="message"
                        rows="8"
                        placeholder='Enter your message'></textarea>
                    <button
                        className="border-none text-white rounded-full bg-blue-600 dark:bg-blue-800 hover:bg-blue-700 text-xl mt-5 px-8 py-3 font-semibold transition duration-300 transform hover:scale-105 cursor-pointer">
                        Submit now
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact