import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className="bg-[#022d50] md:w-[85rem] md:mx-auto py-5 sticky top-0 z-10">
            <div className="flex justify-between mx-2 md:mx-7 items-center">
                <div className="flex flex-row items-center">
                    <img src="/crypto logo.png" className="h-10 md:h-20" alt="Crypto Logo" />
                    <h1 className="text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-green-600 via-green-400 to-lime-500 bg-clip-text text-transparent md:-ml-7">
                        Crypto
                    </h1>
                </div>
                <div className="text-white">
                    {/* Toggle Button - Only visible on small screens */}
                    <button
                        className="sm:hidden p-4 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>

                    {/* Navigation Links */}
                    <nav
                        className={`${isMenuOpen ? 'absolute top-16 left-0 w-full bg-[#022d50] p-5' : 'hidden'
                            } sm:flex justify-around py-3`}
                    >
                        <button className="hover:text-blue-500 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faHome} />
                            <Link to="/"><span>Home</span></Link>
                        </button>
                        <button className="hover:text-blue-500 flex items-center space-x-2 md:pl-4">
                            <i className="fa-solid fa-chart-simple"></i>
                            <Link to="/visual1"><span>View Graph</span></Link>
                        </button>
                        <button className="hover:text-blue-500 flex items-center space-x-2 md:pl-4">
                        <i class="fa-solid fa-message"></i>
                            <Link to="/contact"><span>Contact</span></Link>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
