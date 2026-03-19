import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '~/contexts/themeContext';
import { useEffect, useState, useContext } from 'react';

function ThemeToggleButton() {

    const [mounted, setMounted]= useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);
    const context = useContext(ThemeContext);

    if(!mounted) return <div className='w-16'/>
    if (!context) return null;
    const { portTheme, toggleTheme } = context;

    return (
        <div className='rounded-full px-4 py-1 flex items-center gap-4 duration-700 ease-in-out'>
            <button onClick={()=>toggleTheme("light")}>
                <LightModeIcon fontSize='medium' className={`${portTheme === "light" ? 'text-secondary' : 'text-white'} rounded-full cursor-pointer hover:text-nav-hover-text hover:scale-105 transition duration-700 hover:shadow-black`} />
            </button>
            <button onClick={()=>toggleTheme("dark")}>
                <DarkModeIcon fontSize='medium' className={`${portTheme === "dark" ? 'text-secondary' : 'text-white'} rounded-full cursor-pointer hover:text-nav-hover-text hover:scale-105 transition duration-700 hover:shadow-black`} />
            </button>
        </div>
    )
}

export default ThemeToggleButton
