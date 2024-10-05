import React, { useState, useEffect } from 'react';
import { LINKS } from '../constants';
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close the menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);  // Close the mobile menu after clicking a link
  };

  // Toggle mobile menu on button click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the state of the mobile menu
  };

  // Handle scrolling to show/hide the navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex justify-between items-center max-w-6xl mx-auto p-5 md:my-2 bg-stone-950/30 md:rounded-xl backdrop-blur-lg'>
        <div className='text-white font-semibold text-3xl uppercase'>
          <a href="/">Yash Shiva</a>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-8 my-5 mx-2'>
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className='text-white hover:text-stone-400 transition duration-300 relative group'
            >
              {link.label}
              {/* Hover underline effect */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute right-0 bottom-[-4px] w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}  // Handle menu open/close
            className='text-white focus:outline-none'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className='w-6 h-6' />  // Close icon when menu is open
            ) : (
              <RiMenu3Fill className='w-6 h-6' />   // Menu icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto'>
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className='text-white hover:text-stone-400 transition duration-300'
              onClick={handleLinkClick}  // Close the menu when a link is clicked
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
