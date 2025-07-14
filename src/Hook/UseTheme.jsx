// import { useContext } from 'react';
// import { ThemeContext } from '../Context/ThemeContext';


// export const useTheme = () => useContext(ThemeContext);


import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};