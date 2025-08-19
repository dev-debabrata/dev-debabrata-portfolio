import { BsMoonStars } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../Hook/UseTheme';


const ThemeToggler = () => {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-9 h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 flex items-center justify-center rounded-full border dark:border-gray-400 border-blue-400 hover:text-white hover:bg-blue-800 dark:hover:bg-white dark:hover:text-black cursor-pointer transition"
            aria-label="Toggle Theme"
        >
            <IoSunnyOutline className={`h-5 w-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 transition-all ${themeMode === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
            <BsMoonStars className={`absolute h-5 w-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 transition-all ${themeMode === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
        </button>
    );
};

export default ThemeToggler;
