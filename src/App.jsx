import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import ProjectsList from "./Pages/ProjectsList";
import GradientTxt from "./Components/GradientTxt";


// Preloader Component
const Preloader = () => {
  return (
    <section className="fixed left-0 top-0 inline-flex h-full w-full items-center justify-center bg-[#f3f3f3] z-50">
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
        }}
      >
        <GradientTxt
          tagName="h2"
          txt="</>"
          className="text-[28px] font-bold md:text-[36px] xl:text-[54px]"
        />
      </motion.div>
    </section>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasPreloaderBeenShown = localStorage.getItem("preloaderShown");

    if (!hasPreloaderBeenShown) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("preloaderShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("preloaderShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <div key="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectslist" element={<ProjectsList />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;




// import React from 'react'
// import { Route, Routes, Navigate } from 'react-router-dom'
// import Home from './Pages/Home'
// import ProjectsList from './Pages/ProjectsList'


// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/projectslist' element={<ProjectsList />} />
//         <Route path='/home' element={<Navigate to="/" />} />
//         <Route path='*' element={<h1>404 - Page Not Found</h1>} />
//       </Routes>

//     </div>
//   )
// }

// export default App