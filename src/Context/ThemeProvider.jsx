// import { useEffect, useState } from 'react';
// import { ThemeContext } from './ThemeContext';

// const ThemeProvider = ({ children }) => {
//     const [themeMode, setThemeMode] = useState(() => {
//         return localStorage.getItem('theme') || 'light';
//     });

//     useEffect(() => {
//         const root = document.documentElement;
//         if (themeMode === 'dark') {
//             root.classList.add('dark');
//         } else {
//             root.classList.remove('dark');
//         }
//         localStorage.setItem('theme', themeMode);
//     }, [themeMode]);

//     const toggleTheme = () => {
//         setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
//     };

//     return (
//         <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export default ThemeProvider;


import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const root = document.documentElement;
        if (themeMode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
