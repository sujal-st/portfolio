import { useState } from 'react'
import { NavLink } from 'react-router'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavOption from './NavOption';
import ThemeToggleButton from './ThemeToggleButton';

function Navbar() {

    const [menu, setMenu] = useState(false)

    const navOptions = [
        { href: '#about', optionName: 'About' },
        { href: '#projects', optionName: 'Projects' },
        { href: '#stacks', optionName: 'Stacks' },
        { href: '#contact', optionName: 'Contact' },
    ]

    return (
        <nav className='max-w-5xl mx-auto mt-5 flex items-center justify-between px-5 overflow-clip'>
            <NavLink to="/" className='font-bold text-xl md:text-3xl text-primary'>Sujal Sthapit</NavLink>

            {/* large screen */}
            <div className='hidden md:flex mt-2 bg-nav-main-bg px-5 py-2 w-fit mx-auto border-2 border-gray-500 rounded-4xl items-center gap-5 text-primary text-md'>
                <div className='flex gap-10'>
                    {navOptions.map((o) => (
                        <NavOption key={o.href} option={o} />
                    ))}
                </div>
                <ThemeToggleButton />
            </div>

            {/* mobile version */}
            <button onClick={() => setMenu(!menu)}>
                <MenuIcon fontSize='large' className='flex! md:hidden! text-primary' />
            </button>

            <div className={`h-full w-60 px-4 py-5 absolute top-0 right-0 bg-nav-main-bg text-base text-primary flex flex-col items-start space-y-5 md:hidden ${menu === false ? "translate-x-500" : "translate-x-0"} transition duration-300`}>
                <button onClick={() => setMenu(false)} className='w-fit self-end'>
                    <CloseIcon fontSize='large' className='self-end' />
                </button>
                {
                    navOptions.map((o) => (
                        <NavOption key={o.href} option={o} />
                    ))
                }
            </div>


        </nav>
    )
}

export default Navbar
