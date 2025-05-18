import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="p-5">
            <nav className="flex justify-between items-center md:px-10 px-5">
                <div className="flex items-center space-x-2">
                    <div className="p-3">
                        <div className="h-5 w-5 bg-green-300"></div>
                    </div>
                    <h1>Kean/</h1>
                </div>

                {/* Burger Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <div className="space-y-1 cursor-pointer">
                        <div className="w-6 h-1 bg-black"></div>
                        <div className="w-6 h-1 bg-black"></div>
                        <div className="w-6 h-1 bg-black"></div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <ul
                    className={`${isMenuOpen ? 'fixed inset-0 flex flex-col items-center justify-center bg-white z-50' : 'hidden'
                        } md:flex md:static md:space-x-4 p-3`}
                >
                    <li className="p-2 md:p-0"><a href="/">Home</a></li>
                    <li className="p-2 md:p-0"><a href="/about">About</a></li>
                    <li className="p-2 md:p-0"><a href="/projects">Projects</a></li>
                    <li className="p-2 md:p-0"><a href="/resume">Resume</a></li>
                    <button
                        className="mt-5 md:hidden bg-black text-white px-4 py-2 rounded"
                        onClick={toggleMenu}
                    >
                        Close
                    </button>
                </ul>
            </nav>
        </div>
    );
};

export default Header;