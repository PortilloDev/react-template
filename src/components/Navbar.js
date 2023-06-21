import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar (){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <nav className="bg-black text-white fixed top-0 left-0 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <NavLink to="/" className="font-bold text-lg">
            Logo
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink
            to="/"
            className="hover:text-gray-300"
            activeClassName="text-gray-300 font-semibold"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300"
            activeClassName="text-gray-300 font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-gray-300"
            activeClassName="text-gray-300 font-semibold"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-300"
            activeClassName="text-gray-300 font-semibold"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar