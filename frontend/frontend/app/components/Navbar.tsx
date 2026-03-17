import {useState} from 'react'
import { NavLink } from 'react-router'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [menu, setMenu]= useState(false)

    return (
        <nav className='max-w-5xl mx-auto mt-5 flex items-center justify-between px-5 overflow-clip'>
            <NavLink to="/" className='font-bold text-xl md:text-3xl text-primary'>Sujal Sthapit</NavLink>

            {/* large screen */}
            <div className='hidden md:flex mt-2 bg-gray-900 px-5 py-2 w-fit mx-auto border-2 border-gray-500 rounded-4xl items-center gap-5 text-primary text-md'>
                <div className='flex gap-10'>
                    <NavLink to="#about" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">About</NavLink>
                    <NavLink to="#projects" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">Projects</NavLink>
                    <NavLink to="#stacks" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">Stack</NavLink>
                    <NavLink to="#contact" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">Contact</NavLink>
                </div>
            </div>

            {/* mobile version */}
            <button onClick={()=>setMenu(!menu)}>
                <MenuIcon fontSize='large' className='flex! md:hidden! text-primary' />     
            </button>

            <div className={`h-full w-60 px-4 py-5 absolute top-0 right-0 bg-gray-900 flex flex-col items-start space-y-5 md:hidden ${menu===false ? "translate-x-500": "translate-x-0"} transition`}>
                <button onClick={()=>setMenu(false)} className='w-fit self-end'>
                    <CloseIcon fontSize='small' className='self-end'/>
                </button>
                <NavLink to="#projects" className="px-4 py-1 mt-20 hover:bg-gray-700 hover:text-white transition rounded-full ">Projects</NavLink>
                <NavLink to="#stacks" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">Stack</NavLink>
                <NavLink to="#contact" className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full ">Contact</NavLink>
            </div>


        </nav>
    )
}

export default Navbar
