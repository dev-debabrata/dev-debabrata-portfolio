import React from 'react'
import { iconInfoContact } from '../data';

const Contact = () => {
    return (
        <section id='contact' className=" flex flex-col justify-center items-center gap-10 my-20 mx-[10%]">
            <div className="text-5xl font-bold">
                <h1>Get in touch</h1>
                <div className=" w-55 h-1 bg-blue-600 mx-auto mt-3"></div>
            </div>
            <div className="flex justify-between w-[100%] bg-blue-50 p-10 rounded-2xl">
                {/* Left section */}
                <div>
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div>
                        {iconInfoContact.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    className="flex items-center gap-x-4 mt-1 mx-auto xl:mx-0"
                                    key={index}>
                                    <div className=" text-blue-700 text-primary "><Icon size={20} /></div>
                                    <div>{item.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Right section */}

                <form action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button>Submit now</button>
                </form>
            </div>
        </section>
    )
}

export default Contact