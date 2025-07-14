import { BsMoonStars } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../Hook/UseTheme';


const ThemeToggler = () => {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border dark:border-gray-500 border-blue-400 hover:bg-gray-950 dark:hover:bg-blue-500 transition"
            aria-label="Toggle Theme"
        >
            <IoSunnyOutline
                className={`h-6 w-6 transition-all ${themeMode === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
            />
            <BsMoonStars
                className={`absolute h-6 w-6 transition-all ${themeMode === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
            />
        </button>
    );
};

export default ThemeToggler;
