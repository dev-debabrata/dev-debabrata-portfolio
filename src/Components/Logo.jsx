import React from 'react';
import { logoCard } from '../data';

const Logo = () => {
    const logos = Object.values(logoCard);

    return (
        <section className="bg-[#f1f3f5e4] dark:bg-[#111124f4] rounded-2xl dark:rounded-none py-5 sm:px-2">
            <div className="w-full overflow-hidden relative xl:h-18 h-15">
                <div className="flex gap-4 absolute whitespace-nowrap will-change-transform animate-marquee">
                    {/* Original + Duplicate for seamless scroll */}
                    {[...logos, ...logos].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`logo-${index}`}
                            className="w-15 xl:w-18 h-15 xl:h-18 object-contain pointer-events-none"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;










// For resource
//////////////////////////////////////////////////////
// import React from 'react'
// import { logoCard } from '../data'

// const Logo = () => {
//     return (
//         <section className="bg-gray-100 rounded-b-2xl py-5">
//             <div className=" w-[100vw] max-w-[100%] h-20 overflow-hidden relative">
//                 <div className="flex gap-4 absolute whitespace-nowrap will-change-transform animate-marquee ">
//                     {Object.values(logoCard).map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`logo-${index}`}
//                             className="w-20 h-20 object-contain pointer-events-none"

//                         />
//                     ))}

//                     {/* Duplicate for seamless infinite loop */}
//                     {Object.values(logoCard).map((src, index) => (
//                         <img
//                             key={`duplicate-${index}`}
//                             src={src}
//                             alt={`logo-duplicate-${index}`}
//                             className="w-20 h-20 object-contain"
//                         />
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Logo


// const Logo = () => {
//     return (
//         <section className="bg-gray-100 rounded-[30px] py-8 lg:rounded-none">
//             <div className="w-screen max-w-full h-32 overflow-hidden relative">
//                 <div className="absolute whitespace-nowrap animate-marquee flex gap-4">
//                     {Object.values(logoCard).map((src, index) => (
//                         <img
//                             key={index}
//                             src={src}
//                             alt={`logo-${index}`}
//                             className="w-20 h-20 object-contain"
//                         />
//                     ))}
//                     {/* Duplicate for seamless infinite loop */}
//                     {Object.values(logoCard).map((src, index) => (
//                         <img
//                             key={`duplicate-${index}`}
//                             src={src}
//                             alt={`logo-duplicate-${index}`}
//                             className="w-20 h-20 object-contain"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Logo;