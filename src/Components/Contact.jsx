// import React, { useRef } from 'react';
// import { iconInfoContact } from '../data';
// import ReCAPTCHA from 'react-google-recaptcha';

// const Contact = () => {
//     const recaptchaRef = useRef(null);

//     const onSubmit = async (event) => {
//         event.preventDefault();

//         const token = await recaptchaRef.current.executeAsync();
//         recaptchaRef.current.reset();

//         if (!token) {
//             alert("Please verify that you're not a robot.");
//             return;
//         }

//         const formData = new FormData(event.target);
//         formData.append("access_key", "7af5357d-0756-4b26-b7b9-3ddfdd361e92");
//         formData.append("g-recaptcha-response", token); // For Web3Forms

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             alert("Email Submitted Successfully");
//             event.target.reset();
//         } else {
//             alert("Submission failed. Please try again.");
//         }
//     };

// const onSubmit = async (event) => {
//     event.preventDefault();

//     // Get reCAPTCHA response
//     const recaptchaResponse = window.grecaptcha.getResponse();

//     // ✅ If not checked, show alert and stop submission
//     if (!recaptchaResponse) {
//         alert("Please verify that you're not a robot.");
//         return;
//     }

//     const formData = new FormData(event.target);
//     formData.append("access_key", "7af5357d-0756-4b26-b7b9-3ddfdd361e92");
//     formData.append("g-recaptcha-response", recaptchaResponse); // Required by Web3Forms

//     const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//         alert("Email Submitted Successfully");
//         event.target.reset(); // Reset the form
//         window.grecaptcha.reset(); // ✅ Reset reCAPTCHA
//     } else {
//         alert("Submission failed. Please try again.");
//     }
// };


// const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "7af5357d-0756-4b26-b7b9-3ddfdd361e92");

//     const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//         alert("Email Submitted Successfully");
//         event.target.reset();
//     } else {
//         alert("Submission failed. Please try again.");
//     }
// };

// import React, { useRef, useState } from 'react';
// import { iconInfoContact } from '../data';
// import ReCAPTCHA from 'react-google-recaptcha';

// const Contact = () => {
//     const recaptchaRef = useRef(null);
//     const [captchaToken, setCaptchaToken] = useState(null);


//     const onSubmit = async (e) => {
//         e.preventDefault();

//         if (!captchaToken) {
//             alert("Please complete the CAPTCHA");
//             return;
//         }

//         const formData = new FormData(e.target);
//         formData.append("access_key", "7af5357d-0756-4b26-b7b9-3ddfdd361e92");
//         formData.append("g-recaptcha-response", captchaToken);

//         // Debug log
//         for (let [key, val] of formData.entries()) {
//             console.log(key, val);
//         }

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await res.json();
//         console.log(data);

//         if (data.success) {
//             alert("Success");
//             e.target.reset();
//             recaptchaRef.current.reset();
//         } else {
//             alert(data.message || "Submission failed");
//         }
//     };

// const onSubmit = async (event) => {
//     event.preventDefault();

//     if (!captchaToken) {
//         alert("Please verify that you're not a robot.");
//         return;
//     }

//     const formData = new FormData(event.target);
//     formData.append("access_key", "7af5357d-0756-4b26-b7b9-3ddfdd361e92");
//     formData.append("g-recaptcha-response", captchaToken); // Web3Forms requires this

//     const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//         alert("Email Submitted Successfully");
//         event.target.reset();
//         recaptchaRef.current.reset();
//         setCaptchaToken(null);
//     } else {
//         alert("Submission failed. Please try again.");
//     }
// };
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { iconInfoContact } from '../data';
// import ReCAPTCHA from 'react-google-recaptcha';

// const Contact = () => {
//     const form = useRef();
//     const recaptchaRef = useRef(null);

//     const sendEmail = (e) => {
//         e.preventDefault();

//         const recaptchaValue = recaptchaRef.current.getValue();

//         if (!recaptchaValue) {
//             alert("Please complete the CAPTCHA");
//             return;
//         }

//         emailjs
//             .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//                 publicKey: 'YOUR_PUBLIC_KEY',
//             })
//             .then(
//                 () => {
//                     alert('Email sent successfully!');
//                     form.current.reset();
//                     recaptchaRef.current.reset();
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                     alert('Failed to send email. Please try again.');
//                 }
//             );
//     };





import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { iconInfoContact } from '../data';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please complete the CAPTCHA");
            return;
        }

        emailjs
            .sendForm('service_7iov10o', 'template_skahyly', form.current, {
                publicKey: '3SvRB8OsWc4xn3ya9',
            })
            .then(
                () => {
                    alert('Email sent successfully!');
                    form.current.reset();
                    recaptchaRef.current.reset();
                    setCaptchaToken(null);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email. Please try again.');
                }
            );
    };



    return (
        <section
            id='contact'
            className="flex flex-col md:justify-center md:items-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center gap-10 my-15 mx-[4%] md:my-20 lg:my-20 xl:my-20 md:mx-[7.5%] lg:mx-[10%] xl:mx-[10%] pt-4">
            <div className="relative">
                <h1 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold px-8 dark:text-gray-100">
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

                <form ref={form} onSubmit={sendEmail}
                    action=""
                    className="flex flex-col items-start gap-3 basis-[55%]">
                    <label
                        htmlFor=""
                        className="text-gray-500  dark:text-gray-400 text-[18px] font-semibold">Your Name</label>
                    <input
                        className=" peer border border-transparent w-full py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:invalid:ring-red-500"
                        type="text"
                        placeholder='Enter your name'
                        name='name'
                        required />
                    <label
                        htmlFor=""
                        className="text-gray-500 dark:text-gray-400 text-[18px] font-semibold">Your Email</label>
                    <input
                        className="peer border border-transparent w-full py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:invalid:ring-red-500"
                        type="email"
                        placeholder='Enter your email'
                        name='email'
                        required />
                    <label
                        htmlFor=""
                        className="text-gray-500 dark:text-gray-400 text-[18px] font-semibold">Write your message here</label>
                    <textarea
                        className="border-none w-full lg:w-[650px] xl:w-[650px] py-4 pl-5 rounded-md bg-blue-200 dark:bg-slate-700 text-gray-800 dark:placeholder-gray-500 text-md dark:text-gray-200 "
                        name="message"
                        rows="8"
                        placeholder='Enter your message'
                        required>
                    </textarea>
                    <input type="hidden" name="time" value={new Date().toLocaleString()} />
                    {/* Google reCAPTCHA */}

                    {/* localhost */}
                    {/* <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lfe3pArAAAAAAxDLr5DfpJqqjNQWkx4W7z-6s6c"
                        onChange={(token) => setCaptchaToken(token)}
                    /> */}

                    {/* Onrender.com */}
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lf73ZArAAAAAOQP_nxYMR-vo0bz46Em8mtcSgcA"
                        onChange={(token) => setCaptchaToken(token)}
                    />
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