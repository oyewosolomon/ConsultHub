import React, { useState } from 'react';
import { Menu, X, User, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Find Experts', href: '#features' },
    // { label: 'Industries', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Resources', href: '#resources' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
          <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#2563eb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_app_recent_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_app_recent_24_filled" fill="#212121" fill-rule="nonzero"> <path d="M18,19.75 C18,20.940864 17.0748384,21.9156449 15.9040488,21.9948092 L15.75,22 L8.25,22 C7.05913601,22 6.08435508,21.0748384 6.00519081,19.9040488 L6,19.75 L6,4.25 C6,3.05913601 6.92516159,2.08435508 8.09595119,2.00519081 L8.25,2 L15.75,2 C16.940864,2 17.9156449,2.92516159 17.9948092,4.09595119 L18,4.25 L18,19.75 Z M19,5 L19.75,5 C20.940864,5 21.9156449,5.92516159 21.9948092,7.09595119 L22,7.25 L22,16.75 C22,17.940864 21.0748384,18.9156449 19.9040488,18.9948092 L19.75,19 L19,19 L19,5 Z M5,19 L4.25,19 C3.05913601,19 2.08435508,18.0748384 2.00519081,16.9040488 L2,16.75 L2,7.25 C2,6.05913601 2.92516159,5.08435508 4.09595119,5.00519081 L4.25,5 L5,5 L5,19 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
 <a href="#" className="text-2xl font-bold text-gray-900">
              ConsultHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Authentication and CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <User className="w-5 h-5 mr-2" />
                Account
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Login
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;