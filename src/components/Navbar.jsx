import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


  return (
    <nav className='bg-green-700 text-white py-4 md:py-8'>
        <div className='container mx-auto flex justify-between items-center'>
            <h3> React Practice </h3>

            {/* Mobile Menu Button */}
            <div>
                <button onClick={toggleMenu}>
                    {
                        isOpen ? <IoCloseSharp /> : <FaBars />
                    }
                </button>
            </div>

            <ul className='flex space-x-04 md:space-x-8'>
                <li> Home </li>
                <li> Products </li>
                <li> Blogs </li>
                <li> Contact </li>
                <li> About </li>
            </ul>
            <button> Login </button>
        </div>
    </nav>
  )
}

export default Navbar