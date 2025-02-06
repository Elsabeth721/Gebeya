import { useState } from 'react';
import NavLinks from './NavLinks';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import NavMobile from './NavMobile';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const toogleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                <a href="" className='text-2xl font-bold text-gray-800'>Track <span className='text-blue-500'>Bill</span></a>

                <div className='hidden md:flex items-center space-x-6'>
                    <NavLinks/>
                    <div className='flex space-x-4'>
                        <button className='px-4 py-2 text-gray-800 hover:text-blue-500'>Sign up</button>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500'>Sign In</button>
                    </div>
                </div>

                <div className='md:hidden'>
                    <button onClick={toogleMenu} className='text-gray-800 focus:outline-none'>
                        {isMenuOpen? <RiCloseLine fill='currentColor' size={24}/> : <RiMenu3Fill fill='currentColor' size={24}/>}
                    </button>
                </div>
            </div>
        </div>

        <NavMobile isMenuOpen={isMenuOpen}/>
    </nav>
  )
}

export default Navbar
