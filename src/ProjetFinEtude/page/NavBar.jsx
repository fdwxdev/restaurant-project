import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='h-16 z-20 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 w-full flex items-center fixed top-0 shadow-lg'>
            <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-6">
                <div className="flex items-center">
                    <img src="DawQ.png" alt="Logo" className='h-10' />
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    {/* Nav Links */}
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => 
                            `text-xl text-white font-semibold hover:text-yellow-300 transition-colors duration-300 ${
                                isActive ? 'text-yellow-300' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        to='/Menu' 
                        className={({ isActive }) => 
                            `text-xl text-white font-semibold hover:text-yellow-300 transition-colors duration-300 ${
                                isActive ? 'text-yellow-300' : ''
                            }`
                        }
                    >
                        Menu
                    </NavLink>
                    
                    <NavLink 
                        to='/About'
                        className={({ isActive }) => 
                            `text-xl text-white font-semibold hover:text-yellow-300 transition-colors duration-300 ${
                                isActive ? 'text-yellow-300' : ''
                            }`
                        }
                    >
                        About us
                    </NavLink>
                    
                    <NavLink 
                        to='/Login'
                        className={({ isActive }) => 
                            `text-xl text-white font-semibold hover:text-yellow-300 transition-colors duration-300 ${
                                isActive ? 'text-yellow-300' : ''
                            }`
                        }
                    >
                        Login
                    </NavLink>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button className="text-white p-2 rounded-lg focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
