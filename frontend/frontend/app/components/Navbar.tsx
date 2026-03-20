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
        <div className='relative z-10'>
            <nav className='max-w-5xl mx-auto flex items-center justify-between px-5 py-5'>
                <NavLink to="/" className='font-bold text-xl min-w-fit lg:text-3xl text-primary'>Sujal Sthapit</NavLink>

                {/* large screen */}
                <div className='hidden lg:flex mt-2 bg-nav-main-bg px-5 py-2 w-fit mx-auto border-2 border-gray-500 rounded-4xl items-center gap-5 text-primary text-md shadow-nav-shadow shadow-xs'>
                    <div className='flex gap-10'>
                        {navOptions.map((o) => (
                            <NavOption key={o.href} option={o} />
                        ))}
                    </div>
                    <ThemeToggleButton />
                </div>

                {/* mobile version */}
                <div className='flex items-center gap-4'>
                    <div className='flex lg:hidden bg-nav-main-bg rounded-full'>
                        <ThemeToggleButton />
                    </div>
                    <button onClick={() => setMenu(!menu)}>
                        <MenuIcon fontSize='large' className='flex! lg:hidden! text-primary cursor-pointer' />
                    </button>
                </div>
            </nav>

            <div className={`h-screen w-60 px-4 py-5 fixed top-0 right-0 z-50 bg-nav-main-bg text-base text-primary flex flex-col items-start space-y-5 lg:hidden ${menu === false ? "translate-x-full" : "translate-x-0"} transition duration-300`}>
                <button onClick={() => setMenu(false)} className='w-fit self-end'>
                    <CloseIcon fontSize='large' className='self-end cursor-pointer' />
                </button>
                {
                    navOptions.map((o) => (
                        <NavOption key={o.href} option={o} />
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
