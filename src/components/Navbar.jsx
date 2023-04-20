import { useState } from 'react'
import 'animate.css'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineLaptop, AiOutlineMail } from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const burgerButton = () => {
        
    }

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="">
                <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
                {nav ? (
                    <nav id='menu' className='animate__animated animate__fadeInRight fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome className='cursor-pointer text-2xl'/>
                            <span className='pl-4'>Home</span>    
                        </a>
                        <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineLaptop className='cursor-pointer text-2xl'/>
                            <span className='pl-4'>Works</span>  
                        </a>
                        <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject className='cursor-pointer text-2xl'/>
                            <span className='pl-4'>Projects</span>  
                        </a>
                        <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail className='cursor-pointer text-2xl'/>
                            <span className='pl-4'>Contact</span>  
                        </a>

                    </nav>
                ) : (
                    null
                )}
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome className='cursor-pointer text-2xl'/>
                        </a>
                        <a href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineLaptop className='cursor-pointer text-2xl'/>
                        </a>
                        <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject className='cursor-pointer text-2xl'/>
                        </a>
                        <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail className='cursor-pointer text-2xl'/>
                        </a>
                    </div>
                </div>
        </div>
    );
};




export default Navbar;