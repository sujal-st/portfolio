import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '~/contexts/themeContext';
import { useContext, useEffect, useState } from 'react';

function ThemeToggleButton() {

    const [mounted, setMounted]= useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) return <div className='w-16'/>

    const context = useContext(ThemeContext);
    if (!context) return null;
    const { portTheme, toggleTheme } = context;

    return (
        <div className='rounded-full px-4 py-1 flex items-center gap-4 duration-700 ease-in-out'>
            <button onClick={()=>toggleTheme("light")}>
                <LightModeIcon fontSize='medium' className={`${portTheme === "light" ? 'text-secondary' : 'text-white'} rounded-full cursor-pointer`} />
            </button>
            <button onClick={()=>toggleTheme("dark")}>
                <DarkModeIcon fontSize='medium' className={`${portTheme === "dark" ? 'text-secondary' : 'text-white'} rounded-full cursor-pointer`} />
            </button>
        </div>
    )
}

export default ThemeToggleButton
